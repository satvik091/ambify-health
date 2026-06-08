import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Solutions", href: "#solutions" },
  { label: "Products", href: "#products" },
  { label: "Specialties", href: "#specialties" },
  { label: "Integrations", href: "#integrations" },
  { label: "Resources", href: "#resources" },
  { label: "About", href: "#about" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-border/60"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-gradient-to-br from-navy via-medical to-cyan-bright grid place-items-center text-white font-bold">
            C
          </div>
          <span className="font-display font-bold text-lg tracking-tight">Clario</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-foreground/75 hover:text-foreground transition-colors rounded-md"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a href="#login" className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground">
            Login
          </a>
          <a
            href="#demo"
            className="px-4 py-2 text-sm font-semibold rounded-full bg-navy text-primary-foreground hover:bg-medical transition-colors shadow-[0_8px_24px_-8px_rgba(20,110,245,0.5)]"
          >
            Book Demo
          </a>
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden p-2 rounded-md"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden glass border-t border-border/60"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="py-2 text-sm font-medium">
                  {l.label}
                </a>
              ))}
              <a href="#demo" className="mt-3 px-4 py-2 text-sm font-semibold rounded-full bg-navy text-primary-foreground text-center">
                Book Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
