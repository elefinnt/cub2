import { CircleFadingPlus } from "lucide-react";
import React, { useState } from "react";

interface SubDescription {
  body: string;
}

interface EngagementData {
  title: string;
  description: string;
  subDesc: SubDescription[];
}

interface EngagementCardDataProps {
  cardData: EngagementData[];
}

const EngagementCard: React.FC<EngagementCardDataProps> = ({ cardData }) => {
  const [open, setOpen] = useState<boolean[]>(
    new Array(cardData.length).fill(false)
  );

  const toggleText = (index: number) => {
    const updatedOpenSections = [...open];
    updatedOpenSections[index] = !updatedOpenSections[index];
    setOpen(updatedOpenSections);
  };

  return (
    <div>
      {cardData.map((data, i) => (
        <div key={i} className="section-3-tab">
          <div className="section-3-tab-title">{data.title}</div>
          <div className="section-3-text-wrap">
            <div className="section-3-tab-text">{data.description}</div>
            <div className="section-3-show-more" onClick={() => toggleText(i)}>
              <span>{open[i] ? "Close" : "Show More"}</span>
              <CircleFadingPlus className="show-more-icon" />
            </div>
          </div>
          {open[i] && (
            <div className="section-3-content-hidden-wrap">
              <div className="section-3-hidden-content">
                {data.subDesc.map((desc, index) => (
                  <div key={index} className="section-3-hidden-content-list">
                    {desc.body}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EngagementCard;
