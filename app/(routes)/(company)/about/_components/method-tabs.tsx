import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MethodologyTabs = () => {
  return (
    <div>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="section-2-tabs-title">
          <TabsTrigger value="agile" className="section-2-tabs-btn">
            Agile
          </TabsTrigger>
          <TabsTrigger value="waterfall" className="section-2-tabs-btn">
            Waterfall
          </TabsTrigger>
        </TabsList>
        <div className="section-2-tabs-wrapper">
          <TabsContent value="agile" className="section-2-tabs-content">
            The Agile approach centers around a continuously evolving project
            scope and iterative development where the team delivers a work
            product — a new feature or meaningful improvement — at the end of
            every iteration. This approach allows you to start quickly and make
            decisions in action based on instant feedback.
          </TabsContent>
          <TabsContent value="agile" className="">
            <div className="section-2-tabs-list-title">
              Agile is your go-to methodology when:
            </div>
            <div className="section-2-tabs-list-item">
              Your end-product vision is likely to evolve in the course of
              development
            </div>
            <div className="section-2-tabs-list-item">
              It&apos;s difficult to detail all the requirements at the project
              onset, for instance, because of its complexity
            </div>
            <div className="section-2-tabs-list-item">
              The success of your product is strongly dependant on user feedback
            </div>
            <div className="section-2-tabs-list-item">
              It&apos;s critical to direct the team&apos;s energy straight off
              toward development, skipping a lengthy planning stage, to bring
              your product to market quickly
            </div>
          </TabsContent>
        </div>
        <div className="section-2-tabs-wrapper">
          <TabsContent value="waterfall" className="section-2-tabs-content">
            In the waterfall model, your entire project, including phases,
            tasks, and dependencies, is mapped out before development. This
            means thoroughly planning and documenting all processes, timelines,
            deliverables, resources, and costs beforehand. At the end of the
            day, you get less flexibility but a greater level of predictability.
          </TabsContent>
          <TabsContent value="waterfall" className="">
            <div className="section-2-tabs-list-title">
              The waterfall methodology is best when
            </div>
            <div className="section-2-tabs-list-item">
              Your end vision and stakeholders&apos; needs are well defined and
              are not going to change
            </div>
            <div className="section-2-tabs-list-item">
              It is possible to fix all the requirements upfront
            </div>
            <div className="section-2-tabs-list-item">
              Your product requires multiple integrations with external systems,
              including in the process of development
            </div>
            <div className="section-2-tabs-list-item">
              You need to comply with more extensive project tracking or
              documentation requirements
            </div>
          </TabsContent>
        </div>
        <button className="content-button">Get a free consultation!</button>
      </Tabs>
    </div>
  );
};

export default MethodologyTabs;
