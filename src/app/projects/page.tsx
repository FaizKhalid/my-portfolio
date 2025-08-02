import { DraggableCardDemo } from "@/components/collage";
import { Container } from "@/components/container";
import { Projects } from "@/components/projects";
import { Timeline } from "@/components/timeline";
import { Testimonials } from "@/components/testimonials";
import { projects } from "@/constant/projects";
import Image from "next/image";

export default function Project() {
  return (
    <div className="min-h-screen items-center justify-items-center">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          Projects
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I am a Software Engineer studying form Sir syed University. I have an
          experties in development and i love coding
        </p>
        <Projects projects={projects} />
      </Container>
    </div>
  );
}
