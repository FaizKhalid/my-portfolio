import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function DraggableCardDemo() {
  const items = [
    {
      title: "Tyler Durden",
      image: "https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80",
      className: "top-10 left-[10%] md:left-[20%] rotate-[-5deg]",
    },
    {
      title: "The Narrator",
      image: "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80",
      className: "top-36 left-[12%] md:left-[25%] rotate-[-7deg]",
    },
    {
      title: "Iceland",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80",
      className: "top-5 left-[30%] md:left-[40%] rotate-[8deg]",
    },
    {
      title: "Japan",
      image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80",
      className: "top-28 left-[42%] md:left-[55%] rotate-[10deg]",
    },
    {
      title: "Norway",
      image: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80",
      className: "top-20 left-[45%] md:right-[35%] rotate-[2deg]",
    },
    {
      title: "New Zealand",
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80",
      className: "top-20 left-[22%] md:left-[45%] rotate-[-7deg]",
    },
    {
      title: "Canada",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80",
      className: "top-8 left-[18%] md:left-[30%] rotate-[4deg]",
    },
  ];

  return (
    <DraggableCardContainer className="relative flex min-h-[30rem] w-full items-center justify-center overflow-hidden px-4">
      <p className="absolute top-6 mx-auto max-w-xs px-2 text-center text-sm font-semibold text-neutral-400 md:top-1/2 md:max-w-sm md:-translate-y-3/4 md:text-2xl md:font-black dark:text-neutral-800">
        If it's your first day at Fight Club, you have to fight.
      </p>
      {items.map((item) => (
        <DraggableCardBody
          key={item.title}
          className={`absolute ${item.className}`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-28 w-48 md:h-40 md:w-80 object-cover rounded-xl shadow-md"
          />
          <h3 className="mt-1 text-center text-xs font-medium text-neutral-700 md:mt-4 md:text-base dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
