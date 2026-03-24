# Propuesta de Diseño: Catherine Varas

## Identidad
Catherine es una Data Engineer peruana que migró a Australia para hacer su Master en Data Science. Su superpower es la migración de sistemas legacy a cloud — lideró la migración del core banking de BBVA (uno de los bancos más grandes de LATAM) desde IBM Mainframe a la nube. Ahora está construyendo soluciones con RAG y GenAI en Sydney. Es técnica, internacional, y ambiciosa.

## Audiencia
- **Recruiters australianos** en fintech/data engineering → necesitan ver: skills, certs, visa status
- **Hiring managers en data teams** → necesitan ver: experiencia concreta con Spark/Azure/pipelines, impacto medible
- **CTOs/Tech leads** → necesitan ver: proyectos GitHub, capacidad de construir end-to-end

## Metáfora Visual
El flujo de datos: streams de partículas moviéndose en patrones orgánicos sobre fondo oscuro — como data pipelines visualizados. Tecnológico, preciso, pero vivo. Como mirar un dashboard de datos en tiempo real a las 2am.

## Paleta (6 colores)

Basada en kalpsenghani.com (primary ref) + feel de data engineering:

- **primaryDark:** `#030712` — gray-950, near-black space (fondo principal)
- **primary:** `#3b82f6` — blue-500, acento dominante (igual que kalpsenghani)
- **primaryLight:** `#93c5fd` — blue-300, highlights y hover states
- **accent:** `#8b5cf6` — violet-500, gradientes secundarios y CTAs
- **surface:** `#111827` — gray-900, cards y secciones alternadas
- **surfaceLight:** `#1f2937` — gray-800, cards hover, borders sutiles

**Gradientes clave:**
- Hero text: `#3b82f6` → `#8b5cf6` → `#ec4899` (blue → violet → pink)
- Card borders: `#3b82f6` → `#8b5cf6` (blue → violet)
- Background particles: hue 220 (cyan-blue), saturation 100%, glow

## Tipografía
- **Headings:** Space Grotesk (geometric, tech-forward — inspirado por antonmanaev)
- **Body:** Inter (clean, neutral, legible — igual que kalpsenghani)
- **Code/badges:** JetBrains Mono (dev feel para tech stack)

## Secciones Propuestas (en orden)

### 1. Hero — "Data Engineer" (full viewport)
```
┌─────────────────────────────────────────────┐
│  ╔═══ ANIMATED PARTICLE BACKGROUND ══════╗  │
│  ║  (simplex noise vortex, blue glow)    ║  │
│  ║                                        ║  │
│  ║     Catherine Varas                    ║  │
│  ║     [gradient text, Space Grotesk]     ║  │
│  ║                                        ║  │
│  ║     Data Engineer · Cloud · AI         ║  │
│  ║     [rotating taglines]               ║  │
│  ║                                        ║  │
│  ║     [ 4+ Years ] [ 6 Certs ] [ 70+ ]  ║  │
│  ║       Experience   Cloud     Components║  │
│  ║                                        ║  │
│  ║     [GitHub] [LinkedIn] [Email]        ║  │
│  ║                                        ║  │
│  ║     [View My Work] [Download CV]       ║  │
│  ║            ↓ scroll                    ║  │
│  ╚════════════════════════════════════════╝  │
└─────────────────────────────────────────────┘
```
- **Efecto clave:** Canvas con partículas simplex-noise (ala kalpsenghani)
- Stats row con animated counters (ala abbasraza)
- Rotating taglines: "Building Data Platforms" → "Migrating Legacy to Cloud" → "Enabling AI Integration"
- Social icons con glass-morphism hover
- No foto en hero — el fondo animado ES el visual

### 2. About — "The Journey" (narrative)
```
┌─────────────────────────────────────────────┐
│                                             │
│  [ Lima 🇵🇪 → Sydney 🇦🇺 ]                 │
│                                             │
│  ┌─────────────────┐  ┌──────────────────┐  │
│  │ PHOTO           │  │ From engineering  │  │
│  │ (profile.jpg)   │  │ data pipelines   │  │
│  │                 │  │ at BBVA to        │  │
│  │                 │  │ building AI       │  │
│  │                 │  │ solutions at UQ.  │  │
│  └─────────────────┘  │                  │  │
│                        │ Currently:       │  │
│                        │ Master's in DS   │  │
│                        │ @ University of  │  │
│                        │ Queensland       │  │
│                        └──────────────────┘  │
│                                             │
│  [ Tech Stack pills con iconos ]            │
│  Java · Python · Spark · Azure · AWS ···    │
│                                             │
└─────────────────────────────────────────────┘
```
- 2-col: foto izquierda, narrative derecha
- Badge pills animados para tech stack
- Country flags como accent visual
- Glass card

### 3. Experience — "Career Timeline" (timeline vertical)
```
┌─────────────────────────────────────────────┐
│                                             │
│  ● 2025-Present                             │
│  │ ┌────────────────────────────────────┐   │
│  │ │ ONE51 · Data Engineering Intern    │   │
│  │ │ Sydney, Australia                  │   │
│  │ │ RAG framework · Streamlit · Azure  │   │
│  │ └────────────────────────────────────┘   │
│  │                                          │
│  ● 2024-2025                                │
│  │ ┌────────────────────────────────────┐   │
│  │ │ BBVA · Associate Data Engineer     │   │
│  │ │ Lima, Peru                 ★ KEY   │   │
│  │ │ Core banking migration             │   │
│  │ │ Mainframe → Cloud                  │   │
│  │ │ Millions of records · Spark        │   │
│  │ └────────────────────────────────────┘   │
│  │                                          │
│  ● 2022-2024  BBVA · Junior Data Engineer   │
│  ● 2022       Kyndryl · Cloud Intern        │
│  ● 2021-2022  Vida Software · BI Analyst    │
│                                             │
└─────────────────────────────────────────────┘
```
- Timeline vertical con line draw animation
- Cards con glass-morphism + blue left border
- BBVA role prominente (más grande, ★ badge)
- Location badges (Australia, Peru)

