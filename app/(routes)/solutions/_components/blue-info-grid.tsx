import { ArrowRight, CheckCircle, LucideIcon } from "lucide-react";

interface BlueGridData {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface BlueGridProps {
  infoData: BlueGridData[];
}

const BlueGrid: React.FC<BlueGridProps> = ({ infoData }) => {
  return (
    <div className="content-container-sm">
      <div className="my-[60px] bg-[#e9f3ff] rounded-xl">
        <div className="px-[109px] py-[60px]">
          <div className="grid grid-cols-2">
            {infoData.map((data, index) => (
              <div key={index}>
                <div className="list-list">
                  <div className="list-col">
                    <div className="list-item">
                      <data.icon className="list-item-icon" />
                      <div className="list-item-text">
                        <b>{data.title} </b>
                        {data.desc}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* button text to be made dynamic */}
      <div className="px-[109px] my-[60px]">
        <button className="mt-12 bg-[#445aec] px-8 py-4 flex space-x-1 hover:bg-black hover:text-white">
          <p className="text-white font-medium text-xl tracking-[-.3px]">
            Kick off AI consulting
          </p>
          <ArrowRight height={30} width={15} />
        </button>
      </div>
    </div>
  );
};

export default BlueGrid;
