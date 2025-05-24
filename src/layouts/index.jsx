import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuLeft from "../components/MenuLeft";
import MenuAcc from "../components/MenuAcc";

import { useLocation } from "react-router-dom";

const DefaultLayout = () => {
  const params = useLocation();

  return (
    <>
      <Header />
      <section>
        <div className="container">
          <div className="row">
            {params["pathname"].includes("account") ? (
              <MenuAcc />
            ) : (
              <MenuLeft />
            )}
            <Outlet />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default DefaultLayout;
