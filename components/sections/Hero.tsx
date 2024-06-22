import { Button } from "../ui/button";
import { ParticlesComponent } from "../ui/particles";
import { onGotoElement } from "@/lib/utils";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-full">
      <ParticlesComponent />
      <div className="container flex justify-center items-center flex-col w-full h-[970px] ">
        <h1 className="text-3xl md:text-6xl font-bold text-center">
          Real Estate Underwriting Reports, Made 10x Faster, Cheaper, and
          Smarter!
        </h1>
        <p className="text-lg w-[90%] mt-2 md:w-full md:text-xl md:mt-4 text-center">
          Underwriting Automation with Generative A.I.
        </p>
        <Button
          onClick={() => onGotoElement("download")}
          size={"lg"}
          className="bg-[#3C65FB] mt-8 text-white hover:bg-white hover:text-black font-semibold"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Hero;
