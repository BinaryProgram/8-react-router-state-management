import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl container mx-auto grow">
        <Header></Header>
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Root;
