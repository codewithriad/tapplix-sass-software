
import "../styles/globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Tapplix - Sass - Software - Agency",
    template: "%s | Tapplix",
  },
  description: "Built with Next.js, Tailwind CSS, and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
