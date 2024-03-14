import { CarouselSize } from "./carousel";

interface Carouselprops {
  title: string;
  showButton?: boolean;
  buttonText?: string;
}
const ProjectsCarousel: React.FC<Carouselprops> = ({
  title,
  showButton = false,
  buttonText,
}) => {
  return (
    <div className="content-container py-20 bg-[#f1f1f1]">
      <div>
        <h1 className="mb-8 text-[62px] font-semibold -tracking-[1px]">
          {title}
        </h1>
        <div className="overflow-visible">
          <CarouselSize />
        </div>
      </div>
      {showButton && (
        <div className="py-4">
          <button className="button">{buttonText}</button>
        </div>
      )}
    </div>
  );
};

export default ProjectsCarousel;
