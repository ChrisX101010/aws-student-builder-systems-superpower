# AWS Student Builder Challenge submission copy

## Project title

**Systems Superpower — Turning Chaos into Deterministic, Resilient Software**

## Short description

Most portfolios list skills. Mine lets visitors inject a systems problem — failure, pathological complexity, scale, or nondeterministic arrival order — and watch the engineering response. The experience connects directly to my real compiler, runtime, cloud and deterministic-systems work.

## Project description

I wanted my portfolio to answer a harder question than “what technologies do you know?”:

**How do you think when a system becomes difficult?**

My answer became the **Systems Superpower Simulator**, an interactive mission-control surface embedded in an otherwise straightforward portfolio.

Visitors can choose four scenarios:

- **BREAK → RECOVER** explains durable state, restart recovery and verification, inspired by my Flock deterministic-systems project.
- **SLOW → OPTIMIZE** shows a real compiler benchmark from my Goose formatter contribution. At nesting depth 10,000, my local benchmark measured output falling from 400,120,024 bytes to 5,144,148 bytes after the proposed display-indentation cap — 77.78× smaller. The contribution is submitted upstream as Goose PR #250 and is clearly labeled as open, not merged.
- **SCALE → ORCHESTRATE** turns my cloud/SRE experience into a simple operating model around containers, orchestration, health signals and replaceable workloads.
- **CHAOS → DETERMINISM** randomizes transaction-like candidate arrival order, canonicalizes the same set, then computes a browser SHA-256 demo commitment. Re-running changes the arrival order while preserving the canonical result.

The simulator never blocks normal navigation. About Me, Tech Superpowers and Projects & Achievements remain ordinary accessible sections for recruiters or judges who simply want to read.

### Why I built it this way

My projects have a common theme: I like claims that can be verified. A benchmark should be reproducible. A restart should preserve a chain invariant. An optimization should have a regression test. An open-source contribution should have a public review trail.

The creative feature therefore demonstrates that theme instead of decorating it.

## AWS services used

### AWS Amplify Hosting

The portfolio is deployed as a static HTML/CSS/JavaScript application with AWS Amplify Hosting.

I deliberately kept the cloud architecture small. This project does not need authentication, a database or a backend API, so adding those services would have increased operational complexity without improving the visitor experience. Amplify gives the project a public HTTPS endpoint and a simple deployment path while keeping the architecture easy to inspect.

## What I learned

- A memorable portfolio does not need a heavy framework; the interaction and story matter more.
- Static architecture can be an engineering choice, not a limitation.
- Creative UI is strongest when it explains real work instead of hiding it.
- Accessibility constraints improve the interaction design: the simulator has visible controls, keyboard-operable buttons, live status text and reduced-motion support.
- Public technical claims need careful wording. I explicitly distinguish an open upstream PR, local benchmark evidence and conceptual demonstrations.

## Challenges I hit

### 1. Making systems work understandable without oversimplifying it

Compiler complexity, deterministic commitments and restart recovery are not obvious portfolio topics. I reduced each into a short “problem → engineering response → evidence” sequence.

### 2. Keeping the creative feature from becoming the website

The challenge asks for something memorable without damaging navigation. I kept the simulator in one dedicated section and made the About, Skills and Projects sections fully usable without it.

### 3. Separating measured data from visualization

The Goose optimization uses real local benchmark data. The canonical-ordering interaction is explicitly labeled as a browser demonstration rather than the production Flock block format. This keeps the story technically honest.

## Public links

- **Live portfolio:** `https://production.duoremdpp82zo.amplifyapp.com/`
- **GitHub repository:** `https://github.com/ChrisX101010/aws-student-builder-systems-superpower`
- **Goose upstream PR #250:** https://github.com/aardappel/goose/pull/250
- **Microsoft RustTraining PR #30 (merged):** https://github.com/microsoft/RustTraining/pull/30
- **Flock:** https://github.com/ChrisX101010/flock
- **GitHub:** https://github.com/ChrisX101010

## Screenshot plan

Upload screenshots in this order:

1. **Hero** — title plus “Activate my superpower” CTA.
2. **Creative feature** — Systems Superpower Simulator showing a completed scenario.
3. **Projects** — Goose benchmark + Flock project cards.
4. **AWS setup** — AWS Amplify console showing the production deployment as successful and the app URL.
5. **Mobile** — responsive mobile view of hero or simulator.

Suggested captions:

1. “The portfolio introduces my systems-engineering theme and gives visitors a visible path to the interactive feature.”
2. “The Systems Superpower Simulator turns real engineering themes into four interactive failure/response scenarios.”
3. “Projects link the interaction back to public evidence, including an upstream compiler PR and deterministic-systems work.”
4. “AWS Amplify Hosting serves the static portfolio over a public HTTPS URL.”
5. “The same content and creative feature remain usable on mobile.”
