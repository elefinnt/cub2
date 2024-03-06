import { CheckCircle, LucideIcon } from "lucide-react";

interface BlueGridProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const services: BlueGridProps[] = [
  {
    icon: CheckCircle,
    title: "Strategy.",
    desc: "We will identify promising use cases, assess Gen AI's impact on your workflows, and establish specific goals for your initiatives.",
  },
  {
    icon: CheckCircle,
    title: "Tech stack.",
    desc: "Based on your business needs, our AI consultants will recommend commercially available Gen AI tools or open-source models.",
  },
  {
    icon: CheckCircle,
    title: "Data.",
    desc: "Should you need to fine-tune Gen AI with corporate data, our AI consulting firm will collect, clean, and annotate it.",
  },
  {
    icon: CheckCircle,
    title: "Implementation.",
    desc: "Experienced AI consultants will navigate you through the Gen AI implementation process, from integration to employee onboarding.",
  },
  {
    icon: CheckCircle,
    title: "Optimization.",
    desc: "Our AI consulting company helps clients monitor Gen AI applications, identify areas for improvement, and optimize model accuracy.",
  },
];

const BlueGrid =
  // : React.FC<BlueGridProps>
  () =>
    // { title, desc, icon }
    {
      return (
        <div className="content-container-sm">
          <div className="my-[60px] bg-[#e9f3ff] rounded-xl">
            <div className="px-[109px] py-[60px]">
              <div className="grid grid-cols-2">
                {services.map((service) => (
                  <div key={service.title}>
                    <div className="list-list">
                      <div className="list-col">
                        <div className="list-item">
                          <service.icon className="list-item-icon" />
                          <div className="list-item-text">
                            <b>{service.title} </b>
                            {service.desc}
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
