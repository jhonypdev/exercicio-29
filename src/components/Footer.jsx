import { Container } from "react-bootstrap";
import FooterNav from "./FooterNav";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <div className="w-full mt-12 h-auto bg-[#f3f3f3] py-4">
      <Container className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex items-center justify-between md:flex-row flex-col">
          <FooterNav />

          <FooterSocial />
        </div>
        <div className="">
          <div className="text-sm text-[#51545f] transition-all">
            ©2023 All Rights Reserved. This template is made by
            <a className="text-[#fe4c50]" href="https://github.com/Jhonypd">
              Jhony Pereira
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
