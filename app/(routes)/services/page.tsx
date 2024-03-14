import ImageWithText from "@/app/_components/image-text";
import { ArrowRight, Circle, Ungroup } from "lucide-react";
import Image from "next/image";
import EngagementModels from "./_components/engagement-models";
import BlueGrid from "@/app/_components/blue-info-grid";
import ProjectsCarousel from "@/app/components/projects-carousel";

const bodyData = [
  {
    title: "Turnkey Projects",
    body: [
      {
        desc: "One way to avail of our software engineering services is to explore our turnkey product development model, which is based on the time and materials (T&M) approach. Well exercise full control over the development process and deliver working software (or pieces thereof!) at regular intervals, freeing up your time for strategic work. Expert knowledge, extensive reporting, transparent pricing, and customer centricity guaranteed.",
      },
    ],
  },
  {
    title: "Dedicated Teams",
    body: [
      {
        desc: "CUB also provides end-to-end software product engineering services. Well dive into your project requirements, come up with a technology vision and estimates, assemble a winning team that will dedicate 100% of their time to your project, and deliver a software solution while keeping you informed and fully in charge of the development process.",
      },
    ],
  },
  {
    title: "IT staff Augmentation",
    body: [
      {
        desc: "Your in-house IT team lacks skilled Kotlin developers? Need a couple Node.js programmers to create dynamic dashboards for an industrial IoT solution? Or is it a virtual CTO that youre after? Our IT engineering services specialists will augment your team, adopt your methodologies and tools, and help you build quality products — on time, on budget, and up to spec.",
      },
    ],
  },
];

const textData = [
  {
    image: "/thinker.jpg",
    whiteText: "Software engineering",
    yellowText: "solutions in focus",
  },
  {
    image: "/hacker.jpg",
    whiteText: "Software engineering services delivered",
    yellowText: "how and when you need them",
  },
  {
    image: "/tech-office.jpg",
    whiteText: "Our software engineering",
    yellowText: "company at a glance",
  },
];

