import React, { useState } from "react";
import { motion } from "framer-motion";
import IntroSection from "../IntroSection";

export type AccordionItem = {
  title: string;
  content: string;
  label?: string;
  description?: string[];
};

type FAQsProps = {};

const items = [
  {
    title: "How many tasks can I run?",
    content:
      "With the basic cluster plan you can run millions of tasks while larger sized clusters can easily scale to billions of tasks.",
  },
  {
    title: "How many users can I add?",
    content:
      "Basic comes with support for 5 users. If you want to increase the amount of users on Conductor you can do so by upgrading to an Enterprise plan.",
  },
  {
    title: "How am I billed?",
    content:
      "You will be billed according to the plan type. Billing can occur on a monthly or yearly basis.",
  },
  {
    title: "What if I’m only using some of the capacity? ",
    content:
      "Our billing is based on cluster size and not on a per task or workflow basis. So utilizing only a portion of your total capacity will not result in a lower price. Conversely, increasing tasks and workflows won’t increase your price as long as you’re within the capacity of your cluster. ",
  },
  {
    title: "Is this a multi tenant environment?",
    content:
      "Orkes provides dedicated clusters with varied levels of isolation all the way up to 100% isolated from any other tenants. ",
  },
  {
    title: "How do I upgrade my cluster?",
    content: `<p class="font-light">
        You can upgrade your cluster directly in the cloud portal by clicking on the “Upgrade Plan” button or if you want to use features in the Enterprise tier you can get started by reaching out to our sales team at <a class="font-medium text-cyan-500 underline" href="/">sales@orkes.io</a> above 
      </p>
    `,
  },
  {
    title: "What kind of languages do you support?",
    content:
      "We provide open source SDKs in Java, Typescript, Python, Go, C# and more for you to easily create task workers and define your workflows as code.",
  },
  {
    title: "What kind of support comes with the Basic plan? ",
    content:
      "The Basic plan comes with our basic level of support via our email support channel. This includes the following SLAs:",
    description: [
      "Catastrophic Support Ticket - Within three business days",
      "Critical Support Ticket - Within five business days",
      "Important Support Ticket - Within seven business days.",
    ],
    label: `<p class="font-light">
        For more information on our support tiers, view the <a class="font-medium text-cyan-500 underline" href="/">support table</a> above 
      </p>
    `,
  },
];

const FAQs: React.FC<FAQsProps> = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 w-3/4 m-auto">
      <IntroSection title="FAQs" sectionClass="pb-0 pt-0" />
      <div className="w-full inline-block my-6 py-2 border border-gray-300 rounded-xl grid_shaddow">
        {items.map(({ title, content, label, description }, index) => (
          <div
            key={index}
            className={`${
              index === items.length - 1 ? "border-none" : ""
            } border-b border-gray-400`}
          >
            <div
              className="flex justify-between items-center h-auto p-5 cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <h2 className="leading-6 text-xl text-black/80">{title}</h2>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center items-center self-center w-7 h-7"
              >
                <div className="border-r-[1.5px] border-b-[1.5px] border-gray-600 w-2.5 h-2.5 rotate-45"></div>
              </motion.div>
            </div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: activeIndex === index ? "auto" : 0,
                opacity: activeIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden font-light px-5 text-black/80"
            >
              <p
                dangerouslySetInnerHTML={{ __html: content }}
                className="mb-5"
              />
              {description && (
                <ul className="pl-5 flex flex-col gap-4 list-disc leading-7">
                  {description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              )}
              {label && (
                <p
                  dangerouslySetInnerHTML={{ __html: label }}
                  className="mt-5"
                />
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
