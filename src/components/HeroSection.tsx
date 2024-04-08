import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto pt-16 md:h-screen w-full rounded-md flex flex-col items-center justify-center relative space-y-5 overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center max-w-5xl">
        <h1 className="pt-36 md:mt-0 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Revolutionize Practical Exams with ProctorCode
        </h1>
        <p className="mt-5 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Experience the future of online assessments with ProctorCode – the
          ultimate solution for secure and efficient exams. Our cutting-edge
          platform seamlessly integrates advanced technology to ensure
          integrity, reliability, and convenience for both educators and
          students.
        </p>
        <div className="mt-7 text-white">
          <Link href={"/"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Book Your Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
