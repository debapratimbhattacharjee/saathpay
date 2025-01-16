"use client";

import React, { useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Utility for class name handling

// Sidebar Context
const SidebarContext = createContext();

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

// Sidebar Provider
export const SidebarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Sidebar Wrapper
export const Sidebar = ({ children }) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};

// Sidebar Body
export const SidebarBody = ({ children }) => {
  return (
    <>
      <DesktopSidebar>{children}</DesktopSidebar>
      <MobileSidebar>{children}</MobileSidebar>
    </>
  );
};

// Desktop Sidebar
const DesktopSidebar = ({ children }) => {
  const { open, setOpen } = useSidebar();

  return (
    <motion.div
      className={cn(
        "h-full px-4 py-4 hidden md:flex flex-col bg-neutral-100 dark:bg-neutral-800 w-[300px] flex-shrink-0"
      )}
      animate={{ width: open ? "300px" : "60px" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {children}
    </motion.div>
  );
};

// Mobile Sidebar
const MobileSidebar = ({ children }) => {
  const { open, setOpen } = useSidebar();

  return (
    <div className="h-10 px-4 py-4 flex md:hidden items-center justify-between bg-neutral-100 dark:bg-neutral-800">
      <div className="flex justify-end w-full">
        <IconMenu2
          className="text-neutral-800 dark:text-neutral-200"
          onClick={() => setOpen(!open)}
        />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-50 flex flex-col"
          >
            <div
              className="absolute right-10 top-10"
              onClick={() => setOpen(!open)}
            >
              <IconX />
            </div>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Sidebar Link
export const SidebarLink = ({ link }) => {
  const { open } = useSidebar();

  return (
    <Link href={link.href} className="flex items-center gap-2 py-2">
      {link.icon}
      <motion.span
        animate={{ opacity: open ? 1 : 0 }}
        className="text-neutral-700 dark:text-neutral-200 text-sm"
      >
        {link.label}
      </motion.span>
    </Link>
  );
};
