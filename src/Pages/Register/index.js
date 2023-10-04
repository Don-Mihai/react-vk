import "./Register.scss";
import Header from "../../components/Header";
import Footer from "./../../components/Footer";
import RegisterForm from "../../components/RegisterForm";

const Register = ({ register }) => {
  return (
    <div className="register">
      <Header></Header>
      <div className="register__vk">
        <div className="register__content">VK for mobile devices</div>
        <RegisterForm></RegisterForm>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
