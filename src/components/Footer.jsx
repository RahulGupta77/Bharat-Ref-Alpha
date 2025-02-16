import { Separator } from "@/components/ui/separator";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    // { name: "About", path: "/about" },
    // { name: "Privacy Policy", path: "/privacy-policy" },
    // { name: "Licensing", path: "/licensing" },
    { name: "Contacts", path: "/contacts" },
  ];

  return (
    <footer className=" rounded-lg ">
      <Separator />

      <div className="w-full max-w-screen-xl mx-auto px-4 py-6 flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left">
        {/* Copyright Text */}
        <span className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://amcbharat.com/"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bharat Refrigeration
          </a>
          . All Rights Reserved.
        </span>

        {/* Navigation Links */}
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-wrap justify-center md:justify-end gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
            {links.map(({ name, path }, index) => (
              <li key={index}>
                <Link to={path} className="hover:underline">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
