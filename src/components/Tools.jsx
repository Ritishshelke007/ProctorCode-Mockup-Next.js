"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import dashboard from "../app/dashboard.png";

export default function Tools() {
  const tabs = [
    {
      title: "Dashboard",
      value: "dashboard",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Faculty Dashboard</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Monitor",
      value: "monitor",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Monitor Student Activities</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Add Course",
      value: "course",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Add Course</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Create Exam",
      value: "exam",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Create a new exam</p>
          <DummyContent />
        </div>
      ),
    },

    {
      title: "Profile",
      value: "profile",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Profile tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[44rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-center justify-start my-40">
      <h1 className="md:mt-0 text-4xl md:text-4xl max-w-lg text-center my-5 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Empower Educators with ProctorCode's Faculty Tools
      </h1>
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src={dashboard}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
