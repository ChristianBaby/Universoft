"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, CTA_LINK } from "@/lib/constants/navigation";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-white transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-navy/8" : "shadow-sm shadow-navy/5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        {/* Logo: isotipo + nombre */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/images/isotipo-transparent.png"
            alt="Universoft Systems"
            width={36}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <div className="flex flex-col leading-none gap-0.5">
            <span className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-navy">
              Universoft
            </span>
            <span className="font-display text-[10px] font-medium uppercase tracking-[0.22em] text-navy/70">
              Systems
            </span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-navy/70 transition-colors hover:text-navy after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-blue after:to-blue-bright hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA a la derecha */}
        <div className="hidden md:block shrink-0">
          <Button href={CTA_LINK.href} variant="primary" className="text-xs px-4 py-2">
            {CTA_LINK.label}
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          className="md:hidden text-navy"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-t border-navy/10"
          >
            <div className="px-6 pb-5 pt-2">
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block text-sm font-medium text-navy/70 hover:text-navy"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button
                href={CTA_LINK.href}
                variant="primary"
                className="mt-4 w-full"
                onClick={() => setIsOpen(false)}
              >
                {CTA_LINK.label}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
