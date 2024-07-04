import React from "react";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import login_page from "../../assets/login-page.jpg";
import Orkes_Logo from "../../assets/Logo/orkes-logo.svg";
import Login_Background from "../../assets/login-background.png";
import { FaLinkedinIn, FaYoutube, FaSlack } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";

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
];

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  return (
    <section className="bg-white mt-1">
      <div className="flex flex-col items-center">
        <img src={Orkes_Logo} alt="Orkes Logo" width={240} className="my-6" />
        <h1 className="text-4xl font-medium text-center">
          Orkes Cloud Platform
        </h1>
      </div>
      <div
        className="relative w-full h-[40vh] bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${Login_Background})`,
        }}
      >
        <div className="w-full flex justify-around mt-10 mb-12 max-sm:px-8 mb-">
          <div className="w-[420px] mt-8">
            <div className="flex flex-col gap-6  max-w-[415px] px-16 max-sm:px-7 max-sm:pb-8 bg-stone-50 min-h-[460px] rounded-2xl border text-center shadow-sm dark:border dark:bg-gray-800 dark:border-gray-700">
              <h1 className="text-3xl font-light leading-tight tracking-tight text-gray-900 pt-9">
                Welcome back!
              </h1>
              <h2 className="text-2xl font-bold my-5">Login</h2>
              <div className="flex flex-col gap-4 items-center">
                <button className="flex gap-2 border-2 border-[#1976d2] py-2 rounded-full items-center px-4 mb-1">
                  <FaGoogle size={22} />
                  <p>Contiue With Google</p>
                </button>
                <button className="flex gap-2 border-2 border-[#1976d2] py-2 rounded-full items-center px-4 mb-1 ">
                  <MdOutlineMailOutline size={22} />
                  <p>Contiue With Email</p>
                </button>
              </div>
              <div className="flex_between_center mt-4">
                <div className="flex-1 h-[1px] bg-gray-200"></div>
                <div className="mx-2 font-light text-gray-600">Or</div>
                <div className="flex-1 h-[1px] bg-gray-200"></div>
              </div>

              <p className="font-light dark:text-gray-400 ">
                Don’t have an account yet?{" "}
                <Link
                  to="/sign-up"
                  className="font-medium text-blue-400 text-primary-600 hover:text-blue-500 dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </div>
            <p className="text-[10px] text-center mt-4">
              By providing your email address or using a single sign-on provider
              to create an account or login, you agree to our{" "}
              <Link to="/" className="text-blue-500 font-medium">
                Terms of Service
              </Link>
              and that you have reviewed our{" "}
              <Link to="/" className="text-blue-500 font-medium">
                Privacy Policy
              </Link>{" "}
              and Legal Notices{" "}
              <Link to="/" className="text-blue-500 font-medium">
                Legal Notices
              </Link>
              .
            </p>
          </div>
          <img
            src="https://cloud.orkes.io/static/media/login-page-image.e237d8fa70a2d2f8494ecd4a2c6c4a3d.svg"
            alt={login_page}
            width={420}
            className="hidden lg:block"
          />
        </div>

        <div className="px-8">
          <div className="w-full h-0.5 my-3 background_image_color"></div>
          <div className="flex justify-between px-2 max-sm:flex-col max-sm:items-center ">
            <div className="flex gap-4 mb-4 flex-wrap max-sm:mb-3">
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
            <p className="font-light text-sm">
              © 2024 Orkes. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
