import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Brain, Mic, FileText, Code2, Plug, Languages,
  Clock, BadgeDollarSign, HeartPulse, Users, Smile, TrendingUp,
  Lock, ShieldCheck, KeyRound, FileSearch, Server,
  Plus, Minus, ArrowRight, Activity, Stethoscope, Scan, Brain as BrainIcon,
  Bone, Baby, AlertTriangle, Microscope, Pill, ChevronLeft, ChevronRight, Quote, Sparkles, CircuitBoard
} from "lucide-react";
import {
  ResponsiveContainer, AreaChart, Area, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid
} from "recharts";

/* ---------- Trust ---------- */

function Counter({ to, suffix = "", duration = 1.6 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      setVal(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setVal(to);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

const TRUST = [
  { n: 15000, s: "+", label: "Clinicians" },
  { n: 500, s: "+", label: "Healthcare orgs" },
  { n: 25, s: "+", label: "Countries" },
  { n: 99, s: "%", label: "Recognition accuracy" },
  { n: 37, s: "+", label: "Languages" },
];

const LOGOS = ["MAYO HEALTH", "NORTHWELL", "KAISER", "CLEVELAND CLINIC", "NHS", "BUPA", "APOLLO", "MEDANTA"];

export function Trust() {
  return (
    <section className="py-20 border-y border-border/60 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Trusted by leading clinical teams worldwide
        </p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-6">
          {TRUST.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-navy tracking-tight">
                <Counter to={t.n} suffix={t.s} />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{t.label}</div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-4 opacity-70">
          {LOGOS.map((l) => (
            <div key={l} className="text-center text-xs font-bold tracking-[0.2em] text-muted-foreground">{l}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Problem ---------- */

const PAIN = [
  "Physician burnout",
  "Administrative overload",
  "Documentation delays",
  "Coding errors",
  "Revenue leakage",
  "Reduced patient interaction",
];

const PROBLEM_DATA = [
  { name: "Mon", patient: 38, docs: 62 },
  { name: "Tue", patient: 35, docs: 65 },
  { name: "Wed", patient: 42, docs: 58 },
  { name: "Thu", patient: 33, docs: 67 },
  { name: "Fri", patient: 30, docs: 70 },
  { name: "Sat", patient: 40, docs: 60 },
];

export function Problem() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Healthcare professionals spend{" "}
            <span className="text-gradient">too much time documenting.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            On average, clinicians spend two hours on documentation for every hour of patient care.
            That cost compounds — for patients, providers, and the bottom line.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {PAIN.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-border/60"
              >
                <span className="size-2 rounded-full bg-medical" />
                <span className="text-sm font-medium">{p}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl glass card-glow p-6 bg-white/80"
        >
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-xs text-muted-foreground font-medium">Average clinician day</div>
              <div className="text-lg font-bold text-navy">Patient care vs documentation</div>
            </div>
            <span className="text-[10px] px-2 py-1 rounded-full bg-surface text-muted-foreground">% of time</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={PROBLEM_DATA}>
                <defs>
                  <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#146EF5" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#146EF5" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#081B33" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="#081B33" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                <XAxis dataKey="name" stroke="#9ca3af" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#9ca3af" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e5e7eb", fontSize: 12 }} />
                <Area type="monotone" dataKey="docs" stroke="#081B33" fill="url(#g2)" strokeWidth={2} name="Documentation" />
                <Area type="monotone" dataKey="patient" stroke="#146EF5" fill="url(#g1)" strokeWidth={2} name="Patient care" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="rounded-xl bg-surface p-3">
              <div className="text-xs text-muted-foreground">Documentation</div>
              <div className="text-xl font-bold text-navy">64%</div>
            </div>
            <div className="rounded-xl bg-surface p-3">
              <div className="text-xs text-muted-foreground">Patient care</div>
              <div className="text-xl font-bold text-medical">36%</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Solution ---------- */

const SOLUTIONS = [
  { icon: BrainIcon, title: "Ambient Clinical Intelligence", desc: "Listens to the encounter passively and structures it in real time." },
  { icon: Mic, title: "Medical Speech Recognition", desc: "Healthcare-tuned ASR with 99% accuracy across accents and specialties." },
  { icon: FileText, title: "AI Documentation", desc: "Generates SOAP notes, referrals, and discharge summaries automatically." },
  { icon: Code2, title: "Clinical Coding Automation", desc: "ICD-10, CPT, and SNOMED suggestions with full evidence traceability." },
  { icon: Plug, title: "EMR Integration", desc: "Bi-directional writeback for Epic, Cerner, Athenahealth, and more." },
  { icon: Languages, title: "Multilingual Intelligence", desc: "37+ languages with code-switch support for global care teams." },
];

export function Solution() {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Solution" title={<>Meet your <span className="text-gradient">AI clinical assistant</span>.</>} desc="A unified, ambient layer that captures the encounter, understands the medicine, and produces compliant documentation." />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOLUTIONS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl bg-card p-6 border border-border/60 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(20,110,245,0.25)] transition-all overflow-hidden"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-medical/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="size-11 rounded-xl bg-gradient-to-br from-medical to-cyan-bright text-white grid place-items-center shadow-[0_10px_30px_-8px_rgba(20,110,245,0.6)]">
                <s.icon size={20} />
              </div>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */

const STEPS = [
  { icon: Mic, t: "Conversation capture", d: "Ambient mic captures the encounter — no buttons, no prompts." },
  { icon: Activity, t: "Speech recognition", d: "Healthcare-tuned ASR with speaker separation." },
  { icon: BrainIcon, t: "AI processing", d: "Multimodal LLM extracts clinical entities and intent." },
  { icon: Stethoscope, t: "Clinical understanding", d: "Maps findings to problems, plans, and protocols." },
  { icon: FileText, t: "SOAP generation", d: "Drafts structured notes in your house style." },
  { icon: Plug, t: "EMR integration", d: "Writes back to Epic, Cerner, and beyond." },
];

export function HowItWorks() {
  return (
    <section id="products" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="How it works" title={<>From conversation to chart in <span className="text-gradient">six steps</span>.</>} />
        <div className="mt-14 relative">
          <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-medical/40 to-transparent" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="mx-auto size-24 rounded-2xl glass card-glow grid place-items-center text-medical relative">
                  <s.icon size={28} />
                  <span className="absolute -top-2 -right-2 size-6 rounded-full bg-navy text-white text-xs font-bold grid place-items-center">{i + 1}</span>
                </div>
                <h4 className="mt-4 text-sm font-bold">{s.t}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Demo simulation ---------- */

const TRANSCRIPT = [
  { who: "Doctor", text: "Hi Sarah, what brings you in today?" },
  { who: "Patient", text: "I've had a cough and shortness of breath for about a week." },
  { who: "Doctor", text: "Any fever, chest pain, or recent travel?" },
  { who: "Patient", text: "Mild fever the last two days. No travel." },
  { who: "Doctor", text: "Any history of asthma or allergies?" },
  { who: "Patient", text: "Mild seasonal allergies, no asthma." },
];

export function DemoSim() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % (TRANSCRIPT.length + 1)), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.08]" />
      <div className="absolute -top-40 -right-40 size-[600px] rounded-full bg-medical/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 size-[600px] rounded-full bg-cyan-bright/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHead light eyebrow="See it in action" title={<>Watch a conversation become a <span className="text-cyan-bright">structured chart</span>.</>} desc="Every utterance is mapped to a clinical concept and rendered into your house template — in real time." />

        <div className="mt-14 grid lg:grid-cols-2 gap-5">
          <div className="rounded-3xl glass-dark p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold inline-flex items-center gap-2"><Mic size={14} className="text-cyan-bright" /> Encounter transcript</span>
              <span className="text-[11px] text-white/60">Room 204 · 3:42pm</span>
            </div>
            <div className="space-y-3 min-h-[380px]">
              {TRANSCRIPT.slice(0, step).map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm ${l.who === "Doctor" ? "text-cyan-bright" : "text-white/90"}`}
                >
                  <span className="font-semibold mr-2">{l.who}:</span>{l.text}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white text-foreground p-5 card-glow">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold inline-flex items-center gap-2 text-navy"><FileText size={14} /> Generated documentation</span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-success/15 text-success font-semibold">AI · live</span>
            </div>
            <DocBlock title="Chief complaint" delay={1}>Cough and dyspnea × 1 week</DocBlock>
            <DocBlock title="HPI" delay={2}>Productive cough, progressive shortness of breath, low-grade fever × 2 days. No chest pain, no recent travel.</DocBlock>
            <DocBlock title="PMH" delay={3}>Seasonal allergic rhinitis. No asthma.</DocBlock>
            <DocBlock title="Assessment" delay={4}>Suspected community-acquired pneumonia vs viral bronchitis.</DocBlock>
            <DocBlock title="Plan" delay={5}>CBC, CRP, CXR PA/LAT. Empiric amoxicillin pending imaging. Return precautions reviewed.</DocBlock>
            <div className="mt-4 grid grid-cols-3 gap-2 text-[11px]">
              <Code label="ICD-10" code="J18.9" />
              <Code label="CPT" code="99214" />
              <Code label="SNOMED" code="233604007" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DocBlock({ title, children, delay }: { title: string; children: React.ReactNode; delay: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: delay * 0.08 }} className="py-2.5 border-b border-border/60 last:border-0">
      <div className="text-[10px] font-bold uppercase tracking-wider text-medical">{title}</div>
      <div className="text-sm mt-0.5">{children}</div>
    </motion.div>
  );
}
function Code({ label, code }: { label: string; code: string }) {
  return (
    <div className="rounded-lg bg-surface p-2 flex flex-col">
      <span className="text-[9px] text-muted-foreground">{label}</span>
      <span className="font-mono font-semibold text-navy">{code}</span>
    </div>
  );
}

/* ---------- Features grid ---------- */

const FEATURES = [
  { icon: Mic, t: "Real-time transcription", d: "Sub-300ms streaming ASR tuned for clinical vocabulary." },
  { icon: Sparkles, t: "Ambient listening", d: "No commands, no buttons — capture the full encounter." },
  { icon: FileText, t: "Smart clinical summaries", d: "Specialty-aware templates with auto-citations." },
  { icon: Code2, t: "Medical coding assistance", d: "Evidence-backed ICD-10, CPT, SNOMED suggestions." },
  { icon: ShieldCheck, t: "Compliance monitoring", d: "Built-in audit trails, PHI redaction, e-signature." },
  { icon: TrendingUp, t: "Performance analytics", d: "Department-level KPIs and adoption insights." },
];

export function Features() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Platform" title={<>Everything a clinical team needs, <span className="text-gradient">nothing it doesn't</span>.</>} />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl p-6 bg-surface border border-border/60 hover:bg-card transition-all hover:-translate-y-0.5"
            >
              <f.icon className="text-medical" size={22} />
              <h4 className="mt-4 font-bold">{f.t}</h4>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.d}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-medical opacity-0 group-hover:opacity-100 transition-opacity">Learn more <ArrowRight size={12} /></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Specialties ---------- */

const SPECIALTIES = [
  { icon: Scan, name: "Radiology", uses: "Structured reporting, BI-RADS, comparison studies" },
  { icon: HeartPulse, name: "Cardiology", uses: "Echo reports, cath notes, longitudinal trends" },
  { icon: Microscope, name: "Oncology", uses: "Staging, treatment plans, response notes" },
  { icon: Bone, name: "Orthopedics", uses: "Op notes, ROM measurements, follow-ups" },
  { icon: BrainIcon, name: "Psychiatry", uses: "Mental status exams, therapy notes" },
  { icon: Brain, name: "Neurology", uses: "Neuro exam, seizure logs, headache history" },
  { icon: AlertTriangle, name: "Emergency", uses: "Triage notes, MDM, dispositions" },
  { icon: Stethoscope, name: "General practice", uses: "Annual visits, chronic care, refills" },
  { icon: FileSearch, name: "Pathology", uses: "Synoptic reports, CAP-aligned templates" },
  { icon: Baby, name: "Pediatrics", uses: "Growth charts, immunizations, parental notes" },
];

export function Specialties() {
  return (
    <section id="specialties" className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Specialties" title={<>Purpose-built for <span className="text-gradient">every specialty</span>.</>} />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {SPECIALTIES.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group relative rounded-2xl bg-card border border-border/60 p-5 h-40 overflow-hidden hover:border-medical/40 transition-all"
            >
              <s.icon className="text-medical" size={22} />
              <h4 className="mt-4 font-bold">{s.name}</h4>
              <div className="absolute inset-0 p-5 bg-navy text-white rounded-2xl translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <s.icon className="text-cyan-bright" size={20} />
                <h4 className="mt-3 font-bold">{s.name}</h4>
                <p className="text-xs text-white/75 mt-1.5">{s.uses}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Dashboard section ---------- */

const SERIES = Array.from({ length: 12 }).map((_, i) => ({
  m: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][i],
  saved: 30 + i * 6 + (i % 3) * 4,
  adoption: 22 + i * 5,
}));

export function DashboardSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Analytics" title={<>Measure the <span className="text-gradient">real impact</span> across your network.</>} desc="Executive-grade dashboards for time saved, productivity, satisfaction, and ROI." />
        <div className="mt-12 rounded-3xl glass card-glow p-6 lg:p-8 bg-white/80">
          <div className="grid lg:grid-cols-4 gap-4 mb-6">
            <Kpi label="Documentation time saved" value="2.4h" delta="+18%" />
            <Kpi label="Clinician productivity" value="+34%" delta="+6%" />
            <Kpi label="Revenue impact" value="$1.2M" delta="+12%" />
            <Kpi label="Physician satisfaction" value="92%" delta="+9%" />
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-2xl bg-surface p-5">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-xs text-muted-foreground">Hours saved (network-wide)</div>
                  <div className="text-lg font-bold">2024 trend</div>
                </div>
                <span className="text-xs text-success font-semibold">↑ 64% YoY</span>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={SERIES}>
                    <defs>
                      <linearGradient id="kpig" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#146EF5" stopOpacity={0.45} />
                        <stop offset="100%" stopColor="#146EF5" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#eef0f4" vertical={false} />
                    <XAxis dataKey="m" stroke="#9ca3af" fontSize={11} tickLine={false} axisLine={false} />
                    <YAxis stroke="#9ca3af" fontSize={11} tickLine={false} axisLine={false} />
                    <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e5e7eb", fontSize: 12 }} />
                    <Area type="monotone" dataKey="saved" stroke="#146EF5" strokeWidth={2.5} fill="url(#kpig)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="rounded-2xl bg-navy text-white p-5">
              <div className="text-xs text-white/70">Adoption rate</div>
              <div className="text-lg font-bold">Last 12 months</div>
              <div className="h-48 mt-3">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={SERIES}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" vertical={false} />
                    <XAxis dataKey="m" stroke="rgba(255,255,255,0.5)" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis stroke="rgba(255,255,255,0.5)" fontSize={10} tickLine={false} axisLine={false} />
                    <Tooltip contentStyle={{ borderRadius: 12, background: "#0a1d36", border: "1px solid rgba(255,255,255,0.1)", fontSize: 12, color: "#fff" }} />
                    <Line type="monotone" dataKey="adoption" stroke="#00D4FF" strokeWidth={2.5} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <Mini label="Active" value="14.2k" />
                <Mini label="Sites" value="312" />
                <Mini label="Daily" value="98%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Kpi({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl bg-surface p-5">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="text-3xl font-bold text-navy">{value}</span>
        <span className="text-xs font-semibold text-success">{delta}</span>
      </div>
    </motion.div>
  );
}
function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white/5 py-2">
      <div className="text-[10px] text-white/60">{label}</div>
      <div className="text-sm font-bold">{value}</div>
    </div>
  );
}

/* ---------- Integrations ---------- */

const INTEGS = ["Epic", "Cerner", "Athenahealth", "Salesforce Health Cloud", "FHIR", "HL7", "Microsoft", "Google Cloud", "AWS"];

export function Integrations() {
  return (
    <section id="integrations" className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative">
        <SectionHead eyebrow="Integrations" title={<>Works with your <span className="text-gradient">existing ecosystem</span>.</>} desc="Native connectors and FHIR/HL7 support for the systems clinicians already use." />
        <div className="mt-14 relative">
          <div className="relative mx-auto max-w-3xl aspect-[2/1]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-32 rounded-3xl bg-navy text-white grid place-items-center card-glow">
              <div className="text-center">
                <CircuitBoard className="mx-auto text-cyan-bright" size={26} />
                <div className="mt-1 text-sm font-bold">Clario</div>
              </div>
            </div>
            {INTEGS.map((name, i) => {
              const angle = (i / INTEGS.length) * Math.PI * 2 - Math.PI / 2;
              const x = 50 + Math.cos(angle) * 40;
              const y = 50 + Math.sin(angle) * 38;
              return (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-semibold shadow-sm"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  {name}
                </motion.div>
              );
            })}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              {INTEGS.map((_, i) => {
                const angle = (i / INTEGS.length) * Math.PI * 2 - Math.PI / 2;
                const x = 50 + Math.cos(angle) * 40;
                const y = 50 + Math.sin(angle) * 38;
                return <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="#146EF5" strokeOpacity="0.18" strokeWidth="0.2" />;
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Security ---------- */

const SECURITY = [
  { icon: Lock, t: "End-to-end encryption", d: "AES-256 in transit and at rest, customer-managed keys." },
  { icon: Server, t: "Data residency", d: "Regional deployments across US, EU, UK, IN, AU." },
  { icon: FileSearch, t: "Audit trails", d: "Tamper-evident logs for every action and inference." },
  { icon: KeyRound, t: "Role-based access", d: "Granular controls, SSO, SCIM, and step-up auth." },
  { icon: ShieldCheck, t: "Secure APIs", d: "OAuth 2.0, mTLS, signed webhooks, IP allowlists." },
];

const BADGES = ["HIPAA", "GDPR", "SOC 2 Type II", "ISO 27001"];

export function Security() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHead align="left" eyebrow="Security & compliance" title={<>Enterprise security <span className="text-gradient">built in</span>.</>} desc="The same controls trusted by the world's most regulated industries — applied to every word, every encounter, every chart." />
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {BADGES.map((b) => (
              <div key={b} className="rounded-xl bg-surface border border-border p-4 text-center">
                <ShieldCheck className="mx-auto text-medical" size={18} />
                <div className="mt-2 text-xs font-bold">{b}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {SECURITY.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl p-5 bg-card border border-border/60"
            >
              <s.icon className="text-medical" size={20} />
              <h4 className="mt-3 font-bold text-sm">{s.t}</h4>
              <p className="text-xs text-muted-foreground mt-1">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */

const QUOTES = [
  { name: "Dr. Anika Rao", role: "CMIO", org: "Northwell Health", quote: "Clario gave us back two hours per clinician per day. The notes are cleaner than what we wrote ourselves." },
  { name: "Marcus Lin", role: "VP Engineering", org: "Mayo Digital", quote: "The Epic writeback just works. We deployed across 14 sites in eight weeks without a single integration ticket." },
  { name: "Dr. Sophie Bauer", role: "Chief of Cardiology", org: "Charité Berlin", quote: "Multilingual accuracy is incredible. German, English, and Turkish — captured perfectly." },
  { name: "Priya Shah", role: "COO", org: "Apollo Hospitals", quote: "Our coding accuracy jumped 22%. Revenue cycle stopped being a bottleneck." },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % QUOTES.length);
  const prev = () => setIdx((i) => (i - 1 + QUOTES.length) % QUOTES.length);
  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Voices" title={<>Loved by the people who <span className="text-gradient">deliver care</span>.</>} />
        <div className="mt-12 relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-card border border-border/60 p-8 lg:p-10 card-glow"
            >
              <Quote className="text-medical" size={28} />
              <p className="mt-4 text-xl lg:text-2xl font-medium leading-snug">{QUOTES[idx].quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="size-12 rounded-full bg-gradient-to-br from-navy to-medical text-white grid place-items-center font-bold">
                  {QUOTES[idx].name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="font-bold">{QUOTES[idx].name}</div>
                  <div className="text-xs text-muted-foreground">{QUOTES[idx].role} · {QUOTES[idx].org}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button onClick={prev} aria-label="Previous" className="size-10 rounded-full bg-card border border-border grid place-items-center hover:bg-surface">
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-1.5">
              {QUOTES.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)} aria-label={`Go to ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-navy" : "w-1.5 bg-border"}`} />
              ))}
            </div>
            <button onClick={next} aria-label="Next" className="size-10 rounded-full bg-card border border-border grid place-items-center hover:bg-surface">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Case studies ---------- */

const CASES = [
  { tag: "Multi-site IDN", title: "Northwell saved 2.1M clinician hours", metric: "60%", sub: "Reduction in documentation time" },
  { tag: "Academic medical center", title: "Mayo lifted patient face-time by 40%", metric: "+40%", sub: "More time with patients" },
  { tag: "Health system", title: "Apollo accelerated revenue capture", metric: "25%", sub: "Faster revenue cycle" },
];

export function CaseStudies() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Case studies" title={<>Outcomes that <span className="text-gradient">move the needle</span>.</>} />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {CASES.map((c, i) => (
            <motion.a
              key={c.title}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-3xl p-7 bg-navy text-white relative overflow-hidden hover:-translate-y-1 transition-transform"
            >
              <div className="absolute -right-16 -top-16 size-48 rounded-full bg-medical/30 blur-3xl group-hover:bg-cyan-bright/40 transition-colors" />
              <div className="relative">
                <span className="text-[10px] font-bold tracking-widest uppercase text-cyan-bright">{c.tag}</span>
                <h4 className="mt-3 text-lg font-bold leading-snug">{c.title}</h4>
                <div className="mt-8">
                  <div className="text-5xl font-bold tracking-tight">{c.metric}</div>
                  <div className="text-xs text-white/70 mt-1">{c.sub}</div>
                </div>
                <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-bright">
                  Read story <ArrowRight size={12} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

const FAQS = [
  { q: "How long does implementation take?", a: "Typical deployment is 4–8 weeks including SSO, EMR writeback, and clinician training. Larger networks can run in parallel waves." },
  { q: "How accurate is the recognition?", a: "We average 99% recognition accuracy across clinical vocabularies and 37+ languages, validated against your specialty-specific test sets." },
  { q: "Which languages are supported?", a: "37+ languages including English variants, Spanish, French, German, Mandarin, Arabic, Hindi, and Japanese — with code-switching." },
  { q: "How is patient data secured?", a: "End-to-end AES-256 encryption, customer-managed keys, regional residency, and full audit trails." },
  { q: "Is Clario HIPAA and GDPR compliant?", a: "Yes — HIPAA, GDPR, SOC 2 Type II, and ISO 27001 certified." },
  { q: "Which EHRs do you integrate with?", a: "Epic, Cerner, Athenahealth, Meditech, and any FHIR/HL7-capable system. Salesforce Health Cloud also supported." },
  { q: "How does pricing work?", a: "Per-clinician monthly subscription with enterprise tiers, including unlimited encounters and EMR connectors." },
  { q: "What support is included?", a: "24/7 enterprise support, named CSM, quarterly reviews, and dedicated clinical informaticist." },
  { q: "Cloud or on-prem deployment?", a: "Multi-tenant SaaS, single-tenant VPC, or on-prem hybrid — your choice." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="resources" className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHead eyebrow="FAQ" title={<>Questions, <span className="text-gradient">answered</span>.</>} />
        <div className="mt-10 divide-y divide-border/60 rounded-2xl bg-card border border-border/60">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 text-left p-5">
                  <span className="font-semibold">{f.q}</span>
                  <span className="size-7 rounded-full bg-surface grid place-items-center text-medical">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */

export function FinalCTA() {
  return (
    <section id="demo" className="py-24 lg:py-32 relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="absolute inset-0 grid-bg opacity-[0.07]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl lg:text-7xl font-bold tracking-tight">
          Give time back to <span className="text-cyan-bright">clinicians</span>.
        </motion.h2>
        <p className="mt-5 text-lg text-white/75 max-w-xl mx-auto">
          Transform healthcare documentation with enterprise-grade AI. Pilot in 30 days, scale in 90.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="#" className="px-6 py-3 rounded-full bg-white text-navy font-semibold hover:bg-cyan-bright transition-colors">Schedule Demo</a>
          <a href="#" className="px-6 py-3 rounded-full border border-white/25 font-semibold hover:bg-white/10 transition-colors">Contact Sales</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

const FCOLS = [
  { h: "Products", l: ["Ambient AI", "Speech Recognition", "Clinical Coding", "Analytics"] },
  { h: "Solutions", l: ["Health Systems", "Specialty Clinics", "Telehealth", "Academic Medicine"] },
  { h: "Resources", l: ["Docs", "Case Studies", "Security", "Status"] },
  { h: "Company", l: ["About", "Careers", "Press", "Contact"] },
  { h: "Legal", l: ["Privacy", "Terms", "HIPAA", "DPA"] },
];

export function SiteFooter() {
  return (
    <footer id="about" className="bg-navy text-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <div className="size-9 rounded-lg bg-gradient-to-br from-medical to-cyan-bright grid place-items-center font-bold">C</div>
              <span className="font-display font-bold text-xl">Clario</span>
            </div>
            <p className="mt-4 text-sm text-white/65 max-w-sm">
              Ambient clinical intelligence for the world's leading healthcare organizations.
            </p>
            <form className="mt-6 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Work email" className="flex-1 px-4 py-2.5 rounded-full bg-white/10 border border-white/15 text-sm placeholder:text-white/40 focus:outline-none focus:border-cyan-bright" />
              <button className="px-4 py-2.5 rounded-full bg-cyan-bright text-navy font-semibold text-sm">Subscribe</button>
            </form>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-5 gap-6">
            {FCOLS.map((c) => (
              <div key={c.h}>
                <div className="text-xs font-bold tracking-widest text-cyan-bright uppercase">{c.h}</div>
                <ul className="mt-3 space-y-2">
                  {c.l.map((i) => (
                    <li key={i}><a href="#" className="text-sm text-white/70 hover:text-white">{i}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/55">
          <p>© {new Date().getFullYear()} Clario, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Shared head ---------- */

function SectionHead({
  eyebrow, title, desc, light, align = "center",
}: { eyebrow: string; title: React.ReactNode; desc?: string; light?: boolean; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}>
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase ${light ? "bg-white/10 text-cyan-bright" : "bg-medical/10 text-medical"}`}>
        {eyebrow}
      </motion.div>
      <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className={`mt-4 text-4xl lg:text-5xl font-bold tracking-tight ${light ? "text-white" : ""}`}>
        {title}
      </motion.h2>
      {desc && (
        <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className={`mt-4 text-base lg:text-lg ${light ? "text-white/70" : "text-muted-foreground"}`}>
          {desc}
        </motion.p>
      )}
    </div>
  );
}
