import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RegisterForm from "../../components/Form/RegisterForm";
import LoginForm from "../../components/Form/LoginForm";

const LoginRegisterPage = () => {
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <div className="row" style={{ display: "flex" }}>
            <RegisterForm />
            <LoginForm />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default LoginRegisterPage;
