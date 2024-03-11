import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

const Headstone = () => {
  return (
    <div className=" bg-black">
      <div className="headstone-wrap">
        <div className="headstone-first">
          <div className="headstone-logo">
            <Image src="/logo.png" height={42} width={109} alt="logo" />
          </div>
          <div className="headstone-title">
            CUB offers expert AI consulting services that generate actionable
            recommendations and propel businesses forward
          </div>
        </div>
        <div className="headstone-first">
          <div className="headstone-second-left">
            <ul className="headstone-second-left-text">
              <li>Offices:</li>
              <div className="opacity-50">
                <li>Auckland, NZ</li>
                <li>Melbourne, AU</li>
                <li>London, UK</li>
              </div>
            </ul>
          </div>
          <div className="headstone-second-right">
            <div>
              <a
                className="headstone-second-right-text"
                href="mailto:info@cubdigital.co.nz"
              >
                info@cubdigital.co.nz
              </a>
              <a
                className="headstone-second-right-text"
                href="tel+642102399246"
              >
                +6421-366-682
              </a>
            </div>
            <div className="headstone-second-right-social">
              <a href="https://www.facebook.com/cubdigitalnz/" target="_blank">
                <Facebook className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/cubdigitalnz/"
                target="_blank"
              >
                <Linkedin className="text-white" />
              </a>
              <a href="https://www.instagram.com/cubdigitalnz/" target="_blank">
                <Instagram className="text-white" />
              </a>
              <a></a>
              <a></a>
            </div>
          </div>
        </div>
        <div className="headstone-third text-white">
          <div className="headstone-third-policy">
            {/* policy links here */}
            <a href="/">Privacy Policy</a>
            <div>©2024 CUB Digital</div>
          </div>
          <div className="headstone-third-cert gap-4">
            <a>
              <Image
                src="/oly-2020.png"
                alt="Olympics 2020"
                width={152}
                height={122}
              />
            </a>
            <a>
              <Image
                src="/HPNZ-LOGO.png"
                alt="High Performance Sports NZ"
                width={152}
                height={122}
              />
            </a>
            <a>
              <Image
                src="/paris-2024.png"
                alt="Olympics 2024"
                width={152}
                height={122}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headstone;
