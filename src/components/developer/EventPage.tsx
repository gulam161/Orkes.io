import React from "react";
import Header from "../Navigation/Header";
import { Link } from "react-router-dom";

type EventPageProps = {};

const Upcoming_EventData = [
  {
    id: 1,
    imgSrc: "k8sug-sg.webp",
    imgAlt: "k8sug-sg_Event",
    description:
      "Join us at K8SUG Singapore for an in-person meetup to dive into how orchestration transcends infrastructure. Discover how orchestration can streamline end-to-end business processes by transforming them into distributed workflows, ultimately boosting developer productivity. Learn practical ways to enable observability and operational insight throughout these processes. Limited online slots are available.",
    buttonText: "Register Now",
  },
  {
    id: 2,
    imgSrc: "crackthecode.webp",
    imgAlt: "crackthecode_Event",
    description:
      "Orkes is thrilled to partner with CrackTheCode for a hackathon at the University of California, Irvine. Students, seize this opportunity to demonstrate your talents, acquire new skills, and collaborate on innovative projects with Conductor!",
    buttonText: "Check Out Now",
  },
  {
    id: 3,
    imgSrc: "msft-nov-24.webp",
    imgAlt: "msft-nov-24_Event",
    description:
      "Join us at Microsoft Reactor to discover how orchestration strengthens RAG frameworks by handling data indexing and embedding creation. Learn prompt engineering techniques to get precise, complete answers from models, and start building your GenAI-powered applications with Conductor.",
    buttonText: "Register Now",
  },
  {
    id: 4,
    imgSrc: "qcon-nov-24.webp",
    imgAlt: "qcon-nov-24_Event",
    description:
      "AI capabilities revolutionize process automation by seamlessly ingesting documents from external sources. Join us at QCon San Francisco in November 2024 to explore limitless use cases, from client onboarding to extracting critical data and categorizing documents. Discover how to orchestrate document processing with GenAI capabilities with Orkes Conductor.",
    buttonText: "Register Now",
  },
  {
    id: 5,
    imgSrc: "msft-dec-24.webp",
    imgAlt: "msft-dec-24_Event",
    description:
      "Discover how to build front-end applications with stateful back-for-front (BFF) layers that efficiently consume and adapt multiple backend services. This approach minimizes the complexity of maintaining additional stateless services. Register now to learn how to implement it with Conductor.",
    buttonText: "Register Now",
  },
];

