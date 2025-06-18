import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";

const Root = () => {
  return (
    <div>
      <section className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl container mx-auto">
        <Header></Header>
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Root;
