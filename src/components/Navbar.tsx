"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-2 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem active={active} setActive={setActive} item="Home" />
        <MenuItem active={active} setActive={setActive} item="Product" />
        <MenuItem active={active} setActive={setActive} item="Tools">
          <div className="flex flex-col space-y-3">
            <HoveredLink href="/">Faculty Tools</HoveredLink>
            <HoveredLink href="/">Student Tools</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem active={active} setActive={setActive} item="Benefits" />
        <MenuItem active={active} setActive={setActive} item="FAQ" />
      </Menu>
    </div>
  );
};

export default Navbar;
