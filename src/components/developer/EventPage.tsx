import React from "react";
import Header from "../Navigation/Header";

type EventPageProps = {};

const EventPage: React.FC<EventPageProps> = () => {
  return (
    <>
      <Header />
      <div className="bg-zinc-100/60">
        <section className="w-4/5 mx-auto flex_items_between max-lg:w-11/12">
          <div className="py-10">
            <h1 className="text-blue-800 text-3xl font-bold pb-12">
              Upcoming Events
            </h1>
            <div>
              <img src="" alt="" />
              <p>
                Join us at K8SUG Singapore for an in-person meetup to dive into
                how orchestration transcends infrastructure. Discover how
                orchestration can streamline end-to-end business processes by
                transforming them into distributed workflows, ultimately
                boosting developer productivity. Learn practical ways to enable
                observability and operational insight throughout these
                processes. Limited online slots are available.
              </p>
              <button className="uppercase bg-blue-800 rounded-xl text-white font-medium">
                Register Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default EventPage;
