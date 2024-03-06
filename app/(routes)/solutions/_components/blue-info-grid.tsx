import { CheckCircle, LucideIcon } from "lucide-react";

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
    </div>
  );
};

export default BlueGrid;
