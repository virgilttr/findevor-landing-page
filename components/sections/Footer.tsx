import Image from "next/image";
import { Marquee } from "../Marquee";

const Images = [
  {
    src: "/anthropic.png",
    alt: "alt text",
  },
  {
    src: "/cohere.png",
    alt: "alt text",
  },
  {
    src: "/saint-laurent.webp",
    alt: "alt text",
  },
];

const Footer = () => {
  return (
    <>
      <div className="bg-[#3C65FB] w-full pt-12 pb-10">
        <div className="container bg-[#3C65FB]">
          <p className="text-center text-base md:text-lg mb-4">
            Findevor.ai works with the world&apos;s best technology companies
          </p>
          <Marquee
            fade={true}
            direction="left"
            reverse={false}
            pauseOnHover={false}
            className=""
            innerClassName=""
            numberOfCopies={1}
          >
            {Images.map((image, idx) => (
              <Image
                key={idx}
                src={image.src}
                alt={image.alt}
                width={140}
                height={140}
                className="object-contain"
              />
            ))}
          </Marquee>
        </div>
      </div>
      <footer className="bg-black w-full py-8 OrnamentBox1">
        <div className="container flex flex-col items-center justify-center">
          <div className="relative inline-block">
            <div
              className="absolute inset-0 bg-white rounded-full"
              style={{ transform: "scale(1.02)" }}
            ></div>
            <Image
              src="/logo.png"
              alt="Findevor Logo"
              width={100}
              height={95}
              className="relative"
            />
          </div>
          <p className="text-center w-full lg:w-1/2 mt-10">
            Findevor.ai is an A.I. innovation company dedicated to democratizing
            opportunity through AI-powered, user-friendly tools that enhance
            decision-making and elevate human intelligence.
          </p>
          <p className="text-stone-400 text-sm mt-16">
            © 2024 Findevor.ai all rights reserved
          </p>
        </div>{" "}
      </footer>
    </>
  );
};

export default Footer;
