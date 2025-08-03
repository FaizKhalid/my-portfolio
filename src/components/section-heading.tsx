"use client";
import { cnn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  children: string;
  delay?: number;
  className?: string;
}

export const SectionHeading = ({
  children,
  delay = 0,
  className,
}: SectionHeadingProps) => {
  return (
    <h2 className={cnn("max-w-lg text-sm font-normal md:text-sm shadow-pill w-fit px-0.5 dark:text-neutral-400", className)}>
      {children.split(" ").map((word, idx) => (
        <motion.span
          initial={{
            opacity: 0,
            y: 5,
            filter: "blur(2px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: delay + idx * 0.05,
            duration: 0.3,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          key={word + idx}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </h2>
  );
};
