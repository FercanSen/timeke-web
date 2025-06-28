"use client";

import { Menu } from "lucide-react";
import { Button } from "../ui/Button";
import Link from "next/link";

interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="bg-background shadow-md p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Button
          className="md:hidden p-2 mr-2 rounded focus:outline-none focus:ring"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <Menu className="w-6 h-6" />
        </Button>
        <Link href="/" className="text-xl font-bold">
          Timeke
        </Link>
      </div>
    </header>
  );
}
