import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  tags: string[];
  title: string;
  thumbnail: string;
}

interface ProjectCardData {
  cardData: ProjectCardProps[];
}
const ProjectCard: React.FC<ProjectCardData> = ({ cardData }) => {
  return (
    <div className="work-list">
      {cardData.map((data, i) => (
        <div className="post-wrapper">
          <div className="post post_work" key={i}>
            <div className="post-info">
              <div className="post-tags">
                <a>{data.tags.join(" / ")}</a>
                <span>/</span>
              </div>
              <a className="post__title">
                <span>{data.title}</span>
                <span>
                  <span className="arrow-link">
                    <span className="arrow-link-arrow-blue arrow-link-arrow-back">
                      →
                    </span>
                    <span className="arrow-link-arrow-blue arrow-link-arrow-front">
                      →
                    </span>

                    <span></span>
                  </span>
                </span>
              </a>
            </div>

            <a className="post-image">
              <Image
                src={data.thumbnail}
                alt="Project logo"
                fill
                className="object-cover"
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
