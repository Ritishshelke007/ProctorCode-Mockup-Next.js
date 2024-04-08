import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Tools from "@/components/Tools";
import { StudentTools } from "@/components/StudentTools";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Tools />
      <StudentTools />
    </>
  );
}
