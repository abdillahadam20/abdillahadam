"use client";

import Sidebar from "@/components/base/Sidebar";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";

const menu = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/project" },
  // { name: "About", href: "/about" },
  // { name: "Blog", href: "/blog" },
  // { name: "Contact", href: "/contact" },
];

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [active, setActive] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-between z-50 w-full text-sm py-4">
      <nav className="mt-4 relative max-w-7xl w-full bg-transparent backdrop-blur-md dark:bg-transparent border border-gray-200 rounded-full mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto  dark:border-neutral-700">
        <div className="px-4 md:px-0 flex justify-between items-center w-full">
          <div className="flex items-center">
            <a
              className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80"
              href="https://preline.co/templates/personal/index.html"
              aria-label="Preline"
            >
              <Image
                src="/Logo-Adam-Abdillah.png"
                alt="Adam Abdillah"
                width={40}
                height={40}
              />
            </a>
          </div>

          <div className="flex items-center space-x-4">
            {theme === "dark" ? (
              <Sun
                onClick={() => setTheme("light")}
                className="cursor-pointer text-yellow-500 hover:text-yellow-400"
              />
            ) : (
              <Moon
                onClick={() => setTheme("dark")}
                className="cursor-pointer text-gray-600 hover:text-gray-500"
              />
            )}
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="hamburger-button flex justify-center items-center size-7 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              onClick={toggleSidebar}
              aria-expanded={isSidebarOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation"
            >
              <Menu className="size-3.5" />
            </button>
          </div>
        </div>

        <div className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block">
          <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
            {menu.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActive(item.name)}
                className={`px-3 py-1 rounded-md transition-colors ${
                  active === item.name
                    ? "text-black dark:text-white font-semibold underline"
                    : "text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
};

export default Header;