const infoData = [
  {
    icon: Ungroup,
    title: "Maturity:",
    desc: " on the market since 2021",
  },
  {
    icon: Ungroup,
    title: "Agility:",
    desc: " fast innovation at scale",
  },
  {
    icon: Ungroup,
    title: "Experience:",
    desc: " 100+ projects completed",
  },
  {
    icon: Ungroup,
    title: "Mastery:",
    desc: " full-stack software engineering capabilities",
  },
  {
    icon: Ungroup,
    title: "Flexibility:",
    desc: " 25+ IT specialists in five countries, lower risks thanks to the distributed team approach",
  },
  {
    icon: Ungroup,
    title: "Reliability:",
    desc: " customer satisfaction index (CSI) of 83%",
  },
  {
    icon: Ungroup,
    title: "Transparency:",
    desc: " effective development, project management, and reporting tools",
  },

  {
    icon: Ungroup,
    title: "Excellence:",
    desc: " ISO 9001:2015, ISO/IEC 27001 compliance; Microsoft and Google Cloud partnerships",
  },
];
const ServicesPage = () => {
  return (
    <div>
      <div className="content-container bg-[#030617] flex justify-between">
        <div className="py-20">
          <div className="flex justify-center flex-col max-w-lg">
            <h1 className="font-medium text-[70px] text-white tracking-[-2px] whitespace-pre-line max-w-lg leading-none">
              Software engineering services
            </h1>
            <h1 className="text-2xl xl mt-5 text-white leading-[-0.5px] tracking-wider ">
              Overhaul business processes, modernize existing technology
              systems, and bring innovative technology product to market with
              CUB — a software engineering company that cares
            </h1>
          </div>
          <button className="mt-12 bg-[#445aec] px-8 py-4 flex space-x-1">
            <p className="text-white font-medium text-xl tracking-[-.3px]">
              Discuss your software engineering needs
            </p>
            <ArrowRight height={30} width={15} />
          </button>
        </div>
        <Image src="/goblin.jpg" alt="Brain" height={766} width={766} />
      </div>
      <div className="block">
        <div className="content-container py-[60px]">
          <div>
            <h3 className="title-micro">
              Custom software engineering services that bring value from day one
            </h3>
            <div className="text-mini">
              We offer a whole gamut of software engineering and consulting
              services to help our clients create technology systems for
              enterprise resource planning, collaboration, customer management,
              data analysis, and process automation. You can turn to our
              software engineering firm for:
            </div>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="">
          <div className="landing-platforms">
            <div className="landing-platforms-items">
              <Circle />
              <div className="landing-platforms-title">
                Technology Consulting & Audits
              </div>
              <div className="landing-platforms-text">
                Technology consulting is the cornerstone of our software
                engineering services package. We&apos;ll assess your business
                requirements, review your existing IT infrastructure, propose a
                suitable tech, and create a proof of concept to assess the
                feasibility of your idea.
              </div>
            </div>
            <div className="landing-platforms-items">
              <Circle />
              <div className="landing-platforms-title">
                Software Development
              </div>
              <div className="landing-platforms-text">
                Whether you need a mobile app with a powerful cloud back end, a
                dynamic web app, embedded software for a Smart Home device, or
                an advanced analytics platform to crunch your Big Data, our
                software engineering company is here at your service!
              </div>
            </div>
            <div className="landing-platforms-items">
              <Circle />
              <div className="landing-platforms-title">
                Solution Architecture
              </div>
              <div className="landing-platforms-text">
                Drawing on the insights uncovered during the project discovery
                phase, our software architects join forces with skilled business
                analysts to design a resilient software architecture that will
                scale flexibly along with your business and leave room for
                innovation.
              </div>
            </div>
            <div className="landing-platforms-items">
              <Circle />
              <div className="landing-platforms-title">
                Application Modernization
              </div>
              <div className="landing-platforms-text">
                Besides custom software engineering, we migrate legacy
                applications to a modern tech stack, segment bulky software into
                microservices, orchestrate containerized apps with Kubernetes,
                and interconnect the components of your IT infrastructure
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="">
          <div className="landing-platforms">
            <div className="landing-platforms-items">
              <Circle />
              <div className="landing-platforms-title">
                Deployment & Maintenance
              </div>
              <div className="landing-platforms-text">
                The CUB software engineering service team will follow DevOps
                best practices to set up a complete cloud infrastructure for
                your software solution, ensure faster updates, and monitor
                application performance. We offer three tiers of support, too.
              </div>
            </div>
            <div className="landing-platforms-items">
              <Circle />
              <div className="landing-platforms-title">UI/UX Design</div>
              <div className="landing-platforms-text">
                From auditing your customers&apos; buying journey to applying
                data democratization principles in data analytics dashboard
                design, our software engineering company always creates
                navigation logic and interfaces that allow users to perform
                intended actions with minimal friction.
              </div>
            </div>
            <div className="landing-platforms-items">
              <Circle />
              <div className="landing-platforms-title">Quality Assurance</div>
              <div className="landing-platforms-text">
                As part of our software product engineering services, we turn to
                manual testing and write scripts for automated tests to validate
                that your applications contain zero bugs, perform as expected,
                and deliver unsurpassed user experience
              </div>
            </div>
            <div className="landing-platforms-items">
              <Circle />
              <div className="landing-platforms-title">Product Innovation</div>
              <div className="landing-platforms-text">
                We provide innovative software engineering services to tech
                startups and enterprises undergoing digital transformation. If
                you&apos;re looking to add RPA bots to your accounting software
                or build an IoT-powered fitness mirror from the ground up, just
                drop us a line!
              </div>
            </div>
          </div>
          <button className="button space-hmt">
            Discuss your software engineering needs
          </button>
        </div>
      </div>
      <ImageWithText imageTextData={textData[0]} />
      <div className="block-yellow content-container py-[60px]">
        <p className="landing-subheader__text_small">
          Our software engineering company collaborates with businesses from the
          healthcare, finance, education, retail, supply chain management, and
          other verticals. We help our clients test the novel technology waters,
          scale IT systems company wide, and ensure faster paybacks. Our core
          software engineering solutions expertise spans:
        </p>
      </div>
      <div className="block pt-20">
        <div className="">
          <div className="landing-platforms">
            <div className="landing-platforms-items">
              <Circle />
              <div className="landing-platforms-title">
                Enterprise Technology
              </div>
              <div className="landing-platforms-text">
                The CUB software product engineering firm is well-versed in
                enterprise IT technologies. ERP systems, CRM and help desk
                solutions, document and learning management systems, HRM and
                project management software, accounting and eProcurement tools —
                you can find it all in our portfolio.
              </div>
            </div>
            <div className="landing-platforms-items">
              <Circle />
              <div className="landing-platforms-title">
                Artificial Intelligence
              </div>
              <div className="landing-platforms-text">
                We take pride in our AI expertise and offer a wide range of
                innovative software engineering services to supercharge your
                technology systems. Partner with CUB to develop apps with
                computer vision capabilities, train highly accurate machine
                learning models, and reduce bias in custom AI deployments.
              </div>
            </div>
            <div className="landing-platforms-items">
              <Circle />
              <div className="landing-platforms-title">Automation</div>
              <div className="landing-platforms-text">
                Rule-based business process automation tools, lightweight RPA
                bots interacting with application interfaces, and AI algorithms
                automating processes based on historical and real-time data —
                we&apos;ve been there, done that. Tap into our software
                engineering services to boost employee productivity and cut
                operational costs!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="">
          <div className="landing-platforms">
            <div className="landing-platforms-items">
              <Circle />
              <div className="landing-platforms-title">Big Data Analytics</div>
              <div className="landing-platforms-text">
                CUB is a software engineering company with a strong background
                in data science. Do you need help customizing SaaS business
                intelligence (BI) products to best suit your analytics? Are you
                struggling to interpret unstructured data or ensure an
                uninterrupted flow of information across your IT infrastructure?
                Whatever your objectives are, we&apos;ve got you covered!
              </div>
            </div>
            <div className="landing-platforms-items">
              <Circle />
              <div className="landing-platforms-title">
                Internet of Everything
              </div>
              <div className="landing-platforms-text">
                To help you further boost your data analytics and automation
                efforts, we transform your assets, equipment, and even personnel
                into a wealth of data. For this, we design and implement smart
                sensors, embedded systems, cloud-based data storage and
                processing solutions, and rich user interfaces, which range from
                mobile apps to built-in voice assistants.
              </div>
            </div>
            <div className="landing-platforms-items">
              <Circle />
              <div className="landing-platforms-title">Metaverses</div>
              <div className="landing-platforms-text">
                We draw on our extended reality and blockchain development
                expertise to create metaverse apps of all sizes and levels of
                complexity. Whether you need an augmented reality app with
                Snapchat-like filters or a marketplace to trade NFTs, we&apos;re
                the right software engineering firm to undertake your project!
              </div>
            </div>
          </div>
          <button className="button space-hmt">
            Get a faster return on tech investments
          </button>
        </div>
      </div>
      <ImageWithText imageTextData={textData[1]} />
      <div className="block-yellow content-container py-[60px]">
        <p className="landing-subheader__text_small">
          As an IT firm that went all the way from a software engineering
          outsourcing company to a technology vendor with niche expertise, CUB
          offers flexible engagement models to meet your requirements:
        </p>
      </div>
      <EngagementModels bodyData={bodyData} />
      <ImageWithText imageTextData={textData[2]} />
      <BlueGrid infoData={infoData} />
      <ProjectsCarousel
        title="How customers benefit from our software engineering services"
        showButton={true}
        buttonText="Tap into our software engineering services"
      />
    </div>
  );
};

export default ServicesPage;
