import { ArrowRight, LucideIcon } from "lucide-react";

interface Grid {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface GridProps {
  gridData: Grid[];
}

const NeutralGrid: React.FC<GridProps> = ({ gridData }) => {
  return (
    <div className="content-container py-20">
      <div className="grid grid-cols-2 neutral-wrapper gap-y-20">
        {gridData.map((data, i) => (
          <div key={i} className="mx-5">
            <data.icon className="neutral-icon" />
            <b className="neutral-item-title">{data.title} </b>
            <div className="neutral-item-text">{data.desc}</div>
          </div>
        ))}
      </div>
      {/* button text to be made dynamic */}
      <div className="my-[60px]">
        <button className="mt-12 bg-[#445aec] px-8 py-4 flex space-x-1 hover:bg-black hover:text-white">
          <p className="text-white font-medium text-xl tracking-[-.3px]">
            Contact CUB consultants
          </p>
          <ArrowRight height={30} width={15} />
        </button>
      </div>
    </div>
  );
};

export default NeutralGrid;
