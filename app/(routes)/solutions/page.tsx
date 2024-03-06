import {
  ArrowRight,
  CheckCircle,
  Gift,
  HeartPulse,
  Microscope,
  PiggyBank,
} from "lucide-react";
import InfoGrid from "./_components/info-grid";
import Image from "next/image";
import BlueGrid from "./_components/blue-info-grid";
import ImageWithText from "./_components/image-text";
import NeutralGrid from "./_components/neutral-info-grid";

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

const happens = [
  {
    icon: CheckCircle,
    title: "Proven expertise.",
    desc: "We are a global team of 230 IT professionals with full-stack software engineering skills and an aptitude for artificial intelligence development. From providing five-star artificial intelligence consulting services to assisting our clients in engineering, testing, deploying, and scaling AI solutions, there is no need we cannot fulfill.",
  },
  {
    icon: CheckCircle,
    title: "Transparency.",
    desc: "Our AI consultancy provides a variety of collaborative models and approaches. We are also not committed to any specific technology or vendor. And we will not recommend using artificial intelligence in situations where a simpler solution, such as RPA, would be sufficient.",
  },
  {
    icon: CheckCircle,
    title: "Innovative mindset.",
    desc: "Curious minds and genuine interest in artificial intelligence lay the groundwork for our AI consulting services. We had jumped on the AI bandwagon before it became mainstream and have been keeping our finger on the pulse of artificial intelligence advances ever since.",
  },
  {
    icon: CheckCircle,
    title: "Focus on success.",
    desc: `Our AI consultants care about your business outcomes. That is why we practice the "start small, think big" mantra and take an iterative approach to AI implementation. By beginning projects with artificial intelligence consulting, we help clients maximize the return on their technology investments and avoid costly mistakes later in the development process.`,
  },
];

const imageText = [
  {
    whiteText: "AI consulting services",
    yellowText: "for generative AI pioneers",
    image: "/AI-head.jpg",
  },
  {
    whiteText: "Artificial intelligence consultants",
    yellowText: "with domain expertise",
    image: "/guy.jpg",
  },
  {
    whiteText: "CUB: an AI consulting company",
    yellowText: "you can rely on",
    image: "/void.jpg",
  },
  {
    whiteText: "FAQ",
    image: "/thinker.jpg",
  },
];

const neutralGrid = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Our tailored AI consulting services for healthcare professionals include IT infrastructure and data audits, mapping AI technologies to patient care and operational needs, conducting feasibility studies and cost-benefit analyses, and providing regulatory and compliance advice.",
  },
  {
    icon: Gift,
    title: "Retail",
    desc: "Our AI consultancy has firsthand experience implementing artificial intelligence for offline retail and eCommerce businesses. We can advise you on how to use intelligent algorithms to personalize customer experiences, identify sales opportunities, and spot trends.",
  },
  {
    icon: Microscope,
    title: "Biotech & Life Science",
    desc: "ITRex AI consultants will help you speed up drug discovery and clinical trials and ensure robust quality control. We are well-versed in AI technology scouting, project roadmapping, change management, and other disciplines that will help your initiative succeed.",
  },
  {
    icon: PiggyBank,
    title: "Finance",
    desc: "As an artificial intelligence consulting company, we’ll recommend the right set of AI technologies and frameworks to enhance the KYC process and risk assessment, capitalize on algorithmic trading, personalize banking services, and prevent fraud.",
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

      <ImageWithText imageTextData={imageText[0]} />
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
      <ImageWithText imageTextData={imageText[1]} />
      <NeutralGrid gridData={neutralGrid} />
      <ImageWithText imageTextData={imageText[2]} />
      <BlueGrid infoData={happens} />

      <ImageWithText imageTextData={imageText[3]} />
    </>
  );
};

export default SolutionsPage;
