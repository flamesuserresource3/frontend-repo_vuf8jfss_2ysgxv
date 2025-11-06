import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { User } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "backdrop-blur bg-white/70 dark:bg-gray-900/60 border-b border-gray-200/70 dark:border-gray-800/60" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg text-gray-900 dark:text-white">SM Manager</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700 dark:text-gray-300">
          <a href="#servizi" className="hover:text-indigo-600">Servizi</a>
          <a href="#portfolio" className="hover:text-indigo-600">Portfolio</a>
          <a href="#contatti" className="hover:text-indigo-600">Contatti</a>
        </nav>
        <a href="#contatti" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-3 py-2 text-sm hover:bg-gray-800 dark:bg-white dark:text-gray-900">
          <User className="h-4 w-4" />
          Parliamo
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Social Media Manager — Tutti i diritti riservati</p>
        <div className="text-sm text-gray-600 dark:text-gray-400">Made with passione e creatività</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
