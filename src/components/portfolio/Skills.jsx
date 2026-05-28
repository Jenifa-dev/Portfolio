import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";

const groups = [
  {
    title: "Frontend",
    items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Redux", "Flutter (Dart)" ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST API Development", "JWT Authentication", "Microservices"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code", "Jira", "Docker", "Firebase", "Google Maps API"],
  },
  {
    title: "Payments & Automation",
    items: ["Razorpay", "PDF Generation", "Email/WhatsApp Sharing"],
  },
  {
    title: "Mobile & Tools",
    items: ["Flutter", "Dart", "Git", "Postman", "Jira", "Razorpay", "WebSockets", "Figma"],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading index="02" kicker="Skills" title="A toolkit for shipping real products." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="group relative rounded-2xl border border-border glass p-6 overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display font-semibold text-lg">{g.title}</h3>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground/80 border border-border hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