### 4. Projects — "Featured Work" (3D cards)
```
┌─────────────────────────────────────────────┐
│                                             │
│  ┌──────────────┐  ┌──────────────┐         │
│  │ T-SQL→Snow   │  │ YOLO+SAM2    │         │
│  │ flake RAG    │  │ Lab Tracking  │         │
│  │ Translator   │  │              │         │
│  │              │  │ Python       │         │
│  │ Python · MIT │  │ CV · AI      │         │
│  │ [GitHub →]   │  │ [GitHub →]   │         │
│  └──────────────┘  └──────────────┘         │
│                                             │
│  ┌──────────────┐  ┌──────────────┐         │
│  │ Traffic Big  │  │ Harvest-Jira │         │
│  │ Data Spark   │  │ Automation   │         │
│  │ HDFS         │  │ Engine       │         │
│  │              │  │              │         │
│  │ Jupyter      │  │ Python · MIT │         │
│  │ [GitHub →]   │  │ [GitHub →]   │         │
│  └──────────────┘  └──────────────┘         │
│                                             │
└─────────────────────────────────────────────┘
```
- Grid 2x2 (desktop), 1-col (mobile)
- 3D perspective transform on hover (ala kalpsenghani)
- Gradient border glow
- Tech badge pills
- GitHub link per card

### 5. Certifications — "Credentials" (badge grid)
```
┌─────────────────────────────────────────────┐
│                                             │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│  │ [MS]    │ │ [MS]    │ │ [MS]    │       │
│  │ Fabric  │ │ Fabric  │ │ Power   │       │
│  │ DE      │ │ AE      │ │ BI      │       │
│  │ DP700   │ │ DP600   │ │ PL300   │       │
│  └─────────┘ └─────────┘ └─────────┘       │
│                                             │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│  │ [AWS]   │ │ [MS]    │ │ [AI]    │       │
│  │ Cloud   │ │ Azure   │ │ GenAI   │       │
│  │ Pract.  │ │ Fund.   │ │ Fund.   │       │
│  └─────────┘ └─────────┘ └─────────┘       │
│                                             │
└─────────────────────────────────────────────┘
```
- 3x2 grid (desktop), 2x3 (mobile)
- Glass cards con provider icon (MS, AWS)
- Staggered reveal animation
- Hover: scale up + glow
- Inspirado en abinash-sharma cert display

### 6. Education — "Academic Path" (cards)
```
┌─────────────────────────────────────────────┐
│                                             │
│  ┌────────────────────────────────────────┐ │
│  │ 🎓 Master in Data Science              │ │
│  │ University of Queensland · 2025-2026   │ │
│  │ Cloud Computing, ML, AI, Data Analytics│ │
│  └────────────────────────────────────────┘ │
│                                             │
│  ┌──────────────────┐ ┌──────────────────┐  │
│  │ Industrial Eng.  │ │ Computer Science │  │
│  │ UPC · 2019-2023  │ │ Cibertec · 2019  │  │
│  └──────────────────┘ └──────────────────┘  │
│                                             │
└─────────────────────────────────────────────┘
```
- UQ card prominente (full width, larger)
- UPC + Cibertec en 2-col (secondary)

### 7. Contact — "Let's Connect" (minimal)
```
┌─────────────────────────────────────────────┐
│                                             │
│     Let's Build Something Together          │
│                                             │
│     [catherine.varas.padilla@gmail.com]     │
│                                             │
│     [GitHub]  [LinkedIn]  [Email]           │
│                                             │
└─────────────────────────────────────────────┘
```
- Simple CTA section, no form
- Glass card centered
- Gradient text heading

### 8. Footer
- Copyright + "Built with Astro & Tailwind"
- Back to top button
- Social icons repeat

## Secciones que NO incluir
- **Services** — es empleada, no freelancer
- **Blog** — no tiene contenido de blog
- **Testimonials** — no aplica
- **CTA con precios** — no vende servicios
- **Skills pills genéricas** — integradas en About section

## Efecto Visual Único (Premium mandatory)
**Animated Particle Vortex Background** — Canvas con simplex-noise particles en el hero, inspirado directamente en kalpsenghani.com. Partículas azul-cyan fluyendo en patrones orgánicos. Esto es lo que Catherine pidió explícitamente ("colores y fondo en movimiento"). Implementación: vanilla JS canvas (no React, estamos en Astro).

## Efecto Secundario
**3D card transforms** en Projects section — perspectiva que sigue el mouse, con gradient border glow. Inspirado en kalpsenghani project cards.

## Mobile Strategy
- Particle count reducido a 200 en mobile (vs 500 desktop)
- Name: `text-2xl sm:text-3xl md:text-5xl`
- Cards: 1-col en mobile, 2-col en desktop
- Nav: hamburger mobile con glass overlay
- Touch targets 44px+
- `overflow-x: hidden` en html+body
