import React from "react";
import Marquee from "react-fast-marquee"
import { SectionHeading } from "./section-heading";
export const Testimonials = () => {
  const data = [
    {
      quote: `Manu is so great with his work, our production was shut down within the first day itself. Highly recommended.`,
      name: "Elon Musk",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: `Working with Manu was a breeze. He delivered exactly what we needed before the deadline.`,
      name: "Sara Williams",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: `Incredible skills and very professional approach. I will definitely work with him again.`,
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHwy",
    },
    {
      quote: `Manu turned our ideas into reality in no time. Outstanding communication and delivery.`,
      name: "Priya Mehta",
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: `Top-notch service and attention to detail. Highly satisfied with the outcome.`,
      name: "David Kim",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: `He made sure everything was perfect. Great energy and passion for his craft.`,
      name: "Linda Tran",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="py-10">
      <SectionHeading className="mb-4" delay={0.8}>
        People love my work
      </SectionHeading>
      <div className="flex mask-r-from-80% mask-l-from-80%">
      <Marquee speed={20} pauseOnHover>
        <div className="flex py-4">
      {data.map((item, idx) => (
        
          <TestimonialCard key={`testimonial-${idx}`} {...item}/> 
        
      ))}
      </div>
      </Marquee>
      </div>
    </div>
  );
};

const TestimonialCard = ({
  quote,
  name,
  avatar,
}: {
  quote: string;
  name: string;
  avatar: string;
}) => {
  return (
    <div className="relative shadow-box mx-4 flex h-40 w-full max-w-60 flex-col gap-4 rounded-xl p-4">
      <p className="text-sm text-neutral-500">{quote}</p>
      <div className="flex items-center gap-4 absolute bottom-0 pb-5 ">
        <img src={avatar} alt={name} className="size-4 rounded-full object-cover" />
        <p className="text-sm text-neutral-500">{name}</p>
      </div>
    </div>
  );
};
