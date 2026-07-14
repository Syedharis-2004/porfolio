import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Full Stack Developer | AI Engineer | Data Scientist",
  description: "Professional portfolio showcasing Full Stack Development, AI integration, and Data Science projects.",
  keywords: ["Full Stack Developer", "AI Engineer", "Data Scientist", "Portfolio", "Next.js", "React"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, "scroll-smooth dark")} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary/30 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
