"use client";
import React, { useState } from "react";
import { Container } from "../container";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const navItems = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const width = useTransform(scrollY, [0, 100], ["90%", "50%"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <Container className="relative z-50">
      <motion.nav
        style={{ width, y }}
        transition={{ duration: 0.3, ease: "linear" }}
        className={`fixed inset-x-0 top-0 mx-auto flex max-w-4xl items-center justify-between rounded-full px-5 py-2 transition-all duration-300 ${
          scrolled
            ? "bg-white/40 dark:bg-black/30 backdrop-blur-md shadow-md"
            : ""
        }`}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            className="h-10 w-10 rounded-full"
            src="/avatar.jpeg"
            width={100}
            height={100}
            alt="Avatar"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className="relative px-2 py-1 text-sm"
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-md z-50"
          onClick={toggleMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/90 dark:bg-black/90 backdrop-blur-md md:hidden flex flex-col items-center justify-center gap-6">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-medium"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </Container>
  );
};
