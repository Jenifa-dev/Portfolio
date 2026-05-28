import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";

const projects = [
  {
    name: "Fuel Management System",
    tag: "Production - Canada",
    desc: "Broker onboarding, RBAC, fleet & driver management with WEX API for automated fuel transactions and real-time dashboards.",
    stack: ["React", "Node.js", "Express.js", "Material UI", "MySQL"],
  },
  {
    name: "Logistics Management System",
    tag: "Production - Malaysia",
    desc: "Role-based logistics platform with GPS tracking, AI invoice generation, Razorpay payments, Dockerized and deployed via AWS ECR.",
    stack: ["Vite", "Express.js", "MySQL", "Google Maps"],
  },
  {
    name: "Kelunga Platform",
    tag: "Marketplace",
    desc: "Two-sided expert/seeker marketplace with JWT auth, slot scheduling, Razorpay checkout and n8n-powered engagement workflows.",
    stack: ["React", "Node.js", "Express.js", "MySQL", "JWT", "Razorpay"],
  },
  
  {
    name: "SaaS Grocery Application",
    tag: "Mobile + Web",
    desc: "Multi-tenant grocery SaaS with mobile shopping experience, location-aware delivery and an admin management console.",
    stack: ["React", "Node.js", "Express.js", "MySQL", "Flutter", "Google Maps"],
  },
  {
    name: "Learning Management System",
    tag: "EdTech",
    desc: "Role-based LMS for admins, instructors and students with optimized REST APIs and responsive Material UI dashboards.",
    stack: ["React", "Node.js", "MySQL", "REST", "Material UI"],
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading index="05" kicker="Selected Work" title="Things I've designed, built and shipped." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group relative rounded-3xl border border-border bg-card p-7 overflow-hidden shadow-card-soft"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative">
              <div className="flex items-start mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-primary">{p.tag}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                {p.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="text-[11px] font-mono px-2 py-1 rounded bg-secondary border border-border text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
