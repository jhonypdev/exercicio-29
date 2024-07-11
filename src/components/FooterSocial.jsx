import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import SocialItem from "./SocialItem";

const FooterSocial = ({}) => (
  <div className="h-32 flex items-center md:justify-end justify-center">
    <ul>
      <SocialItem icon={<FaFacebook />} />
      <SocialItem icon={<FaTwitter />} />
      <SocialItem icon={<FaInstagram />} />
      <SocialItem icon={<FaLinkedin />} />
      <SocialItem icon={<FaYoutube />} />
    </ul>
  </div>
);

export default FooterSocial;
