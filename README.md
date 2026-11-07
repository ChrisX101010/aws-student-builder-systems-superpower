# Hristos Nenkov // Systems Superpower

Original portfolio built for the **AWS Student Builder Challenge: Build Your Tech Superpower (2026)**.

> **Superpower:** turning complex systems into deterministic, resilient software.

## Live architecture

```text
public source
    |
    v
GitHub repository
    |
    v
AWS Amplify Hosting
    |
    v
HTTPS portfolio
    |
    +-- About Me
    +-- Tech Superpowers
    +-- Projects & Achievements
    +-- Systems Superpower Simulator
```

The site is intentionally static: HTML, CSS and JavaScript with no framework or runtime backend. That keeps the deployment surface small and makes the creative feature usable even on modest devices.

## Creative feature: Systems Superpower Simulator

Rather than only listing skills, the portfolio lets a visitor inject four classes of systems problem:

1. **BREAK → RECOVER** — explains durable state and restart recovery.
2. **SLOW → OPTIMIZE** — visualizes a real Goose formatter benchmark from upstream PR #250.
3. **SCALE → ORCHESTRATE** — explains container/orchestration operating principles without inventing performance numbers.
4. **CHAOS → DETERMINISM** — shuffles candidate arrival order, canonicalizes it and computes a browser SHA-256 demo commitment to show why canonical ordering removes arrival-order nondeterminism.

The simulator is an explanatory interface. Where it uses real benchmark data, the UI says so; conceptual demos are explicitly labeled.

## Public engineering evidence

- Goose upstream PR #250: https://github.com/aardappel/goose/pull/250
- Flock: https://github.com/ChrisX101010/flock
- Agent Lifecycle Plane: https://github.com/ChrisX101010/agent-lifecycle-plane
- RustTraining work: https://github.com/ChrisX101010/RustTraining
- GitHub profile: https://github.com/ChrisX101010

## Local preview

No build step is required.

```bash
python3 -m http.server 8080
```

Then open `http://127.0.0.1:8080`.

## Deployment

See [DEPLOY.md](DEPLOY.md).

For the fastest challenge-safe path, deploy the included `systems-superpower-amplify.zip` using **AWS Amplify Hosting → Create new app → Deploy without Git → Drag and drop**. The ZIP contains `index.html` at its root.

A GitHub publishing helper is also included:

```bash
bash publish_github.sh
```

## Accessibility / usability

- semantic headings and navigation
- keyboard-operable controls
- skip link
- live regions for simulator output
- mobile layout
- `prefers-reduced-motion` support
- no creative interaction blocks access to normal portfolio content

## Truthfulness note

This portfolio deliberately distinguishes:
- merged/public project facts,
- an **open** upstream Goose PR,
- locally measured benchmark results,
- conceptual simulator elements.

It does not claim that PR #250 has merged.

## License

MIT.
