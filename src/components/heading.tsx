"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import { once } from "events";

type SubheadingProps = {
  as?: "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
};

export const Heading = ({
  as: Tag = "h2",
  children,
  className,
}: SubheadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.1,
      }}
      viewport={{ once: true }}
    >
      <Tag
        className={cn(
          "text-primary text-2xl font-bold tracking-tighter md:text-4xl",
          className,
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
};
