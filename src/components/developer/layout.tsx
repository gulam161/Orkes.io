import React from "react";
import { Link } from "react-router-dom";
import Docs from "../../assets/Docs.svg";
import Blog from "../../assets/Blog.svg";
import { GoVideo } from "react-icons/go";
import { BsCalendar4Event } from "react-icons/bs";
import { FaSlack, FaGithub } from "react-icons/fa";

const layoutItems = [
  {
    category: "Learn",
    items: [
      { id: 1, to: "https://orkes.io/content", text: "Docs", imgSrc: Docs },
      { id: 2, to: "https://orkes.io/blog/", text: "Blogs", imgSrc: Blog },
      {
        id: 3,
        to: "https://www.youtube.com/@orkesio",
        text: "Videos",
        Icon: GoVideo,
      },
    ],
  },
  {
    category: "Community",
    items: [
      {
        id: 4,
        to: "https://orkes-conductor.slack.com/join/shared_invite/zt-2hmxn0i3n-_W~a9rWMbvMoYmlJo3Y15g#/shared-invite/email",
        text: "Slack",
        Icon: FaSlack,
      },
      {
        id: 5,
        to: "https://orkes.io/events/",
        text: "Events",
        Icon: BsCalendar4Event,
      },
      {
        id: 6,
        to: "https://github.com/conductor-oss/conductor",
        text: "GitHub",
        Icon: FaGithub,
      },
    ],
  },
];

const Layout = () => (
  <>
    <div className="bg-[#8057ff] w-5 h-5 ml-6 absolute top-0 transform origin-center rotate-45  max-lg:relative max-lg:mt-[-4px] max-lg:mb-[-16px]"></div>
    <div className="w-auto h-auto p-6 flex max-sm:flex-col gap-8 bg-gray-50 text-gray-500 border-t-[3px] border-[#8057ff] rounded-b-xl shadow-md absolute max-lg:relative max-lg:w-full max-lg:rounded-b-none max-lg:shadow-sm">
      {layoutItems.map(({ category, items }) => (
        <div key={category} className="w-36 pt-3 max-lg:w-full">
          <h1 className="uppercase font-medium text-sm text-black/70 mb-3">
            {category}
          </h1>
          {items.map(({ id, to, text, imgSrc, Icon }, index) => (
            <Link
              to={to}
              key={id}
              className={`flex items-start gap-2 hover:bg-gray-200/80 ${
                index === 2 ? "border-none" : "border-b border-gray-300"
              } p-3`}
            >
              {Icon ? (
                <Icon size={22} />
              ) : (
                <img src={imgSrc} alt={`${text} Icon`} width={28} />
              )}
              <h2 className="font-light text-gray-700 mb-1">{text}</h2>
            </Link>
          ))}
        </div>
      ))}
      <div className="pl-6 pt-3 border-l border-gray-300 max-lg:border-l-0 max-sm:pt-0">
        <h1 className="mb-1">Free Playground</h1>
        <Link to="" className="button border-[#ed5668] px-8 mt-3 inline-block">
          Sign Up
        </Link>
      </div>
    </div>
  </>
);

export default Layout;
