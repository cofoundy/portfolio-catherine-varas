/**
 * Global interaction effects: scroll reveal, spotlight cards, counters,
 * magnetic buttons, cursor glow, scroll progress, timeline draw, nav active link.
 */
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHover = window.matchMedia("(hover: hover)").matches;

/* ── Scroll reveal ── */
const revealObs = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("revealed");
        revealObs.unobserve(e.target);
      }
    }
  },
  { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
);
document.querySelectorAll(".reveal, .reveal-scale").forEach((el) => revealObs.observe(el));

/* ── Spotlight cards ── */
document.querySelectorAll<HTMLElement>(".spot").forEach((card) => {
  card.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  });
});

/* ── Animated counters ── */
const countObs = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const el = e.target as HTMLElement;
      countObs.unobserve(el);
      const target = Number(el.dataset.target);
      if (!Number.isFinite(target)) continue;
      if (reduced) {
        el.textContent = String(target);
        continue;
      }
      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = String(Math.round(eased * target));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  },
  { threshold: 0.5 },
);
document.querySelectorAll<HTMLElement>(".counter[data-target]").forEach((c) => countObs.observe(c));

/* ── Magnetic buttons ── */
if (!reduced && canHover) {
  document.querySelectorAll<HTMLElement>(".magnetic").forEach((btn) => {
    btn.addEventListener("pointermove", (e) => {
      const r = btn.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      btn.style.transform = `translate(${dx * 0.25}px, ${dy * 0.25}px)`;
    });
    btn.addEventListener("pointerleave", () => {
      btn.style.transform = "";
    });
  });
}

/* ── Cursor glow ── */
const glow = document.getElementById("cursor-glow");
if (glow && !reduced && canHover) {
  let tx = window.innerWidth / 2;
  let ty = window.innerHeight / 3;
  let x = tx;
  let y = ty;
  window.addEventListener(
    "pointermove",
    (e) => {
      tx = e.clientX;
      ty = e.clientY;
      glow.classList.add("on");
    },
    { passive: true },
  );
  const loop = () => {
    x += (tx - x) * 0.08;
    y += (ty - y) * 0.08;
    glow.style.transform = `translate(${x - 320}px, ${y - 320}px)`;
    requestAnimationFrame(loop);
  };
  loop();
}

/* ── Scroll progress + timeline draw ── */
const progress = document.getElementById("scroll-progress");
const timeline = document.getElementById("timeline-line");
let ticking = false;
const onScroll = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    ticking = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    if (timeline) {
      const r = timeline.getBoundingClientRect();
      const p = (window.innerHeight * 0.78 - r.top) / r.height;
      timeline.style.setProperty("--tl", String(Math.min(1, Math.max(0, p))));
    }
  });
};
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll, { passive: true });
onScroll();

/* ── Experience accordion ── */
document.querySelectorAll<HTMLElement>(".exp-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest<HTMLElement>(".exp-card");
    if (!card) return;
    const isOpen = card.dataset.open === "true";
    card.dataset.open = String(!isOpen);
    btn.setAttribute("aria-expanded", String(!isOpen));
    const label = btn.querySelector<HTMLElement>(".exp-label");
    if (label) label.textContent = isOpen ? "Details" : "Hide";
  });
});

/* ── Nav active link ── */
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-nav]"));
if (navLinks.length) {
  const byId = new Map<string, HTMLAnchorElement[]>();
  for (const a of navLinks) {
    const id = a.getAttribute("href") || "";
    byId.set(id, [...(byId.get(id) || []), a]);
  }
  const secObs = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        navLinks.forEach((a) => a.classList.remove("is-active"));
        (byId.get(`#${e.target.id}`) || []).forEach((a) => a.classList.add("is-active"));
      }
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
  );
  byId.forEach((_, id) => {
    const section = document.querySelector(id);
    if (section) secObs.observe(section);
  });
}
