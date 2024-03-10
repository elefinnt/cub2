import { ClientCarousel } from "./client-carousel";
import ContactForm from "./contact-form";
import Headstone from "./headstone";
import ProjectsCarousel from "./projects-carousel";
import ReferencePresentation from "./reference-presentation";

const Footer = () => {
  // todo: this cant be global component as information will change - figrue this out

  return (
    <div>
      <ProjectsCarousel />
      <ClientCarousel />
      <ReferencePresentation />
      <ContactForm />
      <Headstone />
    </div>
  );
};

export default Footer;
