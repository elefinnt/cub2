"use client";
import { Cable, Circle } from "lucide-react";
import { useState } from "react";

interface Description {
  desc: string;
}

interface EngagementData {
  title: string;
  body: Description[];
}

interface EngagementDataProps {
  bodyData: EngagementData[];
}

const EngagementModels: React.FC<EngagementDataProps> = ({ bodyData }) => {
  const [selectedTab, setSelectedTab] = useState<number | null>(null);

  const handleTabClick = (index: number) => {
    setSelectedTab(index === selectedTab ? null : index);
  };

  return (
    <div className="block-2">
      <div className="p-20">
        <div className="px-[109px]">
          <div className="landing-tabs">
            <div className="flex">
              <div className="landing-tabs-header">
                {bodyData.map((data, i) => (
                  <div key={i} onClick={() => handleTabClick(i)}>
                    <h3
                      className={`landing-tabs-tab ${
                        selectedTab === i ? "active" : ""
                      }`}
                    >
                      <Circle className="landing-tab-icon" />
                      <div className="landing-tab-text">{data.title}</div>
                    </h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="landing-tab-item">
              {selectedTab !== null && (
                <div className="landing-tab-text">
                  {bodyData[selectedTab].body.map((desc, index) => (
                    <p key={index}>{desc.desc}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
          <button className="button space-hmt">
            Let&apos;s discuss our partnership
          </button>
        </div>
      </div>
    </div>
  );
};

export default EngagementModels;
