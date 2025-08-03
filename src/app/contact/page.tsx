"use client";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";

import { Subheading } from "@/components/subheading";

export default function Contact() {
  return (
    <div className="min-h-screen items-center justify-items-center">
      <Container className="min-h-[200vh] p-4 pt-20 md:pb-10">
        <Heading>Contact Us</Heading>
        <Subheading>
          I am a Software Engineer studying form Sir syed University. I have an
          experties in development and i love coding
        </Subheading>
        <ContactForm />
      </Container>
    </div>
  );
}
