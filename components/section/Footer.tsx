import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Home", url: "/" },
  { label: "Projects", url: "/project" },
  // { label: "About", url: "/about" },
  // { label: "Blog", url: "/blog" },
  // { label: "Contact", url: "/contact" },
];

const icons = [
  {
    name: "LinkedIn",
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/adamabdillah/",
  },
  {
    name: "Instagram",
    icon: <Instagram />,
    href: "https://www.instagram.com/adamabdillah20/",
  },
  {
    name: "Github",
    icon: <Github />,
    href: "https://github.com/abdillahadam20",
  },
];

const Footer = () => {
  return (
    <footer className="w-full py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <a href="https://pagedone.io/" className="flex justify-center">
            <Image
              src="/Logo-Adam-Abdillah.png"
              alt="Adam Abdillah Logo"
              width={100}
              height={100}
            />
          </a>
          <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-200">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.url}
                  className="text-gray-800 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 transition-all duration-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex space-x-10 justify-center items-center mb-14">
            {icons.map((icon) => (
              <Link
                key={icon.name}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 transition-all duration-500"
              >
                {icon.icon}
              </Link>
            ))}
          </div>
          <span className="text-lg text-gray-500 text-center block">
            ©<a href="https://pagedone.io/">2025</a> Adam Abdillah, All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
