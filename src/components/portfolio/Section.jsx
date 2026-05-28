import { motion } from "framer-motion";

export function SectionHeading({ index, title, kicker }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14 max-w-3xl"
    >
      <div className="flex items-center gap-3 text-xs font-mono text-primary mb-4">
        <span>{index}</span>
        <span className="h-px w-10 bg-primary/50" />
        <span className="uppercase tracking-widest">{kicker}</span>
      </div>
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter">
        {title}
      </h2>
    </motion.div>
  );
}

export function Section({ id, children }) {
  return (
    <section id={id} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}
