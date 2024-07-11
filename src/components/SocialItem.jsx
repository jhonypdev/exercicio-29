const SocialItem = ({ icon, link }) => {
  return (
    <li className="inline-block mr-2">
      <a
        href={link}
        className="text-[#51545f] transition-all p-2 hover:text-[#fe4c50]"
      >
        {icon}
      </a>
    </li>
  );
};

export default SocialItem;
