const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const navToggle = $(".nav-toggle");
const navLinks = $(".nav-links");

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

$$(".nav-links a").forEach((link) => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  navToggle?.setAttribute("aria-expanded", "false");
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
$$(".reveal").forEach((el) => observer.observe(el));

const scenarios = {
  recover: {
    title: "Restart recovery",
    label: "Recovery invariant",
    value: "GREEN",
    detail: "Persisted chain survives process restart.",
    note: "Based on Flock Phase 4 persistence tests: chain continuity, restart recovery and tamper detection.",
    lines: [
      ["bad", "process", "simulated process stopped"],
      ["warn", "storage", "reading immutable block records + HEAD"],
      ["", "verify", "recomputing record and block commitments"],
      ["good", "state", "parent hash + state continuity verified"],
      ["good", "result", "tip recovered after restart"]
    ]
  },
  optimize: {
    title: "Compiler output optimization",
    label: "10k nesting output",
    value: "77.78× ↓",
    detail: "400.12 MB → 5.14 MB in local benchmark.",
    note: "Measured on the Goose #228 patch submitted upstream as PR #250; status is open, not merged.",
    lines: [
      ["bad", "observe", "deep formatting output grows pathologically"],
      ["", "measure", "baseline @ depth 10,000 = 400,120,024 bytes"],
      ["warn", "change", "cap display indentation; preserve token order"],
      ["", "verify", "formatter idempotence + full suite"],
      ["good", "result", "patched @ depth 10,000 = 5,144,148 bytes"]
    ]
  },
  scale: {
    title: "Orchestrate the workload",
    label: "Operating model",
    value: "EXPLICIT",
    detail: "Containers + orchestration + observable boundaries.",
    note: "A conceptual visualization of the cloud/SRE practices I use; no fabricated throughput claim.",
    lines: [
      ["", "package", "isolate workloads in containers"],
      ["", "schedule", "place workloads through orchestration"],
      ["warn", "observe", "surface health, capacity and failure signals"],
      ["", "recover", "replace failed units instead of nursing state"],
      ["good", "result", "repeatable deployment + controlled failure"]
    ]
  },
  determinism: {
    title: "Canonical ordering",
    label: "Input-order effect",
    value: "ZERO",
    detail: "Same candidate set → same demo commitment.",
    note: "Browser demonstration of canonical ordering. It illustrates the idea; it is not Flock's production block format.",
    lines: [
      ["warn", "arrival", "candidates arrive in arbitrary order"],
      ["", "canonicalize", "sort by stable candidate identity"],
      ["", "commit", "hash the canonical representation"],
      ["good", "repeat", "shuffle arrival order again"],
      ["good", "result", "canonical commitment remains identical"]
    ]
  }
};

let active = "recover";
let running = false;

const titleEl = $("#sim-title");
const statusEl = $("#sim-status");
const consoleEl = $("#sim-console");
const metricLabel = $("#metric-label");
const metricValue = $("#metric-value");
const metricDetail = $("#metric-detail");
const noteEl = $("#sim-note");
const runButton = $("#run-simulation");
const demo = $("#determinism-demo");

function setScenario(name) {
  active = name;
  const data = scenarios[name];
  $$(".scenario").forEach((button) => {
    const selected = button.dataset.scenario === name;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  titleEl.textContent = data.title;
  metricLabel.textContent = data.label;
  metricValue.textContent = data.value;
  metricDetail.textContent = data.detail;
  noteEl.textContent = data.note;
  statusEl.textContent = "READY";
  consoleEl.innerHTML = `<p><span>system</span> Ready to run: ${data.title}.</p>`;
  $$(".pipe-node").forEach((node) => node.classList.remove("live"));
  demo.hidden = name !== "determinism";
  if (name === "determinism") prepareDeterminism();
}

$$(".scenario").forEach((button) => button.addEventListener("click", () => setScenario(button.dataset.scenario)));

function sleep(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }

async function runScenario() {
  if (running) return;
  running = true;
  runButton.disabled = true;
  statusEl.textContent = "RUNNING";
  const data = scenarios[active];
  consoleEl.innerHTML = "";

  if (active === "determinism") await prepareDeterminism();

  for (let i = 0; i < data.lines.length; i += 1) {
    const [kind, source, text] = data.lines[i];
    const line = document.createElement("p");
    if (kind) line.className = kind;
    line.innerHTML = `<span>${source}</span>${text}`;
    consoleEl.append(line);
    consoleEl.scrollTop = consoleEl.scrollHeight;
    const stage = $(`.pipe-node[data-stage="${Math.min(i, 3)}"]`);
    stage?.classList.add("live");
    await sleep(window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 10 : 430);
  }

  statusEl.textContent = "VERIFIED";
  running = false;
  runButton.disabled = false;
}

runButton?.addEventListener("click", runScenario);

function shuffle(values) {
  const a = [...values];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function renderChips(el, values) {
  el.innerHTML = values.map((x) => `<b>${x}</b>`).join("");
}

async function sha256(text) {
  const bytes = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function prepareDeterminism() {
  const candidates = ["ALICE:0", "BOB:0", "ALICE:1", "CAROL:2"];
  const arrival = shuffle(candidates);
  const canonical = [...candidates].sort();
  renderChips($("#arrival-order"), arrival);
  renderChips($("#canonical-order"), canonical);
  const hash = await sha256(`SYSTEMS-SUPERPOWER-DEMO|${canonical.join("|")}`);
  $("#demo-hash").textContent = hash;
}

setScenario("recover");
