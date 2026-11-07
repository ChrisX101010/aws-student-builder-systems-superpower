# Hristos Nenkov // Systems Superpower

Original portfolio built for the **AWS Student Builder Challenge: Build Your Tech Superpower (2026)**.

**Live site:** https://production.duoremdpp82zo.amplifyapp.com/

> **Superpower:** turning complex systems into deterministic, resilient software.

## Creative feature

The **Systems Superpower Simulator** lets a visitor explore four systems scenarios:

1. **BREAK → RECOVER** — durable state and restart recovery.
2. **SLOW → OPTIMIZE** — a real Goose formatter benchmark from upstream PR #250.
3. **SCALE → ORCHESTRATE** — container/orchestration operating principles.
4. **CHAOS → DETERMINISM** — canonical ordering plus a browser SHA-256 demo commitment.

## Public engineering evidence

- Goose upstream PR #250 (open): https://github.com/aardappel/goose/pull/250
- Microsoft RustTraining PR #30 (merged): https://github.com/microsoft/RustTraining/pull/30
- Flock: https://github.com/ChrisX101010/flock
- Agent Lifecycle Plane: https://github.com/ChrisX101010/agent-lifecycle-plane
- GitHub profile: https://github.com/ChrisX101010

## Architecture

```text
GitHub source
    |
    v
AWS Amplify Hosting
    |
    v
Public HTTPS portfolio
```

The portfolio is intentionally static HTML, CSS and JavaScript. It does not need authentication,
a database or server-side state.

## Local preview

```bash
python3 -m http.server 8080
```

## Build the AWS Amplify artifact

```bash
bash build_deploy_zip.sh
```

Deploy `systems-superpower-amplify.zip` with **AWS Amplify Hosting → Deploy without Git**.

## Accessibility

- semantic navigation and headings
- keyboard-operable controls
- explicit pressed state for simulator scenarios
- live simulator status
- responsive mobile layout
- `prefers-reduced-motion` support
- creative interaction never blocks standard portfolio navigation

## Truthfulness

The portfolio distinguishes merged upstream work, an open upstream PR,
locally measured benchmark evidence and conceptual demonstrations.

## License

MIT.
