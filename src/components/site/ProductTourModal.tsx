import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Mic, Brain, FileText, Shield, Zap, Plug } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  { icon: Mic, title: "Ambient capture", desc: "Multi-speaker recognition with 99% accuracy across 37+ languages." },
  { icon: Brain, title: "Clinical intelligence", desc: "Context-aware reasoning maps speech to ICD-10, CPT & SNOMED." },
  { icon: FileText, title: "Structured notes", desc: "SOAP, H&P, referrals & discharge — drafted in real time." },
  { icon: Plug, title: "EHR-native", desc: "Bi-directional sync with Epic, Cerner, athena & Meditech." },
  { icon: Shield, title: "Enterprise security", desc: "HIPAA, SOC 2 Type II, ISO 27001, HITRUST certified." },
  { icon: Zap, title: "Sub-second latency", desc: "Edge inference delivers transcription in under 120ms." },
];

export function ProductTourModal({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl w-[95vw] p-0 overflow-hidden border-0 bg-background rounded-3xl">
        <div className="grid lg:grid-cols-5">
          {/* video */}
          <div className="lg:col-span-3 bg-navy relative">
            <DialogTitle className="sr-only">Clario Product Tour</DialogTitle>
            <DialogDescription className="sr-only">
              A guided walkthrough of Clario's ambient clinical intelligence platform.
            </DialogDescription>
            <div className="absolute top-4 left-5 z-10 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur text-[11px] font-medium text-white">
                <span className="size-1.5 rounded-full bg-success animate-pulse" /> 3 min tour
              </span>
            </div>
            <div className="relative aspect-video lg:aspect-auto lg:h-full w-full bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://youtu.be/FPKUwSuz5D4"
                title="Clario Product Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* highlights */}
          <div className="lg:col-span-2 p-7 lg:p-8 max-h-[80vh] overflow-y-auto">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-medical uppercase">Product Tour</span>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-navy">
              See Clario turn a conversation into a chart.
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Watch how ambient AI captures, structures, and syncs an entire encounter — without a single click from the clinician.
            </p>

            <div className="mt-6 space-y-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="group flex items-start gap-3 p-3 rounded-xl hover:bg-surface transition-colors"
                >
                  <span className="shrink-0 size-9 rounded-lg bg-gradient-to-br from-medical to-cyan-bright grid place-items-center text-white shadow-[0_6px_16px_-6px_rgba(20,110,245,0.6)]">
                    <h.icon size={16} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-navy">{h.title}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{h.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between gap-3">
              <div className="text-[11px] text-muted-foreground">Prefer a live walkthrough?</div>
              <a
                href="#demo"
                onClick={() => onOpenChange(false)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-navy text-primary-foreground text-xs font-semibold hover:bg-medical transition-colors"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
