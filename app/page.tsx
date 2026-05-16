import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const pageVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.35,
      ease,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 12 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease,
      delay,
    },
  }),
};

const sectionCards = [
  {
    id: "work",
    eyebrow: "Work",
    title: "Selected projects",
    text: "Product, web, and interface work presented with a clean typographic system and restrained hierarchy.",
  },
  {
    id: "experience",
    eyebrow: "Experience",
    title: "Product-minded execution",
    text: "Systems thinking, fast iteration, and thoughtful implementation across design and engineering.",
  },
  {
    id: "about",
    eyebrow: "About",
    title: "A minimal point of view",
    text: "Built around clarity, structure, and a preference for strong identity over decoration.",
  },
  {
    id: "resume",
    eyebrow: "Resume",
    title: "Background and credentials",
    text: "A concise summary of education, roles, and selected outcomes, formatted for quick scanning.",
  },
  {
    id: "contact",
    eyebrow: "Contact",
    title: "Open to collaborate",
    text: "Reach out for product work, portfolio opportunities, and selective freelance or full-time roles.",
  },
];

export default function HomePage() {
  return (
    <motion.div
      id="home"
      variants={pageVariants}
      initial="hidden"
      animate="show"
      className="space-y-24"
    >
      <section className="min-h-[calc(100vh-5rem)] flex items-end pt-12 md:pt-0">
        <div className="w-full">
          <div className="max-w-5xl">
            <motion.p
              variants={lineVariants}
              custom={0.02}
              className="text-xs font-medium uppercase tracking-[0.3em] text-black/45"
            >
              Developer / Designer / Builder
            </motion.p>

            <motion.h1
              variants={lineVariants}
              custom={0.08}
              className="mt-5 max-w-4xl text-[clamp(4.25rem,13vw,9rem)] font-semibold leading-[0.88] tracking-[-0.085em] text-black"
            >
              Luke Davey.
            </motion.h1>

            <motion.p
              variants={lineVariants}
              custom={0.14}
              className="mt-6 max-w-2xl text-base leading-8 text-black/70 md:text-lg"
            >
              I build premium digital products and websites with a direct,
              minimal, high-contrast approach.
            </motion.p>

            <motion.div
              variants={lineVariants}
              custom={0.2}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="rounded-full border border-black bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-black"
              >
                View work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium text-black transition hover:border-black hover:bg-black/5"
              >
                Contact
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={pageVariants}
            className="mt-18 grid gap-0 border-t border-black/10 md:grid-cols-3"
          >
            {[
              "Developer portfolio with a sharp editorial feel.",
              "Minimal interface. Strong identity. Clean hierarchy.",
              "Built for clarity, not decoration.",
            ].map((line) => (
              <motion.div
                key={line}
                variants={itemVariants}
                className="border-b border-black/10 px-0 py-5 md:border-b-0 md:border-r md:px-6 md:py-7 last:border-r-0"
              >
                <p className="max-w-sm text-sm leading-7 text-black/70">
                  {line}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        {sectionCards.map((section) => (
          <motion.section
            key={section.id}
            id={section.id}
            variants={itemVariants}
            className="border border-black/10 p-6 md:p-8"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-black/40">
              {section.eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">
              {section.title}
            </h2>
            <p className="mt-4 max-w-prose text-sm leading-7 text-black/65">
              {section.text}
            </p>
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
}
