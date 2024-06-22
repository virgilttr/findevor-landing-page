"use client";

import { YouTubeEmbed } from "@next/third-parties/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Download from "@/components/sections/Download";
import LimitedTime from "@/components/sections/LimitedTime";
import Benefits from "@/components/sections/Benefits";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";
import ReactLenis from "lenis/react";
import Footer from "@/components/sections/Footer";
import { EmailForm } from "@/components/EmailForm";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Download />
      <LimitedTime />
      <Benefits />

      {/* Call to action */}
      <div className="bg-[#3C65FB] w-full py-14 lg:py-18 flex items-center">
        <div className="container flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-3xl lg:text-6xl font-semibold text-center w-full xl:w-[80%]">
            Accelerate your firm’s growth with deep insights from Generative
            A.I.
          </h1>
          <p className="text-md md:text-lg lg:text-xl w-full xl:w-[65%] text-center mt-2 lg:mt-5 mb-8 lg:mb-10">
            All of this delivered using &ldquo;A.I. Glue&ldquo; for a seamless
            integration with your existing workflows and IT systems, and without
            the need for in-house technical support!
          </p>
          <div className="w-full md:w-[70%] lg:w-1/2 ">
            <EmailForm buttonStyle="black" />
          </div>
        </div>
      </div>

      {/* video */}
      <div className="bg-black py-16 w-full">
        <div className="container flex items-center justify-center">
          <YouTubeEmbed videoid="6OBgKtayz2M" width={720} />
        </div>
      </div>

      <Pricing />
      <Faq />
      <Footer />
    </main>
  );
}
