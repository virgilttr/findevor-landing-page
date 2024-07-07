import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const faqs = [
    {
      question: "What is the workflow?",
      answer:
        "We use your documents to generate a heads up summary on every property, as well as give you the ability to ask any question where the answer can be found in your documents. ",
    },
  ];

  return (
    <section
      id="faq"
      className="container max-w-7xl flex flex-col justify-center w-full py-24"
    >
      <div className="flex flex-col justify-center items-center text-white">
        <p className="text-sm font-semibold uppercase mb-4">faq</p>
        <h1 className="text-3xl text-center">
          You might have questions.
          <br />
          <span>We have the answers.</span>
        </h1>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4 mt-12">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="border-none bg-[#3C65FB] rounded py-4 px-6 "
          >
            <AccordionTrigger>
              <h3 className="text-start font-semibold text-base md:text-lg">
                <span className="mr-4">✦</span>
                {faq.question}
              </h3>
            </AccordionTrigger>
            <AccordionContent className="text-base text-stone-100">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Faq;
