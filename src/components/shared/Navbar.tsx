"use client";

import { Phone, Menu, X, Sun, Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useThemeToggle } from "@/hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useThemeToggle();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Tech Stack", href: "/tech-stack" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={"/logo.png"}
                width={100}
                height={40}
                alt="tapplix-logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Theme Toggle Floating Button */}
          <div
            className="fixed top-[30%] right-0 w-[40px] h-[35px] 
              flex items-center justify-center 
              bg-[#444] hover:bg-blue-600 text-white 
              cursor-pointer z-[9999] 
              rounded-l-[50px] transition-all duration-200"
          >
            <button
              onClick={toggleTheme}
              className="p-3 rounded text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <Phone className="h-4 w-4" />
              <div className="text-sm">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Any Question:
                </div>
                <div className="font-semibold">+1 (305) 986-6855</div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              key="mobileMenu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden border-t border-gray-100 dark:border-gray-800 py-4"
            >
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2"
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Contact */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-4">
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <Phone className="h-4 w-4" />
                    <div className="text-sm">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Any Question:</div>
                      <div className="font-semibold">+1 (305) 986-6855</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
};

export default Navbar;
