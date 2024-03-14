import { LucideIcon } from "lucide-react";

interface ProjectCardProps {
  tags: string;
  title: string;
  thumbnail: string;
  logo: LucideIcon;
}

interface ProjectCardData {
  cardData: ProjectCardProps;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ cardData }) => {
  return (
    <div className="post-wrapper">
      <div className="post post_work">
        <div className="post-info">
          <div className="post-tags">
            <a>Artifical Intelligence</a>
            <span>/</span>
            <a>Gen AI</a>
            <span>/</span>
            <a>Product Development</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
