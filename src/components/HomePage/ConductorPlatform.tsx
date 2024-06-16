import React from "react";
import foxtel_logo from "../../assets/Logo/foxtel-logo.svg";
import American_Express from "../../assets/Logo/American Express.webp";
import Coupang_logo from "../../assets/Logo/Coupang_logo.svg";
import GE_Healthcare from "../../assets/Logo/GE_Healthcare.svg";
import JP_Morgan_Chase from "../../assets/Logo/JP-Morgan-Chase-Logo.svg";
import LinkedIn_Logo from "../../assets/Logo/LinkedIn_Logo.svg";
import Payoneer_logo from "../../assets/Logo/Payoneer_logo.svg";
import Swiggy_logo from "../../assets/Logo/Swiggy_logo.svg";
import Tesla_Logo from "../../assets/Logo/Tesla_Logo.svg";
import UWM_Logo from "../../assets/Logo/UWM_Logo.png";
import Vmware from "../../assets/Logo/Vmware.svg";
import florida_blue_logo from "../../assets/Logo/florida-blue-logo.png";
import normalyze_Black from "../../assets/Logo/normalyze_Black.svg";
import redfin_logo from "../../assets/Logo/redfin-logo.png";
import spi_logo from "../../assets/Logo/spi_logo.png";

const logos = [
  { src: Payoneer_logo, alt: "Payoneer_logo" },
  { src: foxtel_logo, alt: "foxtel_logo" },
  { src: Tesla_Logo, alt: "Tesla_Logo" },
  { src: florida_blue_logo, alt: "florida_blue_logo" },
  { src: normalyze_Black, alt: "normalyze_Black" },
  { src: Vmware, alt: "Vmware" },
  { src: UWM_Logo, alt: "UWM_Logo" },
  { src: American_Express, alt: "American_Express" },
  { src: GE_Healthcare, alt: "GE_Healthcare" },
  { src: Coupang_logo, alt: "Coupang_logo" },
  { src: Swiggy_logo, alt: "Swiggy_logo" },
  { src: JP_Morgan_Chase, alt: "JP_Morgan_Chase" },
  { src: LinkedIn_Logo, alt: "LinkedIn_Logo" },
  { src: redfin_logo, alt: "redfin_logo" },
  { src: spi_logo, alt: "spi_logo" },
];

type ConductorPlatformProps = {};

const ConductorPlatform: React.FC<ConductorPlatformProps> = () => {
  return (
    <section className="flex_between_center w-full h-44 relative overflow-hidden">
      <div className=" w-auto flex items-center justify-around gap-8 marquee_left">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={140}
            className="filter"
          />
        ))}
      </div>
    </section>
  );
};

export default ConductorPlatform;
