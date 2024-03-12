import StatsList from "@/app/components/stats-list";

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
    </>
  );
};

export default AboutPage;
