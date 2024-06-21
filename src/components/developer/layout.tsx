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
    <div className="bg-[#8057ff] w-5 h-5 ml-6 absolute top-0 transform origin-center rotate-45"></div>
    <div className="w-auto h-auto p-5 flex gap-8 bg-gray-50 text-gray-500 border-t-[3px] border-[#8057ff] rounded-b-xl shadow-md absolute">
      {layoutItems.map(({ category, items }) => (
        <div key={category}>
          <h1 className="uppercase font-medium text-sm text-black/70 py-2 mb-1">
            {category}
          </h1>
          {items.map(({ id, to, text, imgSrc, Icon }) => (
            <Link
              to={to}
              key={id}
              className="flex items-start gap-2 border-b border-gray-300 py-3 w-36"
            >
              {Icon ? (
                <Icon size={22} />
              ) : (
                <img src={imgSrc} alt={`${text} Icon`} width={25} />
              )}
              <h2 className="font-light text-gray-700 mb-1">{text}</h2>
            </Link>
          ))}
        </div>
      ))}
      <div className="bg-gray-200 w-[1px]"></div>
      <div>
        <h1 className="py-2 mb-1">Free Playground</h1>
        <Link to="" className="button border-[#ed5668] px-8 mt-5 inline-block">
          Sign Up
        </Link>
      </div>
    </div>
  </>
);

export default Layout;
