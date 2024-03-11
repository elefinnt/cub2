import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const ReferencePresentation = () => {
  return (
    <div className="bg-black">
      <div className="content-container-sm py-20">
        <div className="reviews-content text-white flex">
          <div className="reviews-title">
            CUB&apos;s team are experts in their trade. The software development
            they provided was critical to advancing the project to the next
            level.
          </div>
          <div className="reviews-author">
            <div className="reviews-photo">
              <Image
                src="/profile-circle.png"
                alt="Profile picture"
                width={88}
                height={88}
              />
            </div>
            <div className="reviews-author-info">
              <div>Chris Dunlop</div>
              <div>CTO</div>
              <div>Another Company</div>
            </div>
          </div>
          <div className="reviews-nav">
            <ChevronLeft />
            <ChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferencePresentation;
