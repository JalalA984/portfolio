"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: ReadonlyArray<{
    title: string;
    description: string;
    link: string;
  }>;
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <div 
          key={item.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Glassmorphism Background */}
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r transform scale-[0.85] rounded-full blur-3xl" />
          
          <Link
            href={item.link}
            target="_blank"
            className="relative block h-full w-full"
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-white/20 backdrop-blur-lg border border-white/20 rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.2 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.2, delay: 0.2 },
                  }}
                  style={{
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden backdrop-blur-lg bg-white/10 border border-white/20 relative z-20",
        className
      )}
      initial={{ scale: 0.95 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)"
      }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </motion.div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-gray-900 font-bold tracking-wide mt-4 dark:text-white transition-transform duration-200", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-gray-800 tracking-wide leading-relaxed text-sm dark:text-white/80 transition-opacity duration-200",
        className
      )}
    >
      {children}
    </p>
  );
};
