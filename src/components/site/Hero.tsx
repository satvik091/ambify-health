import { motion } from "framer-motion";
import { useState } from "react";
import { Play, ArrowRight, Mic, Activity, FileText, Shield, Sparkles, CheckCircle2 } from "lucide-react";
import { ProductTourModal } from "./ProductTourModal";

const bars = Array.from({ length: 28 });

export function Hero() {
  const [tourOpen, setTourOpen] = useState(false);
  return (
    <section id="top" className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* mesh + grid */}
      <div className="absolute inset-0 bg-mesh opacity-90" />
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-navy"
            >
              <Sparkles size={14} className="text-medical" />
              Ambient Clinical Intelligence · v4 released
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-5xl lg:text-7xl font-bold tracking-[-0.03em] leading-[1.02]"
            >
              Turn clinical conversations into{" "}
              <span className="text-gradient">structured medical records</span> instantly.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl"
            >
              AI-powered ambient clinical intelligence that listens, understands, and
              generates documentation — so clinicians focus entirely on patient care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#demo"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-navy text-primary-foreground font-semibold shadow-[0_12px_32px_-8px_rgba(20,110,245,0.55)] hover:bg-medical transition-colors"
              >
                Book a Demo
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#tour"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass font-semibold text-navy hover:bg-white transition-colors"
              >
                <Play size={14} /> Watch Product Tour
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 size={14} className="text-success" /> HIPAA · SOC 2 · ISO 27001</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 size={14} className="text-success" /> 99% recognition accuracy</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 size={14} className="text-success" /> 37+ languages</span>
            </motion.div>
          </div>

          {/* dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl glass card-glow p-4 lg:p-5 bg-white/80">
              {/* topbar */}
              <div className="flex items-center justify-between px-2 pb-3 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="size-2.5 rounded-full bg-[#febc2e]" />
                  <span className="size-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-xs font-medium text-muted-foreground">clario / encounter · live</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-success">
                  <span className="size-1.5 rounded-full bg-success animate-pulse" /> Recording
                </span>
              </div>

              <div className="grid grid-cols-5 gap-3 mt-4">
                {/* transcript */}
                <div className="col-span-3 rounded-2xl bg-surface p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold"><Mic size={12} className="text-medical" /> Live transcript</span>
                    <span className="text-[10px] text-muted-foreground">EN · US</span>
                  </div>

                  {/* waveform */}
                  <div className="h-10 flex items-end gap-[3px] mb-3">
                    {bars.map((_, i) => (
                      <span
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-medical to-cyan-bright origin-bottom"
                        style={{
                          animation: `wave-pulse 1.${(i % 9) + 1}s ease-in-out ${i * 0.04}s infinite`,
                          height: "100%",
                        }}
                      />
                    ))}
                  </div>

                  <div className="space-y-2.5 text-[13px] leading-relaxed">
                    <p><span className="font-semibold text-navy">Dr. Patel:</span> What brings you in today?</p>
                    <p><span className="font-semibold text-medical">Patient:</span> Sharp chest pain since yesterday, worse on deep breath.</p>
                    <p><span className="font-semibold text-navy">Dr. Patel:</span> Any fever, cough, or recent travel?</p>
                    <p className="text-muted-foreground"><span className="font-semibold text-medical">Patient:</span> Mild fever. No travel.<span className="inline-block w-2 h-4 align-middle bg-navy/70 ml-0.5 animate-pulse" /></p>
                  </div>
                </div>

                {/* generated note */}
                <div className="col-span-2 rounded-2xl bg-navy text-white p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold"><FileText size={12} /> SOAP note</span>
                    <span className="text-[10px] text-cyan-bright">AI · drafting</span>
                  </div>
                  <ul className="space-y-2 text-[11.5px]">
                    <li><span className="text-cyan-bright font-semibold">CC:</span> Pleuritic chest pain × 1d</li>
                    <li><span className="text-cyan-bright font-semibold">HPI:</span> Sharp, worse on inspiration, low-grade fever</li>
                    <li><span className="text-cyan-bright font-semibold">A:</span> r/o pleuritis, viral etiology</li>
                    <li><span className="text-cyan-bright font-semibold">P:</span> CBC, CXR PA/LAT, NSAID</li>
                  </ul>
                  <div className="mt-3 pt-3 border-t border-white/15 text-[10.5px] space-y-1">
                    <div className="flex justify-between"><span className="text-white/70">ICD-10</span><span className="font-mono">R07.81</span></div>
                    <div className="flex justify-between"><span className="text-white/70">CPT</span><span className="font-mono">99213</span></div>
                    <div className="flex justify-between"><span className="text-white/70">SNOMED</span><span className="font-mono">102588006</span></div>
                  </div>
                </div>
              </div>

              {/* bottom row */}
              <div className="grid grid-cols-3 gap-3 mt-3">
                <Tile icon={<Activity size={14} />} label="Latency" value="120ms" />
                <Tile icon={<Shield size={14} />} label="HIPAA session" value="Encrypted" />
                <Tile icon={<CheckCircle2 size={14} />} label="EHR sync" value="Epic · OK" />
              </div>
            </div>

            {/* floating cards */}
            <motion.div
              className="hidden md:block absolute -left-10 top-16 rounded-2xl glass card-glow p-3 w-56 animate-float"
            >
              <div className="text-[10px] text-muted-foreground font-medium">Accuracy</div>
              <div className="text-2xl font-bold text-navy">99.2%</div>
              <div className="mt-1 h-1.5 rounded-full bg-border overflow-hidden">
                <div className="h-full w-[99%] bg-gradient-to-r from-medical to-cyan-bright" />
              </div>
            </motion.div>
            <motion.div
              className="hidden md:block absolute -right-6 -bottom-6 rounded-2xl glass card-glow p-3 w-52"
              style={{ animation: "float-y 7s ease-in-out 0.6s infinite" }}
            >
              <div className="text-[10px] text-muted-foreground font-medium">Time saved / clinician</div>
              <div className="text-2xl font-bold text-navy">2h 14m<span className="text-success text-sm font-semibold"> /day</span></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Tile({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl bg-surface p-3 flex items-center gap-2.5">
      <span className="size-7 rounded-md bg-white grid place-items-center text-medical">{icon}</span>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</span>
        <span className="text-xs font-semibold text-navy">{value}</span>
      </div>
    </div>
  );
}
