import { EmailForm } from "../EmailForm";

const LimitedTime = () => {
  return (
    <section className="OrnamentBox1 bg-black w-full h-[450px] md:h-[486px] ">
      <div className="container w-full h-full flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-semibold text-center md:text-left">
            Limited time <br /> Free Access
          </h1>
          <p className="text-md md:text-xl text-center md:text-left mt-2">
            Sign-Up for Free Access!
          </p>
        </div>
        <div className="w-full md:w-[70%] lg:w-1/2 mt-8">
          <EmailForm />
        </div>
      </div>
    </section>
  );
};

export default LimitedTime;
