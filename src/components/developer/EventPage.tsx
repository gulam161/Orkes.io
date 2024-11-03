import React from "react";
import Header from "../Navigation/Header";
import { Link } from "react-router-dom";

type EventPageProps = {};

const Upcoming_EventData = [
  {
    id: 1,
    imgLink:
      "https://orkes.io/static/863615d459e480d00dafc91263ffc2dc/81547/k8sug-sg.webp",
    imgAlt: "k8sug-sg_Event",
    description:
      "Join us at K8SUG Singapore for an in-person meetup to dive into how orchestration transcends infrastructure. Discover how orchestration can streamline end-to-end business processes by transforming them into distributed workflows, ultimately boosting developer productivity. Learn practical ways to enable observability and operational insight throughout these processes. Limited online slots are available.",
    buttonText: "Register Now",
  },
  {
    id: 2,
    imgLink:
      "https://orkes.io/static/f2242762db682afca85e962d83172f89/81547/crackthecode.webp",
    imgAlt: "crackthecode_Event",
    description:
      "Orkes is thrilled to partner with CrackTheCode for a hackathon at the University of California, Irvine. Students, seize this opportunity to demonstrate your talents, acquire new skills, and collaborate on innovative projects with Conductor!",
    buttonText: "Check Out Now",
  },
  {
    id: 3,
    imgLink:
      "https://orkes.io/static/d4d61db84c3676c7a130a0d53807f29f/81547/msft-nov-24.webp",
    imgAlt: "msft-nov-24_Event",
    description:
      "Join us at Microsoft Reactor to discover how orchestration strengthens RAG frameworks by handling data indexing and embedding creation. Learn prompt engineering techniques to get precise, complete answers from models, and start building your GenAI-powered applications with Conductor.",
    buttonText: "Register Now",
  },
  {
    id: 4,
    imgLink:
      "https://orkes.io/static/d4d61db84c3676c7a130a0d53807f29f/81547/msft-nov-24.webp",
    imgAlt: "qcon-nov-24_Event",
    description:
      "AI capabilities revolutionize process automation by seamlessly ingesting documents from external sources. Join us at QCon San Francisco in November 2024 to explore limitless use cases, from client onboarding to extracting critical data and categorizing documents. Discover how to orchestrate document processing with GenAI capabilities with Orkes Conductor.",
    buttonText: "Register Now",
  },
  {
    id: 5,
    imgLink:
      "https://orkes.io/static/d4d61db84c3676c7a130a0d53807f29f/81547/msft-nov-24.webp",
    imgAlt: "msft-dec-24_Event",
    description:
      "Discover how to build front-end applications with stateful back-for-front (BFF) layers that efficiently consume and adapt multiple backend services. This approach minimizes the complexity of maintaining additional stateless services. Register now to learn how to implement it with Conductor.",
    buttonText: "Register Now",
  },
];

