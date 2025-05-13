"use client";

import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        isOpen &&
        !target.closest(".sidebar-container") &&
        !target.closest(".hamburger-button")
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    // Prevent scrolling when sidebar is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

      <div
        className={`sidebar-container w-80 h-full p-4 bg-white flex-col justify-start items-start gap-6 inline-flex overflow-y-auto transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } dark:bg-gray-900`}
      >
        <div className="w-full justify-between items-center gap-2.5 inline-flex">
          <Link href="/">
            <Image
              src="/Logo-Adam-Abdillah.png"
              alt="Adam Abdillah"
              width={40}
              height={40}
            />
          </Link>
          <button
            onClick={onClose}
            className="w-6 h-6 relative bg-white dark:bg-gray-900"
            aria-label="Close menu"
          >
            <X className="text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        <div className="w-full">
          <div className="w-full h-8 px-3 items-center flex">
            <h6 className="text-gray-500 text-xs font-semibold leading-4 dark:text-gray-400">
              MENU
            </h6>
          </div>
          <ul className="flex-col gap-1 flex">
            <li>
              <Link href="/">
                <div className="flex-col flex p-3 bg-white dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                  <div className="h-5 gap-3 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="text-gray-500 dark:text-gray-400"
                    >
                      <g id="category 02">
                        <g id="icon">
                          <path
                            d="M2.5 5.41667C2.5 3.80584 3.80584 2.5 5.41667 2.5C7.0275 2.5 8.33333 3.80584 8.33333 5.41667C8.33333 7.0275 7.0275 8.33333 5.41667 8.33333C3.80584 8.33333 2.5 7.0275 2.5 5.41667Z"
                            stroke="currentColor"
                            strokeWidth="1.6"
                          />
                          <path
                            d="M11.6667 5.41667C11.6667 4.24628 11.6667 3.66109 11.9476 3.24072C12.0691 3.05873 12.2254 2.90248 12.4074 2.78088C12.8278 2.5 13.4129 2.5 14.5833 2.5C15.7537 2.5 16.3389 2.5 16.7593 2.78088C16.9413 2.90248 17.0975 3.05873 17.2191 3.24072C17.5 3.66109 17.5 4.24628 17.5 5.41667C17.5 6.58705 17.5 7.17224 17.2191 7.59262C17.0975 7.7746 16.9413 7.93085 16.7593 8.05245C16.3389 8.33333 15.7537 8.33333 14.5833 8.33333C13.4129 8.33333 12.8278 8.33333 12.4074 8.05245C12.2254 7.93085 12.0691 7.7746 11.9476 7.59262C11.6667 7.17224 11.6667 6.58705 11.6667 5.41667Z"
                            stroke="currentColor"
                            strokeWidth="1.6"
                          />
                          <path
                            d="M11.6667 14.5833C11.6667 12.9725 12.9725 11.6667 14.5833 11.6667C16.1942 11.6667 17.5 12.9725 17.5 14.5833C17.5 16.1942 16.1942 17.5 14.5833 17.5C12.9725 17.5 11.6667 16.1942 11.6667 14.5833Z"
                            stroke="currentColor"
                            strokeWidth="1.6"
                          />
                          <path
                            d="M2.5 14.5833C2.5 13.4129 2.5 12.8278 2.78088 12.4074C2.90248 12.2254 3.05873 12.0691 3.24072 11.9476C3.66109 11.6667 4.24628 11.6667 5.41667 11.6667C6.58705 11.6667 7.17224 11.6667 7.59262 11.9476C7.7746 12.0691 7.93085 12.2254 8.05245 12.4074C8.33333 12.8278 8.33333 13.4129 8.33333 14.5833C8.33333 15.7537 8.33333 16.3389 8.05245 16.7593C7.93085 16.9413 7.7746 17.0975 7.59262 17.2191C7.17224 17.5 6.58705 17.5 5.41667 17.5C4.24628 17.5 3.66109 17.5 3.24072 17.2191C3.05873 17.0975 2.90248 16.9413 2.78088 16.7593C2.5 16.3389 2.5 15.7537 2.5 14.5833Z"
                            stroke="currentColor"
                            strokeWidth="1.6"
                          />
                        </g>
                      </g>
                    </svg>
                    <h2 className="text-gray-500 text-sm font-medium leading-snug dark:text-gray-400">
                      Home
                    </h2>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/project">
                <div className="flex-col gap-1 flex">
                  <div className="flex-col flex p-3 bg-white dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="h-5 gap-3 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="text-gray-500 dark:text-gray-400"
                      >
                        <g id="Swap">
                          <path
                            id="icon"
                            d="M2.50325 9.00193C2.50145 5.42312 5.40119 2.52045 8.98001 2.51865M8.99678 2.5L7.25783 4.94982M17.5 10.9172C17.5 14.496 14.5988 17.3972 11.02 17.3972M11.0022 17.4161L12.7423 14.9671M14.5833 8.3334C12.9725 8.3334 11.6667 7.02756 11.6667 5.41673C11.6667 3.8059 12.9725 2.50006 14.5833 2.50006C16.1942 2.50006 17.5 3.8059 17.5 5.41673C17.5 7.02756 16.1942 8.3334 14.5833 8.3334ZM5.41667 17.5001C4.24628 17.5001 3.66109 17.5001 3.24072 17.2192C3.05873 17.0976 2.90248 16.9413 2.78088 16.7593C2.5 16.339 2.5 15.7538 2.5 14.5834C2.5 13.413 2.5 12.8278 2.78088 12.4074C2.90248 12.2255 3.05873 12.0692 3.24072 11.9476C3.66109 11.6667 4.24628 11.6667 5.41667 11.6667C6.58705 11.6667 7.17224 11.6667 7.59262 11.9476C7.7746 12.0692 7.93085 12.2255 8.05245 12.4074C8.33333 12.8278 8.33333 13.413 8.33333 14.5834C8.33333 15.7538 8.33333 16.339 8.05245 16.7593C7.93085 16.9413 7.7746 17.0976 7.59262 17.2192C7.17224 17.5001 6.58705 17.5001 5.41667 17.5001Z"
                            stroke="currentColor"
                            strokeWidth="1.60274"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                      <h2 className="text-gray-500 text-sm font-medium leading-snug dark:text-gray-400">
                        Projects
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
