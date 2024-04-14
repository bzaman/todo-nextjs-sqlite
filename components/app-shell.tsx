"use client";

import { ReactNode, useState } from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12">
      <div className="sm:col-span-12">
        <Header />
      </div>
      <aside
        className={cn(
          "aside transition -translate-x-full delay-200 absolute bg-background w-full left-0 sm:col-span-3 sm:relative sm:top-0 sm:transform-none",
          open && "translate-x-0"
        )}
      >
        <Sidebar onClick={() => setOpen(false)} />
      </aside>
      <div className="sm:hidden pt-4">
        <Button
          className={cn(
            pathname === "/tasks" && "text-accent-blue-foreground",
            pathname === "/important" && "text-accent-pink-foreground",
            pathname === "/myday" && "text-accent-green-foreground"
          )}
          variant="link"
          onClick={() => setOpen(true)}
        >
          <ChevronLeftIcon className="w-6 h-6" /> Lists
        </Button>
      </div>
      <div className="sm:col-span-9">{children}</div>
    </div>
  );
}
