import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Projects } from "@/components/projects";
import { ViewTransitions } from "next-view-transitions";
import { Toaster } from "sonner";
const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Software Developer Portfolio",
  description:
    "the portfolio which in specilazied in web development makes scabale ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className="view-transition">
        <body
          className={`${inter.className} bg-neutral-100 antialiased dark:bg-neutral-700`}
        >
          <Navbar />
          <Toaster position="top-center" />
          {children}
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
