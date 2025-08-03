import { DraggableCardDemo } from "@/components/collage";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Projects } from "@/components/projects";
import { SectionHeading } from "@/components/section-heading";
import { Subheading } from "@/components/subheading";
import { Timeline } from "@/components/timeline";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-items-center">
      <Container className="min-h-[200vh] p-4 pt-20 md:pb-10">
        <Heading>About Me</Heading>
        <Subheading>
          I am a Software Engineer studying form Sir syed University. I have an
          experties in development and i love coding
        </Subheading>
        <SectionHeading className="my-4">
          I like to visit new places
        </SectionHeading>
        <DraggableCardDemo />
        <SectionHeading >
          Here's a timeline of my life achievements
        </SectionHeading>
        <Timeline />
      </Container>
    </div>
  );
}
