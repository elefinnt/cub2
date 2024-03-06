"use client";

import { BadgeCheck } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Services {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const services: Services[] = [
  {
    icon: BadgeCheck,
    title: "AI readiness assessment",
    desc: "CUB AI consultants will investigate how artificial intelligence could support your company’s business goals. For this, we’ll inspect your data, audit IT infrastructure, evaluate your IT team's AI expertise, and consider the legal and ethical implications of AI adoption.",
  },
  {
    icon: BadgeCheck,
    title: "AI strategy development",
    desc: "As part of our artificial intelligence consulting services, we help clients identify high-value opportunities for AI implementation, choose viable use cases, develop an AI vision, and tie it to measurable outcomes.",
  },
  {
    icon: BadgeCheck,
    title: "AI proof of concept (PoC)",
    desc: "Before moving forward with full-scale development, use our AI consulting services to validate innovative ideas and assess their feasibility. With highly skilled AI developers on our team, CUB can rapidly prototype and test AI solutions in real-world scenarios.",
  },
  {
    icon: BadgeCheck,
    title: "AI development consulting",
    desc: "Collaborate with our AI consulting company to choose the optimal tech stack for your project. A dedicated AI consultant will also help you select among readily available AI products, calculate the total cost of ownership, and develop a technical vision.",
  },
  {
    icon: BadgeCheck,
    title: "Data management consulting",
    desc: "CUB AI consultants will pinpoint data-driven opportunities for your company, implement data governance frameworks aligned with industry-specific regulations and best practices, achieve consistent data quality for AI model training, and design scalable data architectures.",
  },
  {
    icon: BadgeCheck,
    title: "AI training and capacity building",
    desc: "Our AI consulting expertise includes assessing your employees' technical capabilities and designing personalized learning paths that address your company's specific needs. We will also train your employees on new AI systems and hold workshops for C-level executives.",
  },
  {
    icon: BadgeCheck,
    title: "Support and maintenance",
    desc: "Our artificial intelligence consultants can track and adjust the performance of custom AI solutions created by our team or third parties. We can also handle data management, from discovery to cleaning, serve as a vendor liaison, and perform system upgrades.",
  },
  {
    icon: BadgeCheck,
    title: "R&D consulting",
    desc: "CUB is an artificial intelligence consulting company with an in-house research and development (R&D) department that is always on top of AI innovations. If you seek AI strategy consulting, need to stress-test novel AI tools, or want to wrap your head around ethical AI, we can help!",
  },
];
const InfoGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-y-20">
      {services.map((service: Services) => (
        <div key={service.title} className="mx-5">
          <service.icon className="w-12 h-14 text-[#ffd12d]" />
          <div className="mt-9 font-semibold text-[28px] tracking-tighter">
            {service.title}
          </div>
          <div className="mt-5 text-[#747272] text-[18px] tracking-tighter">
            {service.desc}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoGrid;
