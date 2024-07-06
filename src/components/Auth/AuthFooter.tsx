import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaYoutube, FaSlack } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";

const socialMediaIcons = [
  { Icon: FaXTwitter, link: "https://x.com/orkesio" },
  { Icon: FaLinkedinIn, link: "https://www.linkedin.com/company/orkes-inc/" },
  {
    Icon: FaYoutube,
    link: "https://www.youtube.com/channel/UCI7sk4DD6F6r9CWg9gHRlVg",
  },
  {
    Icon: FaSlack,
    link: "https://orkes-conductor.slack.com/join/shared_invite/zt-2hmxn0i3n-_W~a9rWMbvMoYmlJo3Y15g#/shared-invite/email",
  },
  {
    Icon: TbBrandGithubFilled,
    link: "https://github.com/conductor-oss/conductor",
  },
];

const AuthFooter: React.FC = () => {
  return (
    <div className="px-8">
      <div className="w-full h-0.5 my-3 background_image_color"></div>
      <div className="flex justify-between px-2 max-sm:flex-col max-sm:items-center">
        <div className="flex gap-4 mb-4 flex-wrap">
          {socialMediaIcons.map(({ link, Icon }, index) => (
            <Link
              key={index}
              to={link}
              className="rounded-full bg-gray-500 text-white p-1"
            >
              <Icon size={18} />
            </Link>
          ))}
        </div>
        <p className="font-light text-sm max-sm:mb-4">
          © 2024 Orkes. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
export default AuthFooter;
