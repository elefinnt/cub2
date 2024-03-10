import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function SolutionsAccordion() {
  return (
    <div className="content-container py-[60px]">
      <Accordion type="single" collapsible className="max-w-[660px] ">
        <AccordionItem value="item-1">
          <AccordionTrigger className="">
            1. How can my company benefit from AI consulting?
          </AccordionTrigger>
          <AccordionContent className="accordion-description">
            By leveraging artificial intelligence consulting services, your
            company can optimize operational efficiencies through process
            automation and predictive analytics. In addition, AI consultants
            will assist you with strategic planning and risk management, as well
            as propose AI solutions capable of creating new business models,
            products, and services. Finally, an AI consultancy will suggest ways
            to improve customer experiences by providing personalized services,
            recommendations, and support, resulting in increased customer
            satisfaction and loyalty.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2 accordion-title">
          <AccordionTrigger className="accordion-title-text">
            2. Does artificial intelligence consulting produce any deliverables?
          </AccordionTrigger>
          <AccordionContent className="accordion-description">
            AI consulting typically results in a variety of deliverables,
            depending on the scope and goals of the consultation. These may
            include: - Reports on your company&apos;s current capabilities and
            readiness for AI implementation - Detailed plans outlining steps,
            timelines, and resources required for AI adoption - Analysis of
            potential AI projects, including technical feasibility and expected
            ROI - Prototypes that demonstrate how AI solutions can work within
            your organization - Guidelines for managing, securing, and
            leveraging your data effectively for AI applications
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3 accordion-title">
          <AccordionTrigger className="accordion-title-text">
            3. What should I keep in mind when choosing an AI consulting partner
            for my company?
          </AccordionTrigger>
          <AccordionContent className="accordion-description">
            Selecting the right artificial intelligence consulting partner is
            crucial. Consider the following factors: - Look for a partner with a
            proven track record in AI consulting and projects, particularly
            within your industry - Ensure their AI consulting approach aligns
            with your company&apos;s goals and they have a clear methodology for
            assessing needs and implementing solutions - The AI consulting
            company should be technology-agnostic, offering solutions that best
            fit your specific needs rather than pushing one-size-fits-all tools
            - Your AI consultants should be able to seamlessly integrate with
            your team, understand your company&apos;s culture, and work
            collaboratively towards shared goals
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4 accordion-title">
          <AccordionTrigger className="accordion-title-text">
            4. How much does it cost to implement AI and generative AI in
            business?
          </AccordionTrigger>
          <AccordionContent className="accordion-description">
            The cost of using AI and generative AI in your business can vary
            greatly depending on the project&apos;s complexity, the specific AI
            technologies used, and the scope of implementation. The costs can
            range from tens of thousands to several million dollars, which
            includes development, data preparation, training, and integration.
            The following articles provide a detailed breakdown of the factors
            that influence AI project costs and how to calculate them: - For an
            overview of artificial intelligence costs: How Much Does Artificial
            Intelligence Cost? - For insight into the costs of generative AI:
            Calculating the Cost of Generative AI. These resources can help you
            estimate the cost of implementing AI and generative AI solutions in
            your business before looking into AI consulting services.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
