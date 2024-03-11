import ContactForm from "./contact-form";
import Headstone from "./headstone";

const Footer = () => {
  // todo: this cant be global component as information will change - figrue this out

  return (
    <div>
      <ContactForm />
      <Headstone />
    </div>
  );
};

export default Footer;
