"use client";
import Link from "next/link";
import { AiFillBug } from "react-icons/ai";
import classname from "classnames";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const currentpath = usePathname();

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
            className={classname({
              "text-zinc-200": link.href === currentpath,
              "text-zinc-400": link.href !== currentpath,
              "hover:text-zinc-800 transition-colors": true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <Button variant="destructive">Click me</Button>
    </nav>
  );
};

export default Navbar;
