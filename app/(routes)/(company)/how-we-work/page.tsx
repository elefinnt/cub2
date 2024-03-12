import { CircleFadingPlus } from "lucide-react";
import MethodologyTabs from "../about/_components/method-tabs";

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
            <div className="section-2-tabs-content"></div>
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
          <div className="section-3-tabs">
            <div className="section-3-tab">
              <div className="section-3-tab-title">Time & Materials</div>
              <div className="section-3-text-wrap">
                <div className="section-3-tab-text">
                  {" "}
                  Under the Time & Materials model, we can build your software
                  product either in a linear sequence of stages or in increments
                  through constant communication with you. You pay only for
                  actual work done on daily or hourly rates per specialist.{" "}
                </div>
                <div className="section-3-show-more">
                  <span>Show More</span>
                  <CircleFadingPlus className="show-more-icon" />
                </div>
              </div>
              <div className="section-3-text-wrap"></div>
            </div>
            <div className="section-3-tab">
              <div className="section-3-tab-title">Fixed Price</div>
              <div className="section-3-text-wrap">
                <div className="section-3-tab-text">
                  With this model, we build your software product for a price
                  fixed upfront for the entire project. This often involves
                  planning and estimating the entire project scope before
                  development starts.
                </div>
                <div className="section-3-show-more">
                  <span>Show More</span>
                  <CircleFadingPlus className="show-more-icon" />
                </div>
              </div>
              <div className="section-3-text-wrap"></div>
            </div>
            <div className="section-3-tab">
              <div className="section-3-tab-title">Dedicated Team</div>
              <div className="section-3-text-wrap">
                <div className="section-3-tab-text">
                  Alternatively, you can simply hire our highly skilled
                  engineers to fill in specific in-house skill gaps, or go for a
                  full-fledged dedicated and self-managed team. You get
                  professionals that integrate seamlessly into your environment,
                  bring in a fresh angle and ideas, and deliver top results with
                  in-house-like dedication.
                </div>
                <div className="section-3-show-more">
                  <span>Show More</span>
                  <CircleFadingPlus className="show-more-icon" />
                </div>
              </div>
              <div className="section-3-text-wrap"></div>
            </div>
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
