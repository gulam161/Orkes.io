import Footer from "../Footer";
import Header from "../Navigation/Header";
import Priced_Scale from "../Plateform/platform/Priced_Scale";
import FAQs from "./FAQs";
import Feature_Price_Table from "./Feature_Price_Table";
import SupportPlans from "./SupportPlans";

type Props = {};

export default function Pricing({}: Props) {
  return (
    <>
      <Header />
      <section className="">
        <div className="w-3/4 mx-auto flex_items_between max-lg:w-11/12">
          <Priced_Scale />
        </div>
        <div className="bg-stone-100/90 text-center py-16">
          <Feature_Price_Table />
        </div>
        <SupportPlans />
        <FAQs />
        <div className="pt-10 w-3/4 m-auto">
          <Footer />
        </div>
      </section>
    </>
  );
}
