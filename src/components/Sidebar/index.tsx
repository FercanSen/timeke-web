"use client";

import Link from "next/link";
import { sidebarMenuItems } from "./sidebarMenu";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const sidebarClass = cn(
    "fixed md:static top-16 left-0 h-[calc(100vh-4rem)] bg-secondary shadow-md p-4 transition-all duration-300 w-screen md:w-64",
    {
      "translate-x-0 opacity-100": isOpen,
      "-translate-x-full opacity-0 pointer-events-none": !isOpen,
      "md:translate-x-0 md:opacity-100 md:pointer-events-auto": true,
    }
  );

  return (
    <>
      <div className={sidebarClass}>
        <nav className="flex flex-col gap-4">
          {sidebarMenuItems.map(({ title, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded"
              onClick={() => {
                if (isOpen) toggleSidebar();
              }}
            >
              <Icon className="w-5 h-5" />
              <span>{title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
