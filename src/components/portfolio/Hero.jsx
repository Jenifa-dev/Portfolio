import { motion } from "framer-motion";
import { ArrowDownRight, FileDown, Mail } from "lucide-react";
import portrait from "@/assets/shared image (36).jpg";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { LinkedinIcon } from "./LinkedinIcon";
import { RESUME_URL } from "./portfolioLinks";

const EASE = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};
const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

export function Hero() {
  const emailAddress = "jenifaj2003@gmail.com";
  const linkedinHref = "https://www.linkedin.com/in/jenifa-j-b8bb5136a";
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}&su=${encodeURIComponent("Portfolio Inquiry")}`;

  const openGmail = (event) => {
    event.preventDefault();
    window.location.assign(gmailHref);
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 w-full grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1.5 text-xs font-mono text-muted-foreground mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for opportunities - 2026
          </motion.div>

          <motion.h1
            variants={item}
            className="whitespace-nowrap font-display font-bold leading-[0.9] text-4xl sm:text-6xl lg:text-8xl tracking-tighter"
          >
            Jenifa <span className="text-gradient">J</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed"
          >
            Node.js Developer crafting scalable web & mobile products with{" "}
            <span className="text-foreground">React</span>,{" "}
            <span className="text-foreground">Express.js</span>,{" "}
            <span className="text-foreground">Flutter</span>, and{" "}
            <span className="text-foreground">AI-driven automation</span>.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:shadow-glow transition-all duration-300"
            >
              View my work
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors"
            >
              Get in touch
            </a>
            <TooltipProvider delayDuration={100}>
              <div className="flex items-center gap-1 sm:ml-2">
                {[
                  { Icon: LinkedinIcon, href: linkedinHref, label: "LinkedIn" },
                  { Icon: FileDown, href: RESUME_URL, label: "Resume" },
                  { Icon: Mail, href: gmailHref, label: "Gmail", onClick: openGmail },
                ].map(({ Icon, href, label, onClick }) => (
                  <Tooltip key={label}>
                    <TooltipTrigger asChild>
                      <a
                        href={href}
                        onClick={onClick}
                        aria-label={label}
                        target={label === "LinkedIn" || label === "Resume" ? "_blank" : undefined}
                        rel={
                          label === "LinkedIn" || label === "Resume"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="p-2.5 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" sideOffset={8}>
                      {label}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-xl"
          >
            {[
              { k: "2", v: "Years building" },
              { k: "5+", v: "Production apps" },
              { k: "8.5", v: "Bsc CGPA" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-border/60 bg-background/40 p-4 sm:p-0 sm:border-0 sm:bg-transparent"
              >
                <div className="font-display text-3xl sm:text-4xl font-bold text-gradient-accent">
                  {s.k}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-10 w-full max-w-sm lg:mt-0 lg:max-w-none"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-accent/40 via-primary/20 to-transparent blur-2xl" />
          <div className="relative rounded-[2rem] overflow-hidden border border-border glass shadow-glow aspect-[4/5]">
            <img
              src={portrait}
              alt="Jenifa J, Node.js Developer"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute left-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-mono text-muted-foreground backdrop-blur">
              Portfolio
            </div>
            <div className="absolute right-4 top-4 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono text-primary backdrop-blur">
              Node.js
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 glass rounded-2xl px-4 py-3 text-xs font-mono shadow-card-soft"
          >
            <div className="text-accent">online</div>
            <div className="text-foreground/90 mt-0.5">Building in public</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="hidden lg:flex absolute right-8 bottom-10 flex-col items-center gap-2 text-xs text-muted-foreground font-mono"
        >
          <span className="rotate-180" style={{ writingMode: "vertical-rl" }}>
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="h-10 w-px bg-gradient-to-b from-primary to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
