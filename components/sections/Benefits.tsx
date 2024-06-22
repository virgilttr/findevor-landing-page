import Image from "next/image";

const Benefits = () => {
  return (
    <section id="benefits" className="container py-20">
      <div className="flex flex-col md:flex-row items-center justify-between mb-16 md:mb-10 lg:mb-0">
        <div className="w-full lg:w-1/2 flex justify-center md:justify-start">
          <Image
            src="/One.png"
            alt="Request to solution"
            width={615}
            height={533}
            className="rounded-xl"
          />
        </div>
        <div className="w-full lg:w-1/2 ml-0 md:ml-8 xl:ml-0">
          <h1 className="text-3xl lg:text-6xl font-semibold mt-6 md:mt-0 mb-4 xl:mb-8 w-[90%]">
            No More Traditional Underwriting Reports!
          </h1>
          <div className="text-base xl:text-xl space-y-4 w-[90%]">
            <p>
              Ask the chatbot a question about your target property in any
              section of the digital underwriting report.
            </p>
            <p>
              Your A.I. will search through all of the underlying property
              reports to curate a detailed answer, specific to your needs.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between mb-16 md:mb-10 lg:mb-0">
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl lg:text-6xl font-semibold mt-6 md:mt-0 mb-4 xl:mb-8 w-[90%]">
            No More Wasted Time and Money!
          </h1>
          <div className="text-base xl:text-xl space-y-4 w-[90%]">
            <p>
              Upload unstructured property documents, including rent rolls,
              financial statements, inspection reports, conversation summaries,
              and more!
            </p>
            <p>
              Your AI will summarize key information to produce firm-tailored
              digital underwriting reports instantaneously.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 ml-0 md:ml-8 xl:ml-0 flex justify-center md:justify-start">
          <Image
            src="/Two.png"
            alt="No More Traditional Underwriting"
            width={615}
            height={533}
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 flex justify-center md:justify-start">
          <Image
            src="/Three.png"
            alt="Maximize Opportunities, Minimize Risks!"
            width={615}
            height={533}
            className="rounded-xl"
          />
        </div>
        <div className="w-full lg:w-1/2 ml-0 md:ml-8 xl:ml-0">
          <h1 className="text-3xl lg:text-6xl font-semibold mt-6 md:mt-0 mb-4 xl:mb-8">
            Maximize Opportunities, Minimize Risks!
          </h1>
          <div className="text-basev xl:text-xl w-[90%]">
            <p>
              Leveraging the latest A.I. capabilities, your underwriting
              automation will identify opportunities and risks that even the
              most trained (human) eye could miss.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
