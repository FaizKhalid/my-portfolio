// components/Navbar/footer.tsx

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { Container } from "../container";

export const Footer = () => {
  return (
    <Container className="relative z-10">
      <div className="flex items-center justify-between border-t px-4 py-4">
        <p className="text-sm text-neutral-500">
          Built with love by Faiz Khalid❤️
        </p>
        <div className="flex items-center gap-4">
          <Link href="https://x.com/FaizKha04464047" target="_blank">
            <IconBrandX className="size-4 text-neutral-500 hover:text-neutral-700" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/faiz-khalid-70a922233/"
            target="_blank"
          >
            <IconBrandLinkedin className="size-4 text-neutral-500 hover:text-neutral-700" />
          </Link>
          <Link href="https://github.com/FaizKhalid" target="_blank">
            <IconBrandGithub className="size-4 text-neutral-500 hover:text-neutral-700" />
          </Link>
        </div>
      </div>
    </Container>
  );
};
