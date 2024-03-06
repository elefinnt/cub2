import { ArrowRight } from "lucide-react";
import InfoGrid from "./_components/info-grid";

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
          <h1 className="text-[26px] leading-9 tracking-[-.05px] max-w-[930px] font-normal">
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
          <button className="mt-12 bg-[#445aec] px-8 py-4 flex space-x-1">
            <p className="text-white font-medium text-xl tracking-[-.3px]">
              Get started with AI consulting
            </p>
            <ArrowRight height={30} width={15} />
          </button>
        </div>
        <div>New content</div>
      </div>
    </>
  );
};

export default SolutionsPage;