const Past_EventData = [
  {
    id: 1,
    imgLink:
      "https://orkes.io/static/ce0265abc83185f7b58595d9e1b59fdd/81547/k8sug-london-oct-24.webp",
    imgAlt: "k8sug-london-oct-24_Event",
    labelText: "K8SUG London Meetup",
    labelDate: "Oct 23, 2024",
    heading: "Managing Legacy Using Conductor",
    description:
      "At the K8SUG UK meetup in London, Dan M., a member of the Conductor community, discussed how First Databank UK successfully migrated from legacy monolithic systems to a microservices architecture, utilizing orchestration with Conductor OSS.",
    buttonText: "Connect with us",
    buttonLink: "/talk-to-an-expert",
  },
  {
    id: 2,
    imgLink:
      "https://orkes.io/static/92d4c94bdda990208e2fd0eee8bf80df/e9d78/goto-chicago-oct-24.webp",
    imgAlt: "goto-chicago-oct-24_Event",
    labelText: "GOTO Chicago",
    labelDate: "Oct 21-23, 2024",
    heading: "GOTO Chicago",
    description:
      "We were at GOTO Chicago 2024, where industry experts delved into a broad spectrum of developer topics, including programming, productivity tools, security, AI development, front-end technologies, team dynamics, and DevOps.",
    buttonText: "Connect with us",
    buttonLink: "/talk-to-an-expert",
  },
  {
    id: 3,
    imgLink:
      "https://orkes.io/static/59e3da74c1a6fa5c465459c2a96fe850/81547/apidays-australia-oct-24.webp",
    imgAlt: "apidays-australia-oct-24_Event",
    labelText: "APIDays Australia",
    labelDate: "Oct 16-17, 2024",
    heading: "APIDays Australia",
    description:
      "At APIDays Australia, we dived deep into the world of APIs, envisioning the future of API development by harnessing the transformative power of AI. We addressed the amazing crowd with a session on orchestrating RAG to build accurate LLMs and a workshop on building AI semantic search with RAG Orchestration.",
    buttonText: "Connect with us",
    buttonLink: "/talk-to-an-expert",
  },
  {
    id: 4,
    imgLink:
      "https://orkes.io/static/678b95aa1d68f48fbf225b1d171f9e7e/e9d78/aicamp-ny-oct-24.webp",
    imgAlt: "aicamp-ny-oct-24_Event",
    labelText: "AICamp NY",
    labelDate: "Oct 17, 2024",
    heading: "Scaling and Managing Complex Agentic Workflows",
    description:
      "At the AICamp meetup in New York, we addressed the crowd on the significant challenges posed by scaling workflows in an autonomous system. Ram, Head of AI at Orkes, explored the strategies for optimizing agent-based architecture, providing insights into designing and deploying them.",
    buttonText: "Connect with us",
    buttonLink: "/talk-to-an-expert",
  },
  {
    id: 5,
    imgLink:
      "https://orkes.io/static/dbf62f832e252b0f7d55423151d6cb72/81547/aicamp-sf-oct-24.webp",
    imgAlt: "aicamp-sf-oct-24_Event",
    labelText: "AICamp SFO",
    labelDate: "Oct 16, 2024",
    heading: "Scaling and Managing Complex Agentic Workflows",
    description:
      "Managing complex workflows in autonomous systems became increasingly challenging as they scaled. During our in-person meetup with AICamp, we delved into strategies for optimizing agent-based architectures, where multiple agents interacted and adapted in dynamic environments.",
    buttonText: "Connect with us",
    buttonLink: "/talk-to-an-expert",
  },
  {
    id: 6,
    imgLink:
      "https://orkes.io/static/42118c442ebe4bbd53b93afb5b43e9e9/81547/golangnyc-oct-24.webp",
    imgAlt: "golangnyc-oct-24_Event",
    labelText: "GolangNY Meetup",
    labelDate: "Oct 16, 2024",
    heading: "Microservices Orchestration using Conductor",
    description:
      "In collaboration with GolangNYC, we hosted an in-person developer meetup in New York. Attendees learned how to create Go apps incorporating essential features such as durable execution and rate limiting. The event also covered other critical concepts contributing to the success of distributed applications with orchestration at their core.",
    buttonText: "Connect with us",
    buttonLink: "/talk-to-an-expert",
  },
  {
    id: 7,
    imgLink:
      "https://orkes.io/static/7f2523bccae611fa47946a9ac765a14a/2bf2f/msft-reactor-oct24.webp",
    imgAlt: "msft-reactor-oct24_Event",
    labelText: "Microsoft Reactor",
    labelDate: "Oct 10, 2024",
    heading: "Add Human Tasks to Microservices Orchestrations",
    description:
      "In the October edition of the Microsoft Reactor series, we hosted an engaging session on seamlessly integrating human interactions into microservice orchestrations. Learn how to enhance your workflows with a human touch and improve overall workflow efficiency.",
    buttonText: "Watch now",
    buttonLink: "https://youtu.be/qRrM58f8Prc?feature=shared",
  },
  {
    id: 8,
    imgLink:
      "https://orkes.io/static/fa36c562e75c81e046623ea0be46f4e2/81547/pydatanyc-oct24.webp",
    imgAlt: "pydatanyc-oct24_Event",
    labelText: "PYData Meetup",
    labelDate: "Oct 9, 2024",
    heading: "GenAI Orchestrations using Python",
    description:
      "In collaboration with PYData NYC, we hosted an in-person developer meetup in New York on “Visual AI & GenAI Orchestration”. The session delved into orchestrating models and vector databases to automate insightful answers to LLM queries and seamlessly integrate GenAI capabilities into existing applications in Python.",
    buttonText: "Connect with us",
    buttonLink: "/talk-to-an-expert",
  },
  {
    id: 9,
    imgLink:
      "https://orkes.io/static/254692bc4beb225c3d32c5e36b08e8c4/81547/community-call-sep-24.webp",
    imgAlt: "community-call-sep-24_Event",
    labelText: "Community Call - Sep’24",
    labelDate: "Sep 25, 2024",
    heading: "Conductor Community Call",
    description:
      "We launched with the first edition of the Conductor community call in September 2024. The call was a success, with several community members engaged in thought-provoking discussions. Dan Miller, Tech Lead at First Databank UK, shared how they effectively leveraged Conductor OSS to manage their financial requirements.",
    buttonText: "Watch now",
    buttonLink: "https://youtu.be/qRrM58f8Prc?feature=shared",
  },
  {
    id: 10,
    imgLink:
      "https://orkes.io/static/97b2e4a3f770fd2736487d1babec1414/2bf2f/msft-reactor-sep-24.webp",
    imgAlt: "msft-reactor-sep-24_Event",
    labelText: "Microsoft Reactor",
    labelDate: "Sep 12, 2024",
    heading: "Building Reliable Distributed Systems Using Python",
    description:
      "During the September Microsoft Reactor session, Orkes led a talk on building scalable and distributed systems using Python. The session provided insights on how businesses can improve system reliability and performance by integrating Conductor into their Python-based infrastructures.",
    buttonText: "Watch now",
    buttonLink: "https://developer.microsoft.com/en-us/reactor/events/22837/",
  },
  {
    id: 11,
    imgLink:
      "https://orkes.io/static/01873263e74b52c3246c979ad141002e/e9d78/cio-london-summit.webp",
    imgAlt: "cio-london-summit_Event",
    labelText: "CIO London Summit",
    labelDate: "Sep 12, 2024",
    heading: "CIO London Summit",
    description:
      "Orkes participated in the annual CIO London Summit, where we showcased how the Conductor platform transforms enterprise workflows with AI and automation. Attendees delved into the latest advancements in Cloud, Digital Transformation, and Data & Analytics, focusing on how automation is reshaping the future of business efficiency.",
    buttonText: "Connect with us",
    buttonLink: "/talk-to-an-expert",
  },
  {
    id: 12,
    imgLink:
      "https://orkes.io/static/ff9285a65df76558f5d9ea820d2766c6/81547/gartner-apac-2024.webp",
    imgAlt: "gartner-apac-2024_Event",
    labelText: "Gartner APAC 2024 - Australia",
    labelDate: "Sep 9 - 11, 2024",
    heading: "Gartner 2024 APAC IT Symposium/Xpo",
    description:
      "The Gartner 2024 APAC IT Symposium/Xpo in Australia gathered global experts to explore various IT solutions and strategies in the Asia-Pacific region, showcasing advancements and networking opportunities across the tech landscape.",
    buttonText: "Connect with us",
    buttonLink: "/talk-to-an-expert",
  },
  {
    id: 13,
    imgLink:
      "https://orkes.io/static/76fe39666b3a14383ade1606eeb31cb7/81547/gartner-london-sep-24.webp",
    imgAlt: "gartner-london-sep-24_Event",
    labelText: "Gartner Summit 2024 - UK",
    labelDate: "Sep 9 - 10, 2024",
    heading: "Gartner Application Innovation & Business Solutions Summit 2024",
    description:
      "The Gartner Application Innovation & Business Solutions Summit in London brought together experts and vendors to discuss critical topics such as generative AI, intelligent applications, low-code solutions, platform engineering, and talent management in software development. It gave attendees practical advice and strategic insights into the latest industry trends.",
    buttonText: "Connect with us",
    buttonLink: "/talk-to-an-expert",
  },
  {
    id: 14,
    imgLink:
      "https://orkes.io/static/fa6002eeac6679a3047f1b53e6068c66/e9d78/sep-masterclass.webp",
    imgAlt: "sep-masterclass_Event",
    labelText: "Orkes Masterclass",
    labelDate: "Sep 10, 2024",
    heading: "Build Stateful Backend for Frontend (BFF)",
    description:
      "This masterclass focused on building a stateful Backend for Frontend (BFF) architecture using JavaScript and TypeScript. The session explored how to integrate Conductor to build stateful BFF applications, helping developers enhance their processes and scale applications more effectively.",
    buttonText: "Watch now",
    buttonLink: "https://youtu.be/_V6-36hA5-E?si=z_L6j-HAaRFQshTg",
  },
  {
    id: 15,
    imgLink:
      "https://orkes.io/static/c4995cb1b2ac55190f1985919c6bdf10/81547/sydney-dev-meetup-august-2024.webp",
    imgAlt: "sydney-dev-meetup-august-2024",
    labelText: "Sydney Meetup - Aug’24",
    labelDate: "Aug 27, 2024",
    heading: "Taking Gen-AI Applications from POC to Production",
    description:
      "Our recent developer meetup at Sydney explored the key questions and challenges organizations face when operationalizing Gen-AI applications. We discussed everything from understanding the transition process and optimizing performance to mitigating risks and ensuring long-term success. Attendees gained practical knowledge and actionable strategies to drive their Gen-AI projects forward.",
    buttonText: "Connect with us",
    buttonLink: "/talk-to-an-expert",
  },
  {
    id: 16,
    imgLink:
      "https://orkes.io/static/1263a8f3f61f9169151490005ef8d2c4/81547/build-the-flow.webp",
    imgAlt: "build-the-flow",
    labelText: "Orkes Summer Hackathon",
    labelDate: "July - Aug 2024",
    heading: "Build the Flow Hackathon",
    description:
      "Orkes Conductor's Virtual Summer Hackathon, Build-The-Flow, recently wrapped up! Participants showcased their skills, collaborated on innovative solutions, and gained valuable insights from expert masterclasses on microservices orchestration. The event was a huge success, with many walking away with exciting prizes!",
    buttonText: "Connect with us",
    buttonLink: "/talk-to-an-expert",
  },
  {
    id: 17,
    imgLink:
      "https://orkes.io/static/ecddbcac7ee3b46f4689faeddb024f28/81547/msft-reactor-aug-24.webp",
    imgAlt: "msft-reactor-aug-24",
    labelText: "Microsoft Reactor",
    labelDate: "Aug 8, 2024",
    heading: "Integrate External Systems Within Existing Applications",
    description:
      "In the August Microsoft Reactor session, we tackled the chronic IT challenge of integrating heterogeneous systems, exploring how advanced orchestration capabilities with Orkes Conductor can overcome this hurdle amidst evolving application architectures and the rise of SaaS solutions.",
    buttonText: "Watch now",
    buttonLink: "https://developer.microsoft.com/en-us/reactor/events/22836/",
  },
  {
    id: 18,
    imgLink:
      "https://orkes.io/static/df5d3ec312992bf81f5867a6223d110c/81547/webinar-july-24.webp",
    imgAlt: "webinar-july-24",
    labelText: "Webinar",
    labelDate: "July 30, 2024",
    heading: "Taking Gen-AI Applications from POC to Production",
    description:
      "In May, we hosted an insightful webinar that explored the critical steps and strategies for successfully transitioning Gen-AI applications from POC to full-scale production. Attendees gained practical AI and workflow orchestration knowledge, discovered useful Gen-AI use cases across various industries and learned how to integrate Gen-AI into existing workflows and systems.",
    buttonText: "Watch now",
    buttonLink: "https://youtu.be/y3i6zJNUxMI?si=biFERvcbHitIV7Iw",
  },
  {
    id: 19,
    imgLink:
      "https://orkes.io/static/978bc1bfc1992b7e9b751fc9157f9080/81547/sg-july-24.webp",
    imgAlt: "Singapore Meetup-24",
    labelText: "Singapore Meetup - July'24",
    labelDate: "July 19, 2024",
    heading: "Orchestrating RAG",
    description:
      "In July, we concluded an exciting developer meetup in Singapore, where we delved into the transformative power of RAG in enhancing language generation models. The event highlighted how RAG ensures accuracy, contextual relevance, and diversity in content creation. Participants left with a comprehensive understanding of designing effective RAG workflows, from ideation to full-scale production.",
    buttonText: "Watch now",
    buttonLink: "https://youtu.be/O3QDfkJPPLs?si=KnEYUzawOXr9XQOC",
  },
  {
    id: 20,
    imgLink:
      "https://orkes.io/static/2f58bb9f2c7306147bbdb1c5ee3ff443/81547/msft-reactor-july-24.webp",
    imgAlt: "msft-reactor-july-24",
    labelText: "Microsoft Reactor",
    labelDate: "July 11, 2024",
    heading: "Document Processing Using GenAI Orchestrations",
    description:
      "In the July Microsoft Reactor session, we explored AI's role in automating document processing with GenAI and Orkes Conductor, showcasing applications from client onboarding to information extraction.",
    buttonText: "Watch now",
    buttonLink: "https://developer.microsoft.com/en-us/reactor/events/22835/",
  },
  {
    id: 21,
    imgLink:
      "https://orkes.io/static/f3f0e079ee537b9ab7508ee0f1d79d3b/33bdc/Msft-Reactor-June-24.webp",
    imgAlt: "Msft-Reactor-June-24",
    labelText: "Microsoft Reactor",
    labelDate: "June 26, 2024",
    heading: "Building Complex Distributed Applications in Minutes",
    description:
      "The June edition of the Microsoft Reactor focused on developing distributed applications with microservices. We also covered how to use Orkes Conductor to build these applications rapidly. Attendees gained insights into best practices and practical techniques for efficient microservice development.",
    buttonText: "Connect with us",
    buttonLink: "/talk-to-an-expert",
  },
  {
    id: 22,
    imgLink:
      "https://orkes.io/static/6c3a0a2a860c4fec5fd1230343c24797/81547/collision-june-24.webp",
    imgAlt: "collision-june-24",
    labelText: "Collision",
    labelDate: "June 17-20, 2024",
    heading: "Orchestrating Scalable Complex Applications",
    description:
      "This June, we had the fantastic opportunity to attend Collision, the Olympics of tech, where we delivered a masterclass on integrating orchestration capabilities into applications. We connected with numerous industry leaders and innovators, exchanging ideas and building valuable relationships at this premier tech conference.",
    buttonText: "Connect with us",
    buttonLink: "/talk-to-an-expert",
  },
  {
    id: 23,
    imgLink:
      "https://orkes.io/static/5704237c41fbaf5c29f2496728529116/81547/microsoft-virtual-june.webp",
    imgAlt: "microsoft-virtual-june",
    labelText: "Microsoft Reactor",
    labelDate: "June 13, 2024",
    heading: "Mastering Durable Executions",
    description:
      "The June edition of the masterclass series with Microsoft Reactor covered why and how to master durable executions of microservices using Orkes Conductor. The session provided in-depth insights into leveraging Orkes Conductor for building robust and resilient microservice architectures.",
    buttonText: "Watch now",
    buttonLink: "https://developer.microsoft.com/en-us/reactor/events/22834/",
  },
  {
    id: 25,
    imgLink:
      "https://orkes.io/static/ac514547b83a47f69c782f92098bb70b/81547/oss-vs-enterprise.webp",
    imgAlt: "oss-vs-enterprise",
    labelText: "Webinar",
    labelDate: "June 05, 2024",
    heading: "Conductor OSS VS. Enterprise Orkes Conductor",
    description:
      "This June, a comprehensive webinar explored the differences between Conductor OSS and Orkes Enterprise Conductor. It provided valuable insights into the additional features and benefits of Orkes Enterprise over Conductor OSS, helping organizations determine the best solution for their needs and understand when and why a switch might be necessary.",
    buttonText: "Watch now",
    buttonLink: "https://youtu.be/BkbzXNJq2HU?si=8DphCfXQVtx-p3-Q",
  },
  {
    id: 26,
    imgLink:
      "https://orkes.io/static/6986a42465fb17621785100c009c1541/81547/msft-reactor-may-24.webp",
    imgAlt: "msft-reactor-may-24",
    labelText: "Microsoft Reactor",
    labelDate: "May 22, 2024",
    heading: "Build Complex Distributed Applications in Minutes",
    description:
      "The May edition of the Microsoft Reactor focused on developing distributed applications with microservices. We also covered how to use Orkes Conductor to build these applications rapidly. Attendees gained insights into best practices and practical techniques for efficient microservice development.",
    buttonText: "Connect with us",
    buttonLink: "/talk-to-an-expert",
  },
  {
    id: 27,
    imgLink:
      "https://orkes.io/static/f6c41c7a232138a4467188d1ad63de98/81547/msbuild-may-2024.webp",
    imgAlt: "msbuild-may-2024",
    labelText: "Microsoft Build 2024",
    labelDate: "May 21-23, 2024",
    heading: "Microsoft Build 2024",
    description:
      "We were at the Microsoft Build 2024 this May. It was a fantastic opportunity to delve into orchestration and broaden our understanding of copilot, generative AI, application security, cloud platforms, low-code development, and more.",
    buttonText: "Connect with us",
    buttonLink: "/talk-to-an-expert",
  },
  {
    id: 28,
    imgLink:
      "https://orkes.io/static/5a10127bbb9a857300a846dd1ff4b8fe/81547/gartner-may-2024.webp",
    imgAlt: "gartner-may-2024",
    labelText: "Gartner Summit 2024 - US",
    labelDate: "May 14-16, 2024",
    heading: "Gartner Application Innovation & Business Solutions Summit 2024",
    description:
      "This May 2024, we attended the Gartner Application Innovation & Business Solutions Summit. We networked with top experts and explored generative AI, intelligent apps, low-code development, platform engineering, and more. It was an exciting event to explore the latest advancements in application and software engineering.",
    buttonText: "Connect with us",
    buttonLink: "/talk-to-an-expert",
  },
  {
    id: 29,
    imgLink:
      "https://orkes.io/static/b904a953540d2461244d2ddcd5502128/81547/api-days-nyc.webp",
    imgAlt: "APIDays NY-24",
    labelText: "APIDays NY",
    labelDate: "May 1, 2024",
    heading: "APIDays New York",
    description:
      "We were at the 5th edition of APIDays New York, where we explored the importance of orchestrating microservices and AI for enterprise-level workflows. Additionally, the Orkes workshop explored rapidly building complex applications through orchestration.",
    buttonText: "Connect with us",
    buttonLink: "/talk-to-an-expert",
  },
  {
    id: 30,
    imgLink:
      "https://orkes.io/static/56ebcfa2e828007981d60c468f19977c/e9d78/apr-24-orkes-finos-reactor.webp",
    imgAlt: "apr-24-orkes-finos-reactor",
    labelText: "Microsoft Reactor x FINOS",
    labelDate: "Apr 24, 2024",
    heading: "Microsoft Reactor x FINOS",
    description:
      "In April 2024, we participated in the collaborative Microsoft Reactor event, organized by Orkes and supported by FINOS. The event focused on examining the potential of orchestration platforms in facilitating the smooth integration of AI into mission-critical financial workflows.",
    buttonText: "Connect with us",
    buttonLink: "/talk-to-an-expert",
  },
  {
    id: 31,
    imgLink:
      "https://orkes.io/static/03e43eee955702f58181a05640da3045/81547/jakarta-apr-24.webp",
    imgAlt: "J-Meetup-24",
    labelText: "Jakarta Meetup",
    labelDate: "Apr 24, 2024",
    heading: "Developer Meetup - Jakarta",
    description:
      "In April 2024, we hosted a developer meetup in Indonesia centered around efficient microservices management. The event provided attendees with valuable insights and opportunities to connect with peers, exchange ideas, and learn about the latest approaches in the field.",
    buttonText: "Connect with us",
    buttonLink: "/talk-to-an-expert",
  },
  {
    id: 32,
    imgLink:
      "https://orkes.io/static/5fce6d262fc461ab244e49081b343607/81547/bangalore-apr-24.webp",
    imgAlt: "Bangalore-M-24",
    labelText: "Bangalore Meetup",
    labelDate: "Apr 19, 2024",
    heading: "Developer Meetup - Bengaluru",
    description:
      "Our first developer meetup in Bangalore for 2024 focused on leveraging Gen AI to deliver personalized, tailored user experiences for businesses that increase customer satisfaction, loyalty, and revenue growth. The event featured insightful discussions and demos empowering attendees to harness the power of Gen AI using Orkes Conductor.",
    buttonText: "Read more",
    buttonLink: "https://orkes.io/blog/ai-orchestration-meetup-recap/",
  },
  {
    id: 33,
    imgLink:
      "https://orkes.io/static/3ac061eb93722c1b5cf3040293ed4557/81547/api-days-sg.webp",
    imgAlt: "APIDays-24",
    labelText: "APIDays Singapore",
    labelDate: "Apr 17-18, 2024",
    heading: "APIDays Singapore",
    description:
      "At APIDays Singapore, we delved deep into the world of application orchestration with Orkes Conductor. Our workshop illuminated the seamless integration of AI capabilities within microservices orchestration, empowering businesses to innovate with confidence and efficiency.",
    buttonText: "Connect with us",
    buttonLink: "https://orkes.io/orkes-cloud-free-trial",
  },
  {
    id: 34,
    imgLink:
      "https://orkes.io/static/34868d12ca9a1f6b9596f62891db3628/81547/sg-march-24.webp",
    imgAlt: "sm-24",
    labelText: "Singapore Meetup - Mar’24",
    labelDate: "Mar 18, 2024",
    heading: "Developer Meetup - Singapore",
    description:
      "In March 2024, we hosted a developer meetup in Singapore focused on highlighting strategies, best practices, and tools for quickly building real-world complex applications with orchestration. It was an incredible opportunity for the tech community in Singapore to discover challenges, frameworks, and tools for rapidly building modern distributed applications.",
    buttonText: "Watch now",
    buttonLink: "https://youtu.be/_zMNphH2nRo?si=9rMCiZ19KGYKfc6t",
  },
  {
    id: 35,
    imgLink:
      "https://orkes.io/static/e2455c4237ab88b4b2593a1c12892a4a/81547/virtual-mar-24.webp",
    imgAlt: "Conductor M-24",
    labelText: "Conductor Meetup",
    labelDate: "Mar 12, 2024",
    heading: "Conductor Virtual Meetup - Mar’24",
    description:
      "The March edition of Virtual Conductor Meetup explored the depths of Conductor Typescript SDK, unleashing its full potential. Additionally, attendees gained valuable insights into seamlessly integrating human tasks into their applications, providing them with opportunities to enhance human interactions within their applications.",
    buttonText: "Watch now",
    buttonLink: "https://youtu.be/9PwXH_W0l9I?si=7UQtWOLqo_f9tWGM",
  },
  {
    id: 36,
    imgLink:
      "https://orkes.io/static/3652eb53a060d12ed056ac51a9d61766/81547/seattle-feb-24.webp",
    imgAlt: "Seattle - M-24",
    labelText: "Seattle Meetup",
    labelDate: "Mar 5, 2024",
    heading: "AWS & Orkes Developer Meetup Seattle",
    description:
      "The Seattle meetup, powered by AWS, brought developers together to dive deep into durable executions and the latest AWS Bedrock integration with Conductor, fostering a dynamic environment for networking and knowledge exchange among the attendees.",
    buttonText: "Connect with us",
    buttonLink: "/talk-to-an-expert",
  },
  {
    id: 37,
    imgLink:
      "https://orkes.io/static/2a3eec92cc243f4921db4f1452135afc/81547/atlanta-meetup-feb-24.webp",
    imgAlt: "Atlanta M -24",
    labelText: "Atlanta Meetup",
    labelDate: "Feb 29, 2024",
    heading: "AWS & Orkes Developer Meetup Atlanta",
    description:
      "The Atlanta meetup, powered by AWS, brought developers together for a deep dive into durable executions and Conductor's role in orchestrating microservices for Florence Healthcare. We also unveiled the latest AWS Bedrock integration with Conductor, showcasing a new level of collaboration.",
    buttonText: "Watch now",
    buttonLink: "https://youtu.be/gWKq8ylngHA?si=DVKgoPdqW1JALE-3",
  },
  {
    id: 38,
    imgLink: "",
    imgAlt: "",
    labelText: "React Delhi",
    labelDate: "Feb 24, 2024",
    heading: "The Role of BFF in React Applications",
    description:
      "At React Delhi, we dived into the technical intricacies of Backend For Frontend (BFF) and its critical role within React Applications. We focused on delivering how BFF functions as a mediator, optimizing data flow, and enhancing the agility of front-end development.",
    buttonText: "Connect with us",
    buttonLink: "/talk-to-an-expert",
  },
  {
    id: 39,
    imgLink: "",
    imgAlt: "",
    labelText: "Vue.js Nation Conference 2024",
    labelDate: "Feb 15, 2024",
    heading: "Vue.js Nation Workshop",
    description:
      "At the Vue.js Nation Conference, we hosted a workshop attended by 800 participants, where we explored the intricacies of building a stateful Backend For Frontend (BFF) using Conductor. Our in-depth session was designed to equip attendees with valuable insights into optimizing the development of front-end applications through Conductor.",
    buttonText: "Connect with us",
    buttonLink: "/talk-to-an-expert",
  },
  {
    id: 40,
    imgLink: "",
    imgAlt: "",
    labelText: "Conductor Meetup",
    labelDate: "Feb 13, 2024",
    heading: "Conductor Virtual Meetup - Feb’24",
    description:
      "The February Virtual Conductor Meetup unveiled the Conductor CLI with a hands-on guide to its implementation. The event also featured an enlightening fireside chat with the Creator of Netflix Conductor, offering valuable insights into the tool's origins and its transformative role in modern app development.",
    buttonText: "Watch now",
    buttonLink: "https://youtu.be/OgFkG7V9apQ?feature=shared",
  },
  {
    id: 41,
    imgLink: "",
    imgAlt: "",
    labelText: "Webinar",
    labelDate: "Feb 8, 2024",
    heading:
      "Build and Scale RAG Applications using Orkes Gen AI Orchestration",
    description:
      "In February, we launched our first technical webinar of the year, focusing on developing distributed applications with Gen AI Orchestration using Orkes Conductor. Keep an eye out for upcoming technical webinars as we delve deeper into innovative approaches to AI orchestration and application building.",
    buttonText: "Watch now",
    buttonLink: "https://youtu.be/eZfpbIcQNUA?feature=shared",
  },
  {
    id: 42,
    imgLink: "",
    imgAlt: "",
    labelText: "Dojo.live",
    labelDate: "Feb 6, 2024",
    heading: "How Generative AI Impacts the Way Software is Built",
    description:
      "At the recent dojo.live show, we discussed integrating Gen AI models into business workflows using Orkes Conductor, highlighting its role in streamlining model deployment and orchestration. This integration allows businesses to efficiently leverage AI for tasks ranging from predictive analytics to process automation.",
    buttonText: "Watch now",
    buttonLink:
      "https://dojo.live/interviews/how-generative-ai-impacts-the-way-software-is-built-viren-baraiya-orkes/",
  },
  {
    id: 43,
    imgLink: "",
    imgAlt: "",
    labelText: "Boston Meetup",
    labelDate: "Jan 30, 2024",
    heading: "Microservices & Distributed Applications Meetup | Boston",
    description:
      "Our first in-person meetup in Boston provided a comprehensive exploration of building scalable distributed applications with Conductor. Participants delved into the integration of Conductor into Gen AI-powered applications and acquired knowledge on building distributed applications using Python.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/orkes-monthly-highlights-jan-2024/#:~:text=Microservices%20%26%20Distributed%20Applications%20Meetup%20%7C%20Boston",
  },
  {
    id: 44,
    imgLink: "",
    imgAlt: "",
    labelText: "Vue.js Nation",
    labelDate: "Jan 24-25, 2024",
    heading: "Vue.js Nation Conference 2024",
    description:
      'At the Vue.js Nation Conference 2024, we left a lasting impact through our session on "Accelerating front-end development with stateful BFFs" featuring Conductor, the leading open-source orchestration platform. Our session demonstrated the transformative capabilities of Conductor and inspired attendees to rethink their approaches, fostering a shared vision for the future of front-end development with Conductor.',
    buttonText: "Watch now",
    buttonLink: "https://youtu.be/3D8W3hi9Vyo?feature=shared",
  },
  {
    id: 45,
    imgLink: "",
    imgAlt: "",
    labelText: "FOSS United, Bengaluru",
    labelDate: "Jan 13, 2024",
    heading: "Orchestration in Retrieval Augmented Generation",
    description:
      "Orkes was represented at the FOSS United Bangalore by our founding engineer, Manan Bhatt, where he shared an insightful session on the fascinating realm of Orchestration in Retrieval Augmented Generation (RAG), offering a unique perspective on navigating today's digital landscape with Orkes Conductor.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/orkes-monthly-highlights-jan-2024/#:~:text=FOSS%20United%20Bangalore",
  },
  {
    id: 46,
    imgLink: "",
    imgAlt: "",
    labelText: "Conductor Meetup",
    labelDate: "Jan 9, 2024",
    heading: "Virtual Conductor Meetup - Jan’24",
    description:
      "We kickstarted 2024 events with the Virtual Conductor Meetup, which featured engaging sessions on harnessing the power of Conductor as an integration platform & why durability of application flow matters. Our panel of speakers shared their valuable insights on revolutionizing the app development process with Conductor.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/orkes-monthly-highlights-jan-2024/#:~:text=Virtual%20Conductor%20Meetup%20Jan%E2%80%9924",
  },
  {
    id: 47,
    imgLink: "",
    imgAlt: "",
    labelText: "Conductor Meetup",
    labelDate: "Dec 13, 2023",
    heading: "Conductor Meetup | Orkes x Netflix",
    description:
      "Co-organized by Orkes and Netflix Engineering, the Conductor Meetup for Q4 took place on Dec 13, 2023. The meetup delves deep into Conductor, the powerful orchestration platform that simplifies and manages your microservices at scale. This meetup was an excellent opportunity for all microservices enthusiasts to hear from industry experts on AI orchestration and how Conductor expedites the development of real-world distributed applications.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/orkes-monthly-highlights-dec-2023/#:~:text=Orkes%20x%20Netflix%20%7C%20Conductor%20Meetup",
  },
  {
    id: 48,
    imgLink: "",
    imgAlt: "",
    labelText: "Paris Meetup Dec’23",
    labelDate: "Dec 8, 2023",
    heading: "Microservices and Orkes Conductor Meetup Paris",
    description:
      "The second edition of our Paris Meetup was an extraordinary experience that united a vibrant community of developers, software architects, and tech enthusiasts in France. The event was centered around the transformative impact of AI on orchestration strategies. We were fortunate to host an exceptional session featuring a Conductor user, who shared insights on how their organization successfully tackled integration challenges using this platform.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/orkes-monthly-highlights-dec-2023/#:~:text=Microservices%20and%20Orkes%20Conductor%20Meetup%20Paris",
  },
  {
    id: 49,
    imgLink: "",
    imgAlt: "",
    labelText: "APIDays Paris",
    labelDate: "Dec 7, 2023",
    heading: "AI Enabled Orchestration & Retrieval-Augmented Generation",
    description:
      "With 3000+ attendees, APIDays Paris was an exceptional platform for discovering cutting-edge innovations and technologies. At the APIDays Paris, we delved into an engaging session on how Retrieval Augmented Generation (RAG) revolutionizes efficiency across various applications.",
    buttonText: "Watch now",
    buttonLink: "https://youtu.be/jVQNJwH9tL4?feature=shared",
  },
  {
    id: 50,
    imgLink: "",
    imgAlt: "",
    labelText: "Singapore Meetup Nov'23",
    labelDate: "Nov 8, 2023",
    heading: "Microservices and Orkes Conductor Meetup Singapore",
    description:
      "The second edition of our Singapore Meetup was a phenomenal experience! It united a community of passionate developers in Singapore, all deeply engaged in the world of microservice-based applications. The spotlight was on AI Orchestration, unraveling the intricacies of seamlessly integrating Conductor for intelligent, automated decision-making in daily business operations.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/orkes-monthly-highlights-nov-2023/#:~:text=Microservices%20and%20Orkes%20Conductor%20Meetup%20Singapore",
  },
  {
    id: 51,
    imgLink: "",
    imgAlt: "",
    labelText: "GDG Durgapur",
    labelDate: "Nov 5, 2023",
    heading: "GDG Durgapur",
    description:
      "We recently collaborated with GDG Durgapur, the biggest event in the region for developers and techies on November 5, 2023. The partnership brought together a diverse group of individuals passionate about technology, fostering an environment of learning, collaboration, and networking. It was a momentous occasion that showcased the vibrant spirit of the local tech community and provided valuable insights and connections for all participants.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/orkes-monthly-highlights-nov-2023/#:~:text=unforgettable%20tech%20experience!-,DevFest%20Durgapur,-Nov%205%2C%202023",
  },
  {
    id: 52,
    imgLink: "",
    imgAlt: "",
    labelText: "Sydney Meetup",
    labelDate: "Nov 2, 2023",
    heading: "Microservices and Distributed Applications Meetup Australia",
    description:
      "Our first in-person meetup in Australia occurred in Sydney on November 2, 2023. This event provided a deep dive into exclusive strategies and insights regarding real-world application development, leveraging the capabilities of Conductor—the open-source orchestration engine developed by Netflix and meticulously maintained by Orkes. The agenda featured enlightening sessions delivered by prominent industry speakers, serving as a beacon for enthusiasts in the realm of microservices.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/orkes-monthly-highlights-nov-2023/#:~:text=Microservices%20%26%20Distributed%20Applications%20Meetup%20Australia",
  },
  {
    id: 53,
    imgLink: "",
    imgAlt: "",
    labelText: "OSFF New York",
    labelDate: "Nov 1, 2023",
    heading: "Open Source in Finance Forum New York",
    description:
      "We were at the Open Source in Finance Forum in New York, a hub of knowledge and shared enthusiasm, where we delved into the realm of innovation and collaboration in financial services through open-source magic. Our minds sparked, connections were forged, and we even geeked out exploring the wonders of implementing financial workflows using Netflix Conductor.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/orkes-monthly-highlights-nov-2023/#:~:text=Open%20Source%20Finance%20Forum%20New%20York",
  },

  {
    id: 54,
    imgLink: "",
    imgAlt: "",
    labelText: "Cloud Native Day Pune",
    labelDate: "Oct 28, 2023",
    heading: "Cloud Native Day Pune",
    description:
      "October came to a close with our engagement at Cloud Native Day Pune, a community-organized event that's deeply committed to fostering and nurturing the cloud-native community. We were excited to collaborate with Cloud Native Day, a gathering dedicated to exploring cutting-edge technologies like GitOps, WebAssembly (WASM), Docker, Kubernetes, Cloud Sustainability, GenAI, GPT, DevOps, and many other innovations.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/orkes-monthly-highlights-oct-2023/#:~:text=with%20Orkes%20Conductor.-,Cloud%20Native%20Day%20Pune,-Oct%2028%2C%202023",
  },
  {
    id: 55,
    imgLink: "",
    imgAlt: "",
    labelText: "Weaviate Meetup New York",
    labelDate: "Oct 27, 2023",
    heading: "Orchestration in Retrieval-Augmented Generation",
    description:
      "We were part of the Weaviate Meetup on Oct 27, 2023, in the vibrant city of New York. Our team delivered an informative exploration of the captivating realm of Orchestration in Retrieval Augmented Generation (RAG) through the lens of Orkes Conductor.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/orkes-monthly-highlights-oct-2023/#:~:text=New%20York%20Weaviate%20Meetup",
  },
  {
    id: 56,
    imgLink: "",
    imgAlt: "",
    labelText: "Gitex Global 2023 | Expand North Star",
    labelDate: "Oct 15 - 18, 2023",
    heading: "Gitex Global 2023 | Expand North Star",
    description:
      "We marked our presence in the Middle East with Gitex Global 2023. Taking part in the expansive Expand North Star venue, recognized as the world's largest tech and startup showcase, filled us with excitement as we had the opportunity to connect with and establish partnerships with top tech experts from across the globe.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/orkes-monthly-highlights-oct-2023/#:~:text=GITEX%20%2D%20Expand%20North%20Star",
  },
  {
    id: 57,
    imgLink: "",
    imgAlt: "",
    labelText: "GDG DevFest Ranchi",
    labelDate: "Oct 8, 2023",
    heading:
      "Modernizing Applications: Unleashing the Power of Microservices with Conductor",
    description:
      "We kick-started the DevFest series of the year with DevFest Ranchi on Oct 8, 2023. Our team delivered an insightful session on unleashing the power of microservices in modernizing applications. We delved into the fundamentals of microservices, their benefits, and how they can be utilized to build robust and scalable applications.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/orkes-monthly-highlights-oct-2023/#:~:text=and%20product%20managers.-,GDG%20DevFest%20Ranchi,-Oct%208%2C%202023",
  },
  {
    id: 58,
    imgLink: "",
    imgAlt: "",
    labelText: "QCon San Francisco",
    labelDate: "Oct 6, 2023",
    heading:
      "Microservices Orchestration: Designing Resilient Systems for the future",
    description:
      "We were at QCon San Francisco on Oct 6, 2023. Our Head of DevRel, Olivier Poupeney, delivered an informative workshop on mastering microservices orchestration, enhancing application resiliency, and enabling rapid, multi-language, and cross-team development.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/orkes-monthly-highlights-oct-2023/#:~:text=October%202023%20Events-,QCon%20San%20Francisco,-Oct%206%2C%202023",
  },
  {
    id: 59,
    imgLink: "",
    imgAlt: "",
    labelText: "Orkes x OpinHacks",
    labelDate: "Sep 29, 2023",
    heading: "Orkes x OpinHacks Hackathon",
    description:
      "We concluded September with an exhilarating Hackathon, partnering with OpinHacks, the James Bond of hackathons. This thrilling 36-hour Conductor hacking event commenced on September 29, 2023, in Chhattisgarh, India. With a wide-ranging theme spanning Finance to AI/ML, this hackathon presents an exceptional opportunity for participants to immerse themselves in learning and coding on groundbreaking tech solutions.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/orkes-monthly-highlights-september-2023/#:~:text=Orkes%20x%20Opinhack%20Hackathon",
  },
  {
    id: 60,
    imgLink: "",
    imgAlt: "",
    labelText: "Conductor Meetup",
    labelDate: "Sep 26, 2023",
    heading: "Conductor Meetup | Orkes x Netflix",
    description:
      "Co-organized by Orkes and Netflix Engineering, the Conductor Meetup for Q3 took place on Sep 26, 2023. The meetup featured industry professionals who shared their success stories, illuminating how Conductor revolutionized their development and deployment process. The meetup was an excellent opportunity for all microservices enthusiasts to network & collaborate with the community.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/orkes-monthly-highlights-september-2023/#:~:text=Conductor%20Meetup%20%7C%20Orkes%20x%20Netflix",
  },
  {
    id: 61,
    imgLink: "",
    imgAlt: "",
    labelText: "London Meetup",
    labelDate: "Sep 13, 2023",
    heading: "Microservices and Orkes Conductor Meetup London",
    description:
      "In collaboration with API Days London, we hosted our in-person meetup in London on Sep 13, 2023. We had a great panel of speakers featuring Ben Pirt from Made Tech and Viren Baraiya & Olivier Poupeney from Orkes. The talks and discussions were related to real-world scalable app development, AI Orchestration, and the seamless integration of Conductor for intelligent and automated decision-making within everyday business operations.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/orkes-monthly-highlights-september-2023/#:~:text=Microservices%20and%20Orkes%20Conductor%20Meetup%20London",
  },
  {
    id: 62,
    imgLink: "",
    imgAlt: "",
    labelText: "Paris Meetup",
    labelDate: "Aug 23, 2023",
    heading: "Orkes Conductor Developer Meetup Paris",
    description:
      "Our first in-person Orkes Conductor Developer Meetup in Europe was in the enchanting city of Paris on August 23, 2023. This event served as a gathering point for developers eager to explore the nuances of building distributed applications with microservices. A prominent focus of the meetup revolved around how Orkes Conductor adeptly tackles the prevalent challenges developers encounter when building intricate and mission-critical applications.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/orkes-monthly-highlights-august-2023/#:~:text=Orkes%20Conductor%20Developer%20Meetup%20Paris",
  },
  {
    id: 63,
    imgLink: "",
    imgAlt: "",
    labelText: "Singapore Meetup",
    labelDate: "Aug 4, 2023",
    heading: "Microservices and Distributed Applications Meetup Singapore",
    description:
      "In collaboration with Microsoft Singapore & Kubernetes User Groups Singapore, we hosted our first in-person meetup in Singapore, bringing together developers passionate about microservice-based applications. The meetup featured incredible sessions from prominent industry speakers and provided microservice enthusiasts with an excellent opportunity to network and learn.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/orkes-monthly-highlights-august-2023/#:~:text=Microservices%20and%20Distributed%20Applications%20Meetup%20Singapore",
  },
  {
    id: 64,
    imgLink: "",
    imgAlt: "",
    labelText: "NY JavaSIG",
    labelDate: "July 26, 2023",
    heading: "How Conductor and Spring Boot Can Rescue Subscription Chaos",
    description:
      "At the NY JavaSIG event, New York's Java community members had the opportunity to attend an informative session by Olivier Poupeney, the Head of DevRel. During the presentation, Olivier demonstrated how Conductor and Java Spring Boot could work together harmoniously to orchestrate a collection of microservices, using a monthly subscription use case as an example.",
    buttonText: "Watch now",
    buttonLink: "https://www.youtube.com/live/0gLMeSw-G5I?feature=share",
  },
  {
    id: 65,
    imgLink: "",
    imgAlt: "",
    labelText: "New York Meetup",
    labelDate: "July 19, 2023",
    heading: "Orkes Conductor Developer Meetup New York",
    description:
      "Our next in-person meetup was in New York City on July 19, 2023. The meetup was an excellent opportunity where we gathered passionate developers interested in building distributed applications using microservices. Olivier Poupeney, Head of Developer Relations at Orkes, delivered an insightful session on building distributed applications using Conductor.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/orkes-monthly-highlights-july-2023/#:~:text=July%202023%20Events-,New%20York%20Meetup,-July%2019%2C%202023",
  },
  {
    id: 66,
    imgLink: "",
    imgAlt: "",
    labelText: "APIDays Interface",
    labelDate: "June 28, 2023",
    heading: "Creating Resilient Distributed Applications",
    description:
      "With 4000+ attendees, Interface by APIDays was a platform to learn from the best about Business Models, Security & Identity Management, Digital Transformation, Microservices Architecture, and more. Olivier Poupeney, Head of Developer Relations at Orkes, delivered an informative session on building resilient distributed applications using Conductor.",
    buttonText: "Watch now",
    buttonLink: "https://youtu.be/kwpASJmf9u4",
  },
  {
    id: 67,
    imgLink: "",
    imgAlt: "",
    labelText: "Webinar",
    labelDate: "June 27, 2023",
    heading: "How Foxtel Accelerates Microservices and Workflow Orchestration",
    description:
      "Our first webinar was hosted in June 2023, where we featured how Foxtel, Australia’s most prominent media streaming company, leverages Conductor and Orkes Cloud to accelerate the creation and scaling of distributed applications.",
    buttonText: "Watch now",
    buttonLink:
      "https://orkes.io/meetups/webinar-foxtel-australia-accelerates-microservices-and-application-orchestration-june-27-2023",
  },
  {
    id: 68,
    imgLink: "",
    imgAlt: "",
    labelText: "Mumbai Meetup",
    labelDate: "June 24, 2023",
    heading: "Microservices and Distributed Applications Mumbai Meetup",
    description:
      "In collaboration with Azure Developer Community, our second in-person meetup was in Mumbai, India. We had a great panel of speakers featuring Ashish Tiwari from Elastic, Manan Bhatt & Altaf Alam Ansari from Orkes. The meetup was a great opportunity for people to network and learn about microservices & distributed applications.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/orkes-monthly-highlights-june-2023/#:~:text=microservice%2Dbased%20applications.-,Mumbai%20Meetup,-June%2024%2C%202023",
  },
  {
    id: 69,
    imgLink: "",
    imgAlt: "",
    labelText: "Developer Week Latin America",
    labelDate: "June 21, 2023",
    heading: "Accelerate Your Microservices Based Application Development",
    description:
      "We were part of Latin America’s largest developer and engineering conference, Developer Week. We were thrilled to have our CTO, Viren Baraiya, featured as a keynote speaker at the event, showcasing how Orkes can accelerate the speed of developing microservice-based applications.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/orkes-monthly-highlights-june-2023/#:~:text=Developer%20Week%20Latin%20America",
  },
  {
    id: 70,
    imgLink: "",
    imgAlt: "",
    labelText: "QCon New York",
    labelDate: "June 13-15, 2023",
    heading: "Creating Resilient Distributed Applications",
    description:
      "The 9th annual QCon New York was held in June 2023, and our team was thrilled to meet like-minded individuals and form new partnerships. In an informative talk, Viren Baraiya, our CTO, covered how Orkes Conductor can be used to build resilient distributed applications.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/orkes-monthly-highlights-june-2023/#:~:text=development%20and%20scaling.-,QCon%20New%20York,-June%2013%2D15",
  },
  {
    id: 71,
    imgLink: "",
    imgAlt: "",
    labelText: "Microsoft Build",
    labelDate: "May 23-25, 2023",
    heading: "Building Distributed Applications using Orchestration",
    description:
      "Our team had a great time at Microsoft Build 2023, an excellent opportunity to connect with experts from the developer community. We were overwhelmed by the love shown by the people who visited our stall. Our CTOs, Boney & Viren, captivated the audience with informative talks on building distributed applications using orchestration.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/microsoft-build-and-gartner-summit-recap/",
  },
  {
    id: 72,
    imgLink: "",
    imgAlt: "",
    labelText: "Gartner Summit 2023 - US",
    labelDate: "May 22-24, 2023",
    heading: "Power Your Digital Transformation",
    description:
      "Gartner Application Innovation & Business Solutions Summit was an excellent opportunity to connect and engage with Gartner experts and industry-leading software professionals around the globe. Viren, CTO at Orkes, shared an insightful talk on “Power Your Digital Transformation with Orkes Application Orchestration Platform.”",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/microsoft-build-and-gartner-summit-recap/",
  },
  {
    id: 73,
    imgLink: "",
    imgAlt: "",
    labelText: "Conductor Meetup",
    labelDate: "May 9, 2023",
    heading: "Conductor Meetup | Orkes x Netflix",
    description:
      "Conductor Meetup, co-organized by Orkes and Netflix Engineering, featured industry professionals who shared their success stories on how Conductor revolutionized their development and deployment processes. The meetup was a collaboration opportunity for the participants to engage in lively discussions through Q & A sessions.",
    buttonText: "Watch now",
    buttonLink: "https://www.youtube.com/watch?v=q6N2qrrlWwA",
  },
  {
    id: 74,
    imgLink: "",
    imgAlt: "",
    labelText: "Bangalore Meetup",
    labelDate: "April 30, 2023",
    heading: "Building Event Driven Distributed Applications with Conductor",
    description:
      "In collaboration with Google Developers, we hosted our first in-person event of the year in Bengaluru, India. The panel of speakers included Joinal Ahmed from Google and Bimal Gupta from Cimpress. We also had an insightful talk on “Building Event Driven Distributed Applications with Conductor” from Manan Bhatt, Orkes.",
    buttonText: "Read more",
    buttonLink: "https://orkes.io/blog/orkes-bangalore-meetup/",
  },
  {
    id: 75,
    imgLink: "",
    imgAlt: "",
    labelText: "Microsoft Reactor",
    labelDate: "Apr 18, 2023",
    heading: "Resiliency at Scale with Netflix Conductor",
    description:
      "We concluded the Microsoft Reactor talk series with a talk on strategies for building resilient, distributed, stateful applications in a hybrid cloud environment at scale using Netflix Conductor. We also touched on the architecture of Netflix Conductor and its native error-handling capabilities.",
    buttonText: "Watch now",
    buttonLink: "https://www.youtube.com/watch?v=R2yWX3ZrVrU",
  },
  {
    id: 76,
    imgLink: "",
    imgAlt: "",
    labelText: "GDSC WOW Pune",
    labelDate: "Apr 16, 2023",
    heading: "Microservices Demystified: Understanding the Basics and Benefits",
    description:
      "We were at GDSC WOW Pune, India, where our team delivered an insightful session on the revolutionary approach to application development with microservices. The talk covered the fundamentals of microservices, their benefits, and how they can be utilized to build robust and scalable applications.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/orkes-monthly-highlights-april-2023/#:~:text=orchestration%20using%20Conductor.-,GDSC%20WOW%20Pune,-Pune%2C%20India",
  },
  {
    id: 77,
    imgLink: "",
    imgAlt: "",
    labelText: "Microsoft Reactor",
    labelDate: "Apr 11, 2023",
    heading: "Building the Orkes SaaS Platform using Orchestration",
    description:
      "Our CTO, Boney, delivered the second talk of the Microsoft Reactor series about building Orkes SaaS platform using Netflix Conductor. The talk covered how Conductor boosts your system’s velocity, orchestrates services spanning languages, frameworks & clouds, and how you can use it to build a SaaS platform.",
    buttonText: "Watch now",
    buttonLink: "https://www.youtube.com/watch?v=CoFFIi0NFPQ",
  },
  {
    id: 79,
    imgLink: "",
    imgAlt: "",
    labelText: "Microsoft Reactor",
    labelDate: "Apr 4, 2023",
    heading: "How to (not) build a distributed monolith",
    description:
      "We were at Microsoft Reactor over a series of talks in April 2023. The first talk, delivered by our CTO Viren, centered on the challenges of distributed monoliths and how an eventing system with an orchestrator like Netflix Conductor can overcome these challenges to build a distributed stateful application.",
    buttonText: "Watch now",
    buttonLink: "https://www.youtube.com/watch?v=O0S9fscZ_mU",
  },
  {
    id: 80,
    imgLink: "",
    imgAlt: "",
    labelText: "Pune FOSS",
    labelDate: "Apr 1, 2023",
    heading:
      "From Monoliths to Microservices: Orchestrating Your Way to Success",
    description:
      "We recently participated in Pune FOSS, which brings software developers, enthusiasts, and communities together for networking and learning about free open-source software. We tapped into the concepts of monoliths and microservices and introduced workflow orchestration using Netflix Conductor.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/orkes-monthly-highlights-april-2023/#:~:text=Reactor%20YouTube%20channel.-,Pune%20FOSS,-Pune%2C%20India",
  },
  {
    id: 81,
    imgLink: "",
    imgAlt: "",
    labelText: "GDSC WOW Visakhapatnam",
    labelDate: "Mar 24, 2023",
    heading:
      "From Monoliths to Microservices: Orchestrating Your Way to Success",
    description:
      "GDSC WOW is an annual collaboration that exposes graduate/undergraduate students to the latest technological trends. We were at the first talk of the GDSC WOW series in Visakhapatnam, India. Our team delivered a talk that covered the shift from a monolithic architecture to microservices.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/content/blog/orkes-monthly-highlights-march-2023#gdsc-wow-visakhapatnam",
  },
  {
    id: 82,
    imgLink: "",
    imgAlt: "",
    labelText: "API Secure",
    labelDate: "Mar 15, 2023",
    heading: "API Orchestration: to build resilient applications",
    description:
      "With over 1800+ attendees from over 50+ countries, APIsecure was a ground for the world’s security unicorns to collaborate and network with users. We presented an insightful talk on how API orchestration can help developers build scalable, resilient applications.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/content/blog/orkes-monthly-highlights-march-2023#api-secure",
  },
  {
    id: 83,
    imgLink: "",
    imgAlt: "",
    labelText: "Developer Week",
    labelDate: "Feb 16, 2023",
    heading: "Building & Scaling Distributed Stateful Applications",
    description:
      "With 8000+ attendees from over 115+ countries, the conference was a platform for networking, learning & upgrading skills. At the API & Microservices session, Viren Baraiya, our CTO, presented a talk about some of the best practices in building distributed stateful applications.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/content/blog/orkes-monthly-highlights-february-2023#developerweek-2023",
  },
  {
    id: 84,
    imgLink: "",
    imgAlt: "",
    labelText: "Conductor Developer Meetup | Netflix x Orkes",
    labelDate: "Jan 24, 2023",
    heading: "Automating Application Bootstrapping using Conductor",
    description:
      "The first Orkes event of the year, “Conductor Developer Meetup”, featured Joseph Karp, DevOps Architect at United Wholesale Mortgage (UWM), who shared his experience on how the UWM team was able to automate application bootstrapping with Conductor. Viren Baraiya, CTO at Orkes, introduced the new add-ons with Conductor.",
    buttonText: "Watch now",
    buttonLink: "https://www.youtube.com/watch?v=SevjSRLInMM",
  },
  {
    id: 85,
    imgLink: "",
    imgAlt: "",
    labelText: "Google Cloud Startup Community",
    labelDate: "Dec 7, 2022",
    heading: "Scale & grow your business with Conductor delivered by Orkes",
    description:
      "Viren Baraiya, CTO at Orkes, shared his learnings on building Orkes at the Google Cloud Startup Community Event in Mountain View, CA. Viren, as a panelist, addressed a crowd of 400 early-stage founders and venture capitalists on how Conductor helps startups to scale using cloud services across any provider.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/orkes-monthly-highlights-dec-2022/#:~:text=and%20resilient%20applications.-,Google%20Cloud%20for%20Startup%20Community,-Dec%208%2C%202022",
  },
  {
    id: 86,
    imgLink: "",
    imgAlt: "",
    labelText: "DevFest 2022",
    labelDate: "Nov - Dec 2022",
    heading: "Building Distributed Applications 10x Faster",
    description:
      "We were represented at the DevFests by Cherish Santoshi, our Developer Relations Engineer, who delivered talks on building distributed applications 10x faster using Conductor. The talk revolved around the age of monoliths, monolithic challenges, and how it moved from monoliths to microservices.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/content/blog/devfests-in-2022-and-orkes-a-recap",
  },
  {
    id: 87,
    imgLink: "",
    imgAlt: "",
    labelText: "Developer Week 2022",
    labelDate: "Nov 16, 2022",
    heading: "Building a SaaS platform using Orchestration",
    description:
      "Netflix Conductor OSS, an orchestration platform, was built to increase engineering velocity while maintaining quality & dev team efficiency, helping Netflix scale to what it is today. Now how do you build a SaaS platform using orchestration?",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/november-2022-updates-see-what-the-orkes-team-has-been-up-to/#:~:text=environments%2C%20microservices%20%26%20languages.-,DeveloperWeek%20Enterprise%202022,-Nov%2016%2D17",
  },
  {
    id: 88,
    imgLink: "",
    imgAlt: "",
    labelText: "API World 2022",
    labelDate: "Nov 3, 2022",
    heading: "Build resilient and scalable applications using Orchestration",
    description:
      "We were at the API World 2022, San Jose, CA. We met with many people and shared insights to build resilient, distributed stateful applications in a hybrid cloud environment at a scale that powers the likes of Netflix and many other businesses at scale.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/november-2022-updates-see-what-the-orkes-team-has-been-up-to/#:~:text=resilient%20%26%20scalable%20applications.-,API%20World%202022,-Oct%2025%20%2D%20Nov",
  },
  {
    id: 89,
    imgLink: "",
    imgAlt: "",
    labelText: "Kubecon 2022",
    labelDate: "Oct 24, 2022",
    heading: "Unleash your workflows, at any cloud, at any scale",
    description:
      "GE Healthcare, Netflix, Tesla, GitHub, and LinkedIn leverage the Netflix Conductor, an open-source platform, to accelerate the time to market their workflows with high accuracy. Connect with us to know why businesses of all sizes choose Conductor delivered by Orkes Cloud to build highly resilient, reliable and scalable applications.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/november-2022-updates-see-what-the-orkes-team-has-been-up-to/#:~:text=KubeCon%20and%20CloudNativeCon%202022",
  },
  {
    id: 90,
    imgLink: "",
    imgAlt: "",
    labelText: "IBC",
    labelDate: "Sep 9-12, 2022",
    heading: "Assemble your workloads in the cloud.",
    description:
      "With over 37000+ attendees from 170 countries worldwide, IBC2022 was an excellent opportunity for the team at Orkes to meet with customers and industry experts in the media space. At IBC, we showcased how Conductor can be custom tailored to meet various organizations' workflow needs.",
    buttonText: "Read more",
    buttonLink:
      "https://orkes.io/blog/november-2022-updates-see-what-the-orkes-team-has-been-up-to/#:~:text=Orkes%20and%20MongoDB.-,IBC2022,-Sep%209%2D12",
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
              ({ id, imgLink, imgAlt, description, buttonText }) => (
                <div
                  key={id}
                  className="flex justify-center items-center gap-8 py-3.5"
                >
                  <img
                    src={imgLink}
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
                  imgLink,
                  imgAlt,
                  labelText,
                  labelDate,
                  heading,
                  description,
                  buttonText,
                  buttonLink,
                }) => (
                  <div key={id} className="font-light mb-28">
                    <img
                      src={imgLink}
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
                        to={buttonLink}
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
