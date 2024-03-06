import { CheckCircle, LucideIcon } from "lucide-react";

interface Services {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const services: Services[] = [
  {
    icon: CheckCircle,
    title: "Strategy",
    desc: "We will identify promising use cases, assess Gen AI's impact on your workflows, and establish specific goals for your initiatives.",
  },
];

const BlueGrid = () => {
  return (
    <div className="content-container-sm">
      <div className="my-[60px] bg-[#e9f3ff] rounded-lg">
        <div className="px-[109px] py-[60px]">Content</div>
      </div>
    </div>
  );
};

export default BlueGrid;
