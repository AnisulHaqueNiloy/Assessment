import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-black dark:text-white"
          >
            DEVLOP.ME
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/"
              className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors font-medium"
            >
              Portfolio
            </Link>
            <Link
              href="/"
              className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors font-medium"
            >
              Blog
            </Link>
            {/* Theme Switch */}
            <ThemeToggle />
          </nav>

          {/* CTA Button */}
          <Button
            variant="outline"
            className="hidden md:flex items-center gap-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            Start Project
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors rounded"
            aria-label="Open mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