const Past_EventData = [
  {
    id: 1,
    imgSrc: "k8sug-london-oct-24.webp",
    imgAlt: "k8sug-london-oct-24_Event",
    labelText: "K8SUG London Meetup",
    labelDate: "Oct 23, 2024",
    heading: "Managing Legacy Using Conductor",
    description:
      "At the K8SUG UK meetup in London, Dan M., a member of the Conductor community, discussed how First Databank UK successfully migrated from legacy monolithic systems to a microservices architecture, utilizing orchestration with Conductor OSS.",
    buttonText: "Connect with us",
  },
  {
    id: 2,
    imgSrc: "goto-chicago-oct-24.webp",
    imgAlt: "goto-chicago-oct-24_Event",
    labelText: "GOTO Chicago",
    labelDate: "Oct 21-23, 2024",
    heading: "GOTO Chicago",
    description:
      "We were at GOTO Chicago 2024, where industry experts delved into a broad spectrum of developer topics, including programming, productivity tools, security, AI development, front-end technologies, team dynamics, and DevOps.",
    buttonText: "Connect with us",
  },
  {
    id: 3,
    imgSrc: "apidays-australia-oct-24.webp",
    imgAlt: "apidays-australia-oct-24_Event",
    labelText: "APIDays Australia",
    labelDate: "Oct 16-17, 2024",
    heading: "APIDays Australia",
    description:
      "At APIDays Australia, we dived deep into the world of APIs, envisioning the future of API development by harnessing the transformative power of AI. We addressed the amazing crowd with a session on orchestrating RAG to build accurate LLMs and a workshop on building AI semantic search with RAG Orchestration.",
    buttonText: "Connect with us",
  },
  {
    id: 4,
    imgSrc: "aicamp-ny-oct-24.webp",
    imgAlt: "aicamp-ny-oct-24_Event",
    labelText: "AICamp NY",
    labelDate: "Oct 17, 2024",
    heading: "Scaling and Managing Complex Agentic Workflows",
    description:
      "At the AICamp meetup in New York, we addressed the crowd on the significant challenges posed by scaling workflows in an autonomous system. Ram, Head of AI at Orkes, explored the strategies for optimizing agent-based architecture, providing insights into designing and deploying them.",
    buttonText: "Connect with us",
  },
  {
    id: 5,
    imgSrc: "aicamp-sf-oct-24.webp",
    imgAlt: "aicamp-sf-oct-24_Event",
    labelText: "AICamp SFO",
    labelDate: "Oct 16, 2024",
    heading: "Scaling and Managing Complex Agentic Workflows",
    description:
      "Managing complex workflows in autonomous systems became increasingly challenging as they scaled. During our in-person meetup with AICamp, we delved into strategies for optimizing agent-based architectures, where multiple agents interacted and adapted in dynamic environments.",
    buttonText: "Connect with us",
  },
  {
    id: 6,
    imgSrc: "golangnyc-oct-24.webp",
    imgAlt: "golangnyc-oct-24_Event",
    labelText: "GolangNY Meetup",
    labelDate: "Oct 16, 2024",
    heading: "Microservices Orchestration using Conductor",
    description:
      "In collaboration with GolangNYC, we hosted an in-person developer meetup in New York. Attendees learned how to create Go apps incorporating essential features such as durable execution and rate limiting. The event also covered other critical concepts contributing to the success of distributed applications with orchestration at their core.",
    buttonText: "Connect with us",
  },
];

const EventPage: React.FC<EventPageProps> = () => {
  return (
    <>
      <Header />
      <div className="bg-zinc-100/60 font-['Lexend','sans-serif']">
        <section className="w-4/5 mx-auto flex_items_between max-lg:w-11/12">
          <div className="py-10">
            <h1 className="text-blue-800 text-3xl font-bold pb-10 font-serif">
              Upcoming Events
            </h1>
            {Upcoming_EventData.map(
              ({ id, imgSrc, imgAlt, description, buttonText }) => (
                <div
                  key={id}
                  className="flex justify-center items-center gap-8 py-3.5"
                >
                  <img
                    src={imgSrc}
                    alt={imgAlt}
                    className="w-[57%] shadow-sm"
                  />
                  <div className="w-2/5">
                    <p className="text-lg font-sans">{description}</p>
                    <Link
                      to={""}
                      className="inline-block uppercase text-white font-light text-lg rounded-md bg-blue-900 px-4 py-2 mt-7"
                    >
                      {buttonText}
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Past Event */}
          <div className="py-10">
            <h1 className="text-blue-800 text-3xl font-bold pb-10 font-serif">
              Past Events
            </h1>
            <div className="grid grid-cols-3 gap-8">
              {Past_EventData.map(
                ({
                  id,
                  imgSrc,
                  imgAlt,
                  labelText,
                  labelDate,
                  heading,
                  description,
                  buttonText,
                }) => (
                  <div key={id} className="font-light mb-28">
                    <img
                      src={imgSrc}
                      alt={imgAlt}
                      className="h-48 w-96 shadow-sm"
                    />
                    <div className="flex justify-between text-base pb-5 text-gray-600">
                      <p>{labelText}</p>
                      <p>{labelDate}</p>
                    </div>
                    <div className="w-[300px]">
                      <h1 className="text-xl text-blue-900 font-semibold mb-2.5">
                        {heading}
                      </h1>
                      <p className="text-lg font-sans text-gray-600 font-normal">
                        {description}
                      </p>
                      <Link
                        to={"/talk-to-an-expert"}
                        className="inline-block capitalize text-white font-medium font-serif tracking-wide rounded-md bg-blue-900 px-4 py-2 mt-5"
                      >
                        {buttonText}
                      </Link>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default EventPage;
