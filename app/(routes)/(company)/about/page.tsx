import StatsList from "@/app/components/stats-list";
import { AboutAccordion } from "../_components/about-accordion";
import { Bus, Heart, Home, ShoppingBag } from "lucide-react";

const stats = [
  {
    title: "2021",
    text: "Year of foundation",
  },
  {
    title: "100+",
    text: "Solutions delivered",
  },
  {
    title: "50+",
    text: "Happy clients (and counting)",
  },
  {
    title: "3+",
    text: "Years of client engagement",
  },
  {
    title: "20+",
    text: "professionals and growing",
  },
  {
    title: "90%",
    text: "Hold BS, MS, or PhD in Math/Computer Science",
  },
];

const copmanyData = [
  {
    title: "Rhybox",
  },
  {
    title: "Meetz",
  },
  {
    title: "Edgeify",
  },
  {
    title: "Dabshots",
  },
  {
    title: "Voonder",
  },
  {
    title: "Aimbo",
  },
  {
    title: "Mynte",
  },
  {
    title: "Eidel",
  },
  {
    title: "Yadel",
  },
  {
    title: "Zoozzy",
  },
  {
    title: "Blogspan",
  },
  {
    title: "Edgetag",
  },
];

const AboutPage = () => {
  return (
    <>
      <div className="block-content block-yellow h-[748px]">
        <div className="about-info">
          <h1 className="about-title">Your innovation partner</h1>
          <p className="about-text">
            We get a buzz out of unlocking the power of emerging tech for both
            big-name enterprises and ambitious startups.{" "}
          </p>
        </div>
      </div>
      <div className="block-content bg-black">
        <h2 className="about-section-title text-white">
          <span className="text-yellow">Key facts </span>
          about us
        </h2>
        <StatsList statsData={stats} />
        <div className="about-offices">
          <div className="about-offices-title">3 Offices:</div>
          <div className="logos">
            <div className="logos-slide text-white">
              <a>Auckland</a>
              <a>Melbourne</a>
              <a>London</a>
            </div>
            <div className="logos-slide text-white">
              <a>Auckland</a>
              <a>Melbourne</a>
              <a>London</a>
            </div>
          </div>
        </div>
      </div>
      <div className="block-content block-yellow">
        <h2 className="about-section-title text-black">Why work with us</h2>
        <AboutAccordion />
      </div>
      <div className="block-content">
        <h2 className="about-section-title">Our industry focus</h2>
        <p className="about-subtitle">
          {/* all of this href needs to be linked later */}

          <span className="inline-flex items-center">
            <span>
              <a href="/" target="_blank">
                Retail
              </a>
              <a href="/" target="_blank">
                & E-Commerce
              </a>
            </span>
            <ShoppingBag size={52} className="text-yellow mx-[11px]" />
          </span>
          <span className="inline-flex items-center">
            <span>
              <a href="/" target="_blank">
                Healthcare & Biotech
              </a>
            </span>
            <Heart size={52} className="text-yellow mx-[11px]" />
          </span>
          <br />
          <span className="inline-flex items-center">
            <span>
              <a href="/" target="_blank">
                EdTech & E-Learning
              </a>
            </span>
            <Home size={52} className="text-yellow mx-[11px]" />
          </span>
          <span className="inline-flex items-center">
            <span>
              <a href="/" target="_blank">
                Logistics & Transportation
              </a>
            </span>
            <Bus size={52} className="text-yellow mx-[11px]" />
          </span>
        </p>
        <StatsList statsData={copmanyData} />
      </div>
    </>
  );
};

export default AboutPage;
