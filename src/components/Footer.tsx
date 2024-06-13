import React from "react";
import OrkesLogo from "../assets/Logo/orkes-logo.svg";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaYoutube,
  FaSlack,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-Icons/fa";
import { FaXTwitter } from "react-Icons/fa6";
import { TbBrandGithubFilled } from "react-Icons/tb";

const aboutSections = [
  {
    title: "Company",
    links: ["Platform", "Opportunities", "Partners", "About Us"],
  },
  { title: "Product", links: ["Cloud", "Platform", "Support"] },
  { title: "Community", links: ["Docs", "Blogs", "Events"] },
  {
    title: "Use Cases",
    links: [
      "Microservices and API Orchestration",
      "Event Driven Architecture",
      "AI and LLM Chaining",
      "Human Workflow Orchestration",
    ],
  },
  {
    title: "Policies",
    links: [
      "Terms and Conditions",
      "Privacy Policy",
      "Your California Privacy Rights",
      "Legal Hub",
      "Security",
    ],
  },
];

const socialMediaIcons = [
  {
    Icon: FaXTwitter,
    link: "https://x.com/orkesio",
  },
  {
    Icon: FaLinkedinIn,
    link: "https://www.linkedin.com/company/orkes-inc/",
  },
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
  {
    Icon: FaFacebookF,
    link: "https://www.facebook.com/orkes.io",
  },
  {
    Icon: FaInstagram,
    link: "https://www.instagram.com/orkes.io/",
  },
  {
    Icon: FaTiktok,
    link: "https://www.tiktok.com/@orkes.io",
  },
];

const Footer: React.FC = () => {
  return (
    <section className="text-gray-600">
      <div className="flex gap-8">
        <div>
          <img src={OrkesLogo} alt="Orkes Logo" width={120} />
        </div>

        {aboutSections.map((section, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            <h2 className="font-medium">{section.title}</h2>
            {section.links.map((link, index) => (
              <Link
                key={index}
                to=""
                className="text-sm font-light hover:ml-[1px] hover:underline"
              >
                {link}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="h-[1px] my-5 background_image_color"></div>
      <div className="flex justify-between">
        <div className="flex gap-5 mb-4">
          {socialMediaIcons.map(({ link, Icon }, index) => (
            <Link
              key={index}
              to={link}
              className="rounded-full bg-gray-600 text-white p-[6px]"
            >
              <Icon size={25} />
            </Link>
          ))}
        </div>
        <div className="font-light text-sm">
          © 2024 Orkes. All Rights Reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
