# QA Report: Catherine Varas

**Date:** 2026-03-24
**URL:** https://catherine-varas.cofoundy.dev
**Status:** FAIL

## Data Validation
- [x] Name matches source ("Catherine Varas" on page matches Sheet + config.ts)
- [x] Email matches source (catherine.varas.padilla@gmail.com — Cloudflare-encoded on page, matches Sheet)
- [x] Job title matches source ("Data Engineer" — matches Sheet titulo and config.ts)
- [x] Companies listed exist in source (One51, BBVA, Kyndryl, Vida Software — all from config.ts/CV)
- [x] Education institutions exist in source (University of Queensland, UPC, Cibertec — all from config.ts)
- [x] Dates match source (all date ranges match config.ts)
- [x] No hallucinated data detected

## Clean Deploy
- [ ] **FAIL: "Built with Astro & Tailwind" visible in footer** (src/components/Footer.astro line 12)
- [x] No placeholder text (no "Lorem ipsum", "Your name here", "[placeholder]", "Diego Quispe")
- [x] No template links (no "View source", "Fork this", "View on GitHub" template links)
- [x] No "undefined" or "null" visible in content
- [x] No broken anchor links (#about, #experience, #projects, #certifications, #contact all present as sections)

## Sections Verification
- [x] Hero section (name, tagline rotation, stats bar, particle canvas)
- [x] About section ("The Journey", Lima to Sydney narrative, tech stack grid)
- [x] Experience section (5 roles: One51, BBVA x2, Kyndryl, Vida Software)
- [x] Projects section (4 projects with GitHub links)
- [x] Certifications section (6 certs: DP-700, DP-600, PL-300, CLF-C02, AZ-900, Databricks)
- [x] Education section (3 schools: UQ, UPC, Cibertec)
- [x] Contact section (CTA + social links)
- [x] Footer (copyright + back-to-top)

## Technical
- [x] Site loads (HTTP 200)
- [x] CSS loads — `/_astro/index.Cm0FUOWi.css` (HTTP 200, content-type: text/css)
- [x] Profile image loads — `/profile.png` (HTTP 200, content-type: image/png)
- [x] Favicon loads — `/favicon.svg` (HTTP 200, content-type: image/svg+xml)
- [x] OG image loads — `/og.jpg` (HTTP 200, content-type: image/jpeg)
- [x] Space Grotesk font referenced (Google Fonts link present)
- [x] Particle animation canvas present (id="particle-canvas", 2 references)
- [x] Dark theme confirmed (bg: #030712, text: #f1f5f9 in config)
- [x] Structured data (JSON-LD) present and correct

## Links
- [x] GitHub profile: https://github.com/catherinevaraspadilla-commits/ (HTTP 200)
- [x] LinkedIn profile: https://www.linkedin.com/in/catherine-varas/ (HTTP 999 — LinkedIn blocks curl, normal)
- [x] Project repo 1 — tsql-to-snowflake-llm-rag-translator (HTTP 200)
- [x] Project repo 2 — yolo-sam2-lab-tracking (HTTP 200)
- [x] Project repo 3 — traffic-bigdata-spark-hdfs (HTTP 200)
- [x] Project repo 4 — Harvest-Jira-Automation-Engine (HTTP 200)
- [x] Email links (Cloudflare email protection encoded — 3 instances)

## Console Errors
- N/A — Chrome MCP server unavailable for console capture

## Screenshots
- N/A — Chrome MCP server unavailable for screenshots (desktop + mobile)

## Issues Found
1. **[FAIL] Footer watermark: "Built with Astro & Tailwind"** visible to users in footer.
   - File: `src/components/Footer.astro` line 11-13
   - Fix: Remove the `<p>` element containing "Built with Astro & Tailwind" or replace with empty/copyright-only footer

## Recommended Fix
Replace lines 11-13 in `src/components/Footer.astro`:
```diff
-    <p class="text-xs text-slate-700">
-      Built with Astro & Tailwind
-    </p>
```
Then rebuild and redeploy.
