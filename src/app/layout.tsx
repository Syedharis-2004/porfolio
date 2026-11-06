import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Syed Haris Ali Zaidi | AI Engineer & Backend Developer",
  description: "Portfolio of Syed Haris Ali Zaidi — AI Engineer & Backend Developer specializing in LLM Integration, RAG Systems, AI Agents, n8n Automation, and Scalable Backend Architectures.",
  keywords: ["AI Engineer", "Backend Developer", "Python", "FastAPI", "RAG", "AI Agents", "n8n", "Node.js", "Syed Haris Ali Zaidi", "Portfolio"],
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
