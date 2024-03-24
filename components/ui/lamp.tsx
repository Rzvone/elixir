"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import useScreenSize from "@/hooks/useScreenSize";
import { ChevronDoubleDownIcon } from "@heroicons/react/16/solid";

export function Lamp() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        elixir
      </motion.h1>
      <div className="flex items-center justify-center w-full relative top-72">
        <ChevronDoubleDownIcon className="animate-bounce h-10 w-10 text-gray-500"/>
      </div>
    </LampContainer>
  );
}


export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {

  const screenSize = useScreenSize();

  const lightWidth = {
    initial: { width: screenSize === "xs" ? "8rem" : screenSize === "sm" ? "15rem" : "30rem" },
    whileInView: { width: screenSize === "xs" ? "16rem" : screenSize === "sm" ? "30rem" : "60rem" },
  }

  const centerLight = {
    initial: { width: screenSize === "xs" ? "4rem" : screenSize === "sm" ? "8rem" : "16rem" },
    whileInView: { width: screenSize === "xs" ? "8rem" : screenSize === "sm" ? "16rem" : "32rem"},
  }


  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: lightWidth.initial.width }}
          whileInView={{ opacity: 1, width: lightWidth.whileInView.width }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: lightWidth.initial.width }}
          whileInView={{ opacity: 1, width: lightWidth.whileInView.width }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        {/* translate-y smaller for small screen 
          scale-x may need to be bigger for smaller screen
        */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div> 
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] md:w-[60rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: centerLight.initial.width }}
          whileInView={{ width: centerLight.whileInView.width }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: lightWidth.initial.width }}
          whileInView={{ width: lightWidth.whileInView.width }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black "></div>
      </div>

      <div className="relative z-50 flex 4xs:-translate-y-60 3xs:-translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
