import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { LandingBlogs } from "@/components/landing-blogs";
import { Projects } from "@/components/projects";
import { SectionHeading } from "@/components/section-heading";
import { Subheading } from "@/components/subheading";
import TechStackHover from "@/components/tackstackhover";
import { Testimonials } from "@/components/testimonials";
import { projects } from "@/constant/projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center">
      <Container className="min-h-[200vh] p-4 pt-20 md:pb-10 md:px-10" >
        <div className="flex gap-1  items-center"><Heading>Faiz Khalid</Heading><SectionHeading delay={0.5} className="glass w-fit h-fit text-sm tracking-tighter px-2 text-secondary">Computer Engineer</SectionHeading></div>
        <Subheading>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea delectus
          quaerat, illum quae minus soluta odit voluptatem, nesciunt neque
          pariatur aut totam cumque, blanditiis natus?
        </Subheading>
        <Projects projects={projects.slice(0, 3)} />
        <LandingBlogs />
        <Testimonials />
      </Container>
    </div>
  );
}
