"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import codeeditor from "../app/assets/codeeditor.png";
import copy from "../app/assets/copy.png";
import question from "../app/assets/questions.png";
import feedback from "../app/assets/feedback.png";

const content = [
  {
    title: "Code Editor Integration",
    description:
      "Seamlessly write and submit code directly within the platform, enhancing coding proficiency and practical skills.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={codeeditor}
          width={500}
          height={500}
          className="h-full w-full object-contain"
          alt="linear board demo"
          priority
        />
      </div>
    ),
  },
  {
    title: "Real-time Monitoring",
    description:
      "Benefit from real-time monitoring features ensuring exam integrity and deterring malpractice activities during assessments.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src={copy}
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Automated Assessment",
    description:
      " Experience automated assessment processes that streamline grading and evaluation, providing timely feedback to enhance learning outcomes.",
    content: (
      <Image
        src={question}
        width={300}
        height={300}
        className="h-full w-full object-contain"
        alt="linear board demo"
      />
    ),
  },
  {
    title: "Instant Feedback",
    description:
      "Receive immediate feedback on assessments and coding exercises, enabling rapid learning iteration and skill improvement.",
    content: (
      <Image
        src={feedback}
        width={300}
        height={300}
        className="h-full w-full object-contain"
        alt="linear board demo"
      />
    ),
  },
];
export function StudentTools() {
  return (
    <div className="p-10 h-screen w-full">
      <div className="flex flex-col justify-center items-center">
        <h1 className="md:mt-0 text-4xl md:text-4xl max-w-4xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Unlock Your Potential:
        </h1>
        <h1 className="md:mt-0 text-4xl mb-5 md:text-4xlmax-w-4xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Explore Our Student-Centric Features!
        </h1>
      </div>
      <StickyScroll content={content} />
    </div>
  );
}
