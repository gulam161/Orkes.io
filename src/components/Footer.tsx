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
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";

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
    link: "/",
  },
  {
    Icon: FaLinkedinIn,
    link: "/",
  },
  {
    Icon: FaYoutube,
    link: "/",
  },
  {
    Icon: FaSlack,
    link: "/",
  },
  {
    Icon: TbBrandGithubFilled,
    link: "/",
  },
  {
    Icon: FaFacebookF,
    link: "/",
  },
  {
    Icon: FaInstagram,
    link: "/",
  },
  {
    Icon: FaTiktok,
    link: "/",
  },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <section className="text-gray-600">
      <div className="flex gap-8 max-lg:grid max-lg:grid-cols-4 max-md:grid-cols-3">
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
      <div className="flex justify-between max-lg:flex-col max-sm:items-center">
        <div className="flex gap-5 mb-4 flex-wrap">
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
          © {year} Orkes. All Rights Reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
