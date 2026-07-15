# Resume 2026 — Context & Guidelines

> Working document for modernizing Michał Wroński's resume / portfolio on bigmikesolutions.com.
> Status: **awaiting instructions** — guidelines captured, no content changes applied yet.

---

## Strategic positioning

**Target persona:** Enterprise System Architect & AI Orchestrator (not "Software Developer").

**Current hero (traditional):**
> Senior Software Developer with 15 years of experience in Java, Python, and Banking Systems.

**2026 hero (strategic):**
> Enterprise Systems Architect & AI Orchestrator. Specialized in high-availability banking infrastructure and resilient AI integration. I solve complexity, not just write code.

**Core message shift:** From "list of technologies" → **proof of high-stakes reliability**.

---

## 2026 Power Stack — skills to emphasize

| Area | What to highlight |
|------|-------------------|
| **AI Orchestration & Governance** | Agentic Workflows, Model Context Protocol (MCP) — safe AI ↔ enterprise data integration |
| **System Resilience & Chaos Engineering** | Resilience Testing, Zero-Trust Architecture, Observability (OpenTelemetry) |
| **Legacy-to-AI Bridge** | Modernize Legacy Monoliths using AI-assisted Refactoring (banks/telcos pain point) |

---

## Case study formula (Portfolio of Impact)

Replace generic project lists with **Mission-Critical Case Studies** using ADR-style framing:

```
The High-Stakes Problem → The Systemic Solution → The Risk Mitigated
```

**Example (banking):**
> Redesigned a legacy payment gateway processing $2M/day. Implemented AI-driven anomaly detection which reduced fraud by 14% while maintaining 99.99% uptime during the migration.

**Google XYZ formula for experience bullets:**
> Osiągnąłem **[X]**, mierzone przez **[Y]**, robiąc **[Z]**.

---

## Section overhaul (old → new)

| Old section | 2026 equivalent | Why |
|-------------|-----------------|-----|
| Tech Stack | **Architectural Sovereignty** | Right tool for the job, not popularity |
| Project List | **Mission-Critical Case Studies** | Systems that cannot fail |
| Services | **AI Strategy & System Auditing** | Consultant/leader, not "hand for hire" |

---

## SEO / recruiter keywords (2026)

Sprinkle throughout site copy:

- Agentic AI Architectures
- High-Availability Distributed Systems
- Financial Compliance (GDPR / DORA)
- Technical Debt Remediation
- Human-in-the-Loop Governance

---

## Polish HR market insights (2026)

### What fails today
- Copy-paste job duties ("maintaining systems", "writing code")
- Technology walls (every framework ever touched)
- Skill progress bars (meaningless to business)

### What works today
- **Impact > Tasks** — measurable outcomes, not role descriptions
- **Business context** — for whom, at what scale, what client problem solved
- **Scannability** — simple layout; tech stack tied to specific projects, not one bag at the bottom

### 3 quick wins
1. **Professional Summary** — 3–4 strong sentences at the top (elevator pitch)
2. **Cut noise** — remove outdated tech you won't return to; less but sharper
3. **XYZ formula** — every bullet follows: achieved X, measured by Y, by doing Z

---

## Current site baseline (as of 2026-07-15)

### Implementation
- Page: `src/pages/Resume.vue`
- Data: `src/config/resumeConfig.ts`
- i18n: `src/i18n/locales/en.json`, `pl.json` (key: `resume.*`)

### Current state gaps vs. 2026 guidelines
| Element | Current | Target |
|---------|---------|--------|
| Title | "Senior Backend Developer" | Enterprise Systems Architect & AI Orchestrator |
| Experience badge | "8+" years | Should reflect 15+ years |
| Tech section | Grouped stack with years (Frontend/Backend/DevOps…) | Architectural Sovereignty — context-driven |
| Projects | Generic descriptions + responsibility tags | Mission-Critical Case Studies (Problem → Solution → Risk) |
| Companies | Placeholder entries (BigMikeSolutions, Past Company) | Real career timeline |
| Summary | None | Professional Summary / hero hook at top |
| Source resume | `public/resume.md` referenced but **not in repo yet** | Primary source of truth for real experience |

### Recommendations already on site
- Błazej Budzyński (Software Architect & Technical Leader) — NSN, REC
- Petra Crhák (Project Manager) — global dev project

---

## Source material — career data (from attached `resume.md`)

### Shell Recharge (May 2021 – May 2025)
- **Role:** Senior Software Engineer
- **Company:** Shell Recharge (EV charging, former NewMotion)
- **Details:** Development of solutions for Charge Point Operator (CPO), including OCPI, OCPP & BOCPP protocols.
- **Responsibilities:** solution design, backend development, devops, e2e testing, on-calls
- **Technologies:** Go, Docker, Kubernetes, AWS, Postgres, Kafka, Flink, GraphQL API (with federation), gRPC, REST API, Terraform, GitLab pipelines, Vault, TDD, BDD

> More entries expected from full `resume.md` once added to the repo.

---

## Next steps (pending user instructions)

- [ ] Add / import full `public/resume.md` source
- [ ] Rewrite hero + professional summary
- [ ] Restructure sections per 2026 mapping
- [ ] Convert projects/experience into case studies (XYZ + Problem/Solution/Risk)
- [ ] Update i18n (PL + EN)
- [ ] Adjust `Resume.vue` layout if new sections needed

---

## Notes

- Do **not** use skill progress bars.
- Tech belongs **per project/role**, not as a standalone encyclopedia.
- Prioritize banking, telco, EV/CPO, high-availability domains from real experience.
- AI/MCP/agentic framing should reflect genuine capability, not buzzword stuffing.
