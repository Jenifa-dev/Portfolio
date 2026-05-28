import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";

export function About() {
  return (
    <Section id="about">
      <SectionHeading index="01" kicker="About" title="Building end-to-end products with Node.js and React." />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3 space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            I'm a Full Stack Developer at <span className="text-foreground font-medium">CubenSquare</span>,
            where I design and ship scalable web applications and RESTful APIs across React, Node.js, Express.js
            and MongoDB.
          </p>
          <p>
            I build scalable web applications with React, Node.js, and Express.js, turning ideas into polished
            digital products with clean code and reliable APIs.
          </p>
          <p>
            I also enjoy refining user flows, improving performance, and shaping maintainable codebases that make
            day-to-day development smoother for the whole team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-2"
        >
          <div className="glass rounded-2xl p-6 shadow-card-soft">
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
              Currently
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-primary font-mono">June 2024 - Present</div>
                <div className="font-display font-semibold text-lg mt-1">Node.js Full Stack Developer</div>
                <div className="text-sm text-muted-foreground">CubenSquare - On-site</div>
              </div>
              <div className="h-px bg-border" />
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">→</span> Improved API performance by 15%</li>
                <li className="flex gap-2"><span className="text-primary">→</span> Boosted user engagement by 10%</li>
                <li className="flex gap-2"><span className="text-primary">→</span> Reached 90% test coverage across critical modules</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
