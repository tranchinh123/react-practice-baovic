import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuLeft from "../components/MenuLeft";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <section>
        <div class="container">
          <div class="row">
            <MenuLeft />
            <Outlet />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default DefaultLayout;
