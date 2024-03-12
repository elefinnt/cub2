import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AboutAccordion() {
  return (
    <div>
      <Accordion
        type="single"
        collapsible
        className="text-black mt-[120px] w-full"
      >
        <AccordionItem value="1" className="">
          <AccordionTrigger className="my-6 font-semibold text-[46px]">
            Full-cycle services
          </AccordionTrigger>
          <AccordionContent>
            From strategic consulting to custom enterprise software, legacy
            system modernization, cloud migration, and DevOps, our talented
            teams deliver smashing solutions, putting your business priorities
            at the center of everything.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="2">
          <AccordionTrigger className="my-6 font-semibold text-[46px]">
            Top expertise
          </AccordionTrigger>
          <AccordionContent>
            We stay at the forefront of the current and emerging technologies,
            delivering expertly crafted disruption in domains like AI/ML, Big
            Data, Extended Reality, and Cloud.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="3">
          <AccordionTrigger className="my-6 font-semibold text-[46px]">
            Quality management
          </AccordionTrigger>
          <AccordionContent>
            We are big fans of continuous improvement and tools that allow us to
            scale and meet the highest quality requirements in software
            engineering. This comes with our equally strong focus on information
            security and regulatory compliance.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="4">
          <AccordionTrigger className="my-6 font-semibold text-[46px]">
            Agility
          </AccordionTrigger>
          <AccordionContent>
            We live and breathe agile principles. They give us the speed to
            deliver value to your company whatever the challenge and adapt to
            your changing business needs and user requirements along the way.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="5">
          <AccordionTrigger className="my-6 font-semibold text-[46px]">
            Innovation
          </AccordionTrigger>
          <AccordionContent>
            At our R&D labs, we research and incubate new technological concepts
            around your business challenges to build prototypes based on
            meaningful insights. This way we make sure you get a winning product
            that brings you on top of the competition.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="6">
          <AccordionTrigger className="my-6 font-semibold text-[46px]">
            Utmost flexibility
          </AccordionTrigger>
          <AccordionContent>
            Whether you need first-rate talent to fill in skill gaps or take up
            your project at any stage, you are in the right place. Start with
            any number of FTEs and extend the team with extra professionals at
            any moment.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
