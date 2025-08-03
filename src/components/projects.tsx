"use client";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { Project } from "@/constant/projects";
import { SectionHeading } from "./section-heading";
import TechStackHover from "./tackstackhover";

export const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <div className=" py-5 ">
      <SectionHeading delay={0.3} className="mb-2">
        A lifetime Projects
      </SectionHeading>
      <div className="md: grid grid-cols-1 gap-4 py-4 md:grid-cols-3 ">
        {projects.map((project, idx) => (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              delay: idx * 0.2,
              ease: "easeInOut",
            }}
            key={project.title}
            className="group glass-hover"
          >
            <Link href={project.href}>
              <Image
                src={project.src}
                alt={project.title}
                width={200}
                height={160}
                className="mb-2 aspect-square h-45 w-full rounded-xl object-cover transition duration-200 "
              />
              <h2 className="text-md mt-2 font-semibold tracking-tight text-neutral-400 dark:text-neutral-300 px-2">
                {project.title}
              </h2>
              <p className="max-w-xs text-sm text-neutral-400 dark:text-neutral-500 px-2 pb-10">
                {project.description}
              </p>
            </Link>
            <TechStackHover/>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
