
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tapplix - Sass - Software - Agency",
    template: "%s | Tapplix",
  },
  description: "Built with Next.js, Tailwind CSS, and TypeScript",
  icons: {
    icon: "/icon.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute={"class"} defaultTheme="light" enableSystem={true}>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
