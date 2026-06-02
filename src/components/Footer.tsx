import Link from "next/link";
import { Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-4 block">
              <span className="text-gradient">Portfolio</span>.
            </Link>
            <p className="text-muted-foreground mb-4 max-w-sm">
              Building robust web applications, integrating AI solutions, and deriving insights from data. Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <FaGithub className="w-5 h-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <FaTwitter className="w-5 h-5" />
              </Link>
              <Link href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</Link></li>
              <li><Link href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Experience</Link></li>
              <li><Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">hello@example.com</li>
              <li className="text-sm text-muted-foreground">+1 (555) 123-4567</li>
              <li className="text-sm text-muted-foreground">San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
