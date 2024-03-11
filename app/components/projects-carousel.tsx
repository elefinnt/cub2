import { CarouselSize } from "./carousel";

const ProjectsCarousel = () => {
  return (
    <div className="content-container py-20 bg-[#f1f1f1]">
      <div>
        <h1 className="mb-8 text-[62px] font-semibold -tracking-[1px]">
          AI consulting projects we&apos;ve delivered
        </h1>
        <div className="overflow-visible">
          <CarouselSize />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
