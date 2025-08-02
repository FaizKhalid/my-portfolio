import { DraggableCardDemo } from "@/components/collage";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Projects } from "@/components/projects";
import { Subheading } from "@/components/subheading";
import { Timeline } from "@/components/timeline";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-items-center">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
        <Heading>About Me</Heading>
        <Subheading>
          I am a Software Engineer studying form Sir syed University. I have an
          experties in development and i love coding
        </Subheading>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I like to visit new places
        </p>
        <DraggableCardDemo />
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          Here's a timeline of my life achievements
        </p>
        <Timeline />
      </Container>
    </div>
  );
}
