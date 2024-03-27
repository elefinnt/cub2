"use client";

import { CircleFadingPlus } from "lucide-react";
import MethodologyTabs from "../about/_components/method-tabs";
import { useState } from "react";
import EngagementCard from "./_components/engagement-card";

const cardData = [
  {
    title: "Time & Materials",
    description:
      "Under the Time & Materials model, we can build your software product either in a linear sequence of stages or in increments through constant communication with you. You pay only for actual work done on daily or hourly rates per specialist",
    subDesc: [
      {
        body: "This model is the right way to go when you dont have precise software requirements and the exact project scope is hard to define or is likely to evolve",
      },
      {
        body: "We develop your product in increments. You see the deliverables early and provide feedback, keeping the development process under control",
      },
      {
        body: "You get regular reports from our project manager to track project budget and progress",
      },
      {
        body: "Kickoff is then really fast: we define a high-level scope, agree on daily or hourly rates, and get started",
      },
      {
        body: "Along the way, you can change anything, from the list of planned features to skill sets on the team, to align with changing market trends or business needs",
      },
      {
        body: "You can measure product effectiveness early and pivot or suspend the project at any time, if needed, avoiding further expenses",
      },
    ],
  },
  {
    title: "Fixed Price",
    description:
      "With this model, we build your software product for a price fixed upfront for the entire project. This often involves planning and estimating the entire project scope before development starts.",
    subDesc: [
      {
        body: "This model is mostly suitable for projects with a well-specified scope and clear requirements that arent going to change",
      },
      {
        body: "All of us get a clear understanding of what exactly the end product and deliverables should be",
      },
      {
        body: "This model requires little to zero involvement from your side after the requirements elicitation and planning stage",
      },
      {
        body: "Together with your team, we begin with gathering requirements and planning thoroughly the project scope and time for product delivery",
      },
      {
        body: "We agree on the total price of the project and start development based on the documented scope, reporting the progress regularly",
      },
      {
        body: "During the development process, you may introduce changes but only through a formal change request process that will require amendments to the contracte",
      },
    ],
  },
  {
    title: "Dedicated Team",
    description:
      "Alternatively, you can simply hire our highly skilled engineers to fill in specific in-house skill gaps, or go for a full-fledged dedicated and self-managed team. You get professionals that integrate seamlessly into your environment, bring in a fresh angle and ideas, and deliver top results with in-house-like dedication.",
    subDesc: [
      {
        body: "This model is applicable when you need either extra engineering talent to boost your team or full-cycle services, from development to support",
      },
      {
        body: "We offer a 30-day trial period for each specialist",
      },
      {
        body: "You have full control over the team, budget and development process",
      },
      {
        body: "We agree on a monthly cost per specialist or team at the beginning of the projec",
      },
      {
        body: "We can replace any team member based on your feedback or requirements update",
      },
      {
        body: "You are free to scale the team up or down at any moment",
      },
    ],
  },
];

const How = () => {
  return (
    <div>
      <div className="section-1-wrap">
        <div className="section-1">
          <h1 className="section-1-title">How we can work with you</h1>
          <div className="section-1-bottom">
            <div className="section-1-bottom-text">
              <div className="section-1-text">
                Team up with CUB at any stage of your project, choosing the
                engagement model that fits best your project scope and business
                priorities.
              </div>
              <div className="section-1-text">
                We can build your product on the Time & Materials, Fixed Price,
                or Dedicated Team basis using agile or waterfall depending on
                your project specifics.
              </div>
            </div>
            <button className="content-button">Get a free consultation!</button>
          </div>
        </div>
      </div>
      <div className="section-2-wrap">
        <div className="section-2">
          <div className="section-2-top">
            <div className="section-2-title">
              Software development methodologies
            </div>
            <div className="section-2-text">
              Having completed hundreds of successful projects, we will help you
              figure out what approach works best for the development of your
              software product, and assemble a powerful team to deliver the
              desired results.
            </div>
          </div>
          <div className="section-2-tabs">
            <MethodologyTabs />
          </div>
        </div>
      </div>
      <div className="section-3-wrap">
        <div className="section-3">
          <div className="section-3-title">Our engagement models</div>
          <div className="section-3-text">
            When selecting an optimum engagement model for our clients, we
            discuss a lot of details, from their primary business objective and
            project scope to the level of flexibility and control they require.
            Our aim is to come up with a solution that balances cost efficiency,
            performance, and flexibility best.
          </div>
          {/* Under here to be mapped? */}
          <div className="section-3-tabs">
            <EngagementCard cardData={cardData} />
          </div>
          <button className="content-button">Contact Us</button>
        </div>
      </div>
      <div className="section-4-wrap">
        <div className="section-4">
          <div className="section-4-title">Comparison of engagement models</div>
          <div className="section-4-table-wrap">
            <div className="section-4-table-row">
              <div>Features</div>
              <div>Fixed Price</div>
              <div>Times & Materials</div>
              <div>Dedicated Team</div>
            </div>
            <div className="section-4-table-row">
              <div>Project Size</div>
              <div>any </div>
              <div>any </div>
              <div>any </div>
            </div>
            <div className="section-4-table-row">
              <div>Requirements</div>
              <div>fixed</div>
              <div>evolving</div>
              <div>evolving</div>
            </div>
            <div className="section-4-table-row">
              <div>Scope Flexibility</div>
              <div>limited flexibility</div>
              <div>flexible</div>
              <div>flexible</div>
            </div>
            <div className="section-4-table-row">
              <div>Budget Predictability</div>
              <div>highest</div>
              <div>pay as you go</div>
              <div>fixed team cost</div>
            </div>
            <div className="section-4-table-row">
              <div>Timelines</div>
              <div>fixed</div>
              <div>flexible</div>
              <div>flexible</div>
            </div>
            <div className="section-4-table-row">
              <div>Client&apos;s Involvement</div>
              <div>minimal</div>
              <div>regular</div>
              <div>constant</div>
            </div>
          </div>
          <button className="content-button">Get a free consultation!</button>
        </div>
      </div>
    </div>
  );
};

export default How;
