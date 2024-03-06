import { ArrowRight, CheckCircle } from "lucide-react";
import InfoGrid from "./_components/info-grid";
import Image from "next/image";
import BlueGrid from "./_components/blue-info-grid";

const infoData = [
  {
    icon: CheckCircle,
    title: "Strategy.",
    desc: "We will identify promising use cases, assess Gen AI's impact on your workflows, and establish specific goals for your initiatives.",
  },
  {
    icon: CheckCircle,
    title: "Tech stack.",
    desc: "Based on your business needs, our AI consultants will recommend commercially available Gen AI tools or open-source models.",
  },
  {
    icon: CheckCircle,
    title: "Data.",
    desc: "Should you need to fine-tune Gen AI with corporate data, our AI consulting firm will collect, clean, and annotate it.",
  },
  {
    icon: CheckCircle,
    title: "Implementation.",
    desc: "Experienced AI consultants will navigate you through the Gen AI implementation process, from integration to employee onboarding.",
  },
  {
    icon: CheckCircle,
    title: "Optimization.",
    desc: "Our AI consulting company helps clients monitor Gen AI applications, identify areas for improvement, and optimize model accuracy.",
  },
];

const SolutionsPage = () => {
  return (
    <>
      <div className="content-container bg-[#030617] flex justify-between">
        <div className="py-20">
          <div className="flex justify-center flex-col max-w-lg">
            <h1 className="font-medium text-[70px] text-white tracking-[-2px] whitespace-pre-line max-w-lg leading-none">
              AI consulting & development services
            </h1>
            <h1 className="text-2xl xl mt-5 text-white leading-[-0.5px] tracking-wider ">
              From image analysis and human activity recognition to semantic
              search and manual task automation, we provide AI consulting
              services and develop custom artificial intelligence solutions that
              give you a competitive edge
            </h1>
          </div>
          <button className="mt-12 bg-[#445aec] px-8 py-4 flex space-x-1">
            <p className="text-white font-medium text-xl tracking-[-.3px]">
              Talk to our AI developers
            </p>
            <ArrowRight height={30} width={15} />
          </button>
        </div>
        <img src="brain.jpg" alt="Brain" height={766} width={766} />
      </div>
      <div className="content-container">
        <div className="py-[60px]">
          <h1 className="mb-7 text-[38px] tracking-[-1px] font-semibold leading-[1.1] whitespace-pre-line max-w-4xl">
            CUB AI consulting services at a glance
          </h1>
          <h1 className="landing-info__text_mini">
            {/* needs hyperlinks to other routes */}
            As an AI consulting company, CUB is well-equipped to help your
            organization integrate AI capabilities—from straightforward machine
            learning to deep neural networks—into existing and novel software
            solutions. Each of our artificial intelligence consulting services
            yields tangible results that guide your company's journey to AI
            excellence.
          </h1>
        </div>
        <div className="flex">
          <InfoGrid />
        </div>
        <div className=" pb-20">
          <button className="mt-12 bg-[#445aec] px-8 py-4 flex space-x-1 hover:bg-black hover:text-white">
            <p className="text-white font-medium text-xl tracking-[-.3px]">
              Get started with AI consulting
            </p>
            <ArrowRight height={30} width={15} />
          </button>
        </div>
      </div>
      {/* This whole block needs figuring out - text isnt completely centre aligned with image but itll do for now */}
      {/* This needs to be made into a component */}

      <div className="relative w-full min-h-full">
        <div className="relative h-[480px] flex justify-start">
          <Image
            src="/AI-Head.jpg"
            fill
            alt="head"
            className="object-cover absolute"
          />
          <div className="px-[189px]">
            <h2 className="text-content relative text-white max-w-3xl">
              AI consulting services
              <span className="text-[#ffdb3b]">
                {" "}
                for generative AI pioneers
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="block-yellow content-container py-[60px]">
        <p className="landing-subheader__text_small">
          We provide comprehensive generative AI consulting services to
          businesses seeking to leverage novel technology for increased
          efficiency, productivity, and automation. CUB AI consultants can
          assist you in integrating off-the-shelf Gen AI tools with corporate
          applications, deploying open-source Gen AI solutions as-is, or
          retraining models on your data.
        </p>
      </div>
      <BlueGrid infoData={infoData} />
    </>
  );
};

export default SolutionsPage;
