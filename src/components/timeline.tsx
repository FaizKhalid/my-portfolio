"use client";
import { useInView, motion } from "motion/react";
import React, { useRef } from "react";
import { IconCircleCheck, IconCircleCheckFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

type Data = {
  title: string;
  content: {
    title: string;
    description?: string | React.ReactNode;
  }[];
};

export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInview = useInView(ref, { once: true, amount: 0.6 });
  const data: Data[] = [
    {
      title: "2025",
      content: [
        {
          title: "Reached $20K MRR with my VSCode fork.",
          description: "Reached the raven milestone",
        },
      ],
    },
    {
      title: "2024",
      content: [
        {
          title: "Built a personal finance tracker app",
          description: "Helped 5K+ users manage budgets",
        },
      ],
    },
    {
      title: "2023",
      content: [
        {
          title: "Contributed to a major open-source project",
          description: "Submitted 12 PRs to Next.js",
        },
      ],
    },
    {
      title: "2022",
      content: [
        {
          title: "Started full-time job as frontend engineer",
          description: "Joined a fast-growing health-tech startup",
        },
      ],
    },
    {
      title: "2021",
      content: [
        {
          title: "Graduated from university",
          description: "Completed BSc in Computer Engineering",
        },
      ],
    },
  ];

  return (
    <div ref={ref} className="py-10">
      {data.map((year, idx) => (
        <div key={year.title}>
          <motion.h2
            animate={{
              filter: isInview ? "blur(0px)" : "blur(10px)",
              opacity: isInview ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.1 * idx,
            }}
            className="shadow-box mb-2 w-fit rounded-md px-2 py-0.5 font-bold text-black"
          >
            {year.title}
          </motion.h2>
          <div className="flex flex-col gap-4">
            {year.content.map((item, index) => (
              <div key={item.title?.toString()} className="pl-4">
                <Step isInview={isInview} index={index}>
                  <motion.h3
                    animate={{
                      opacity: isInview ? 1 : 0,
                      y: isInview ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.1 * index,
                    }}
                    className="text-neutral-600"
                  >
                    {item.title}
                  </motion.h3>
                </Step>
                {item.description && (
                  <p className="pt-1 pl-4 text-sm text-neutral-400">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Step = ({
  className,
  children,
  isInview,
  index,
}: {
  className?: string;
  children: React.ReactNode;
  isInview: boolean;
  index: number;
}) => {
  return (
    <motion.div
      animate={{
        opacity: isInview ? 1 : 0,
        y: isInview ? 0 : -10,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.1 * index,
      }}
      className={cn("flex items-start gap-2", className)}
    >
      <IconCircleCheckFilled className="mt-1 h-4 w-4 text-neutral-500" />
      {children}
    </motion.div>
  );
};
