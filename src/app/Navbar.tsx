"use client";
import Link from "next/link";
import { AiFillBug } from "react-icons/ai";

const Navbar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issue", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 h-14 items-center px-5">
      <Link className="text-4xl" href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-zinc-300 hover:text-white transition-colors"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
