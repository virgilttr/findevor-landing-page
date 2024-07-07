import { ArrowRight, Calendar, Loader } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="bg-[#3C65FB] py-20">
      <div className="container">
        <div className="max-w-7xl w-full mx-auto">
          <div className="flex w-full flex-col items-center text-white mb-10">
            <p className="text-sm font-semibold uppercase mb-2 md:mb-4 text-center lg:text-start">
              LEVEL UP YOUR UNDERWRITING AUTOMATION
            </p>
            <h1 className="text-3xl text-center lg:text-start">
              Get started with our <span>partnerships.</span>
            </h1>
            <h4 className="mt-4 text-sm flex items-center gap-2">
              <Loader className="text-accent" size={15} />2 spots available this
              month
            </h4>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="relative rounded bg-white text-black OrnamentBox2 overflow-hidden">
              <div className="w-full p-6 lg:p-8 flex flex-col justify-between items-center">
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
                  Wondering if it&apos;s right for you?
                </h1>
                <div className="text-center">
                  <p className="text-stone-500 leading-tight mt-2 text-sm md:text-base max-w-md mx-auto">
                    Learn more about how Findevor works and how we can take your
                    underwritting to the next level.
                  </p>
                  <a
                    href="https://calendly.com/avaldes/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6"
                  >
                    <div className="rounded flex justify-center items-center gap-2 text-white bg-[#3C65FB] hover:bg-[#3C65FB]/90 transition duration-500 px-6 py-3 cursor-pointer whitespace-nowrap">
                      <h1>Book a 30-min call</h1>
                      <Calendar size={16} />
                    </div>
                  </a>
                </div>
              </div>
              {/* <Image
                src={bgCard}
                alt="background card"
                fill
                className="absolute inset-0 object-cover rounded "
                placeholder="blur"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
