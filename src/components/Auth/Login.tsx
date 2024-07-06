import React from "react";
// import login_page from "../../assets/login-page.jpg";
import AuthLayout from "./layout";
import AuthForm from "./AuthForm";

const Login: React.FC = () => (
  <AuthLayout>
    <div className="w-full flex justify-around mt-10 mb-12 max-sm:px-8">
      <AuthForm
        type="login"
        title="Welcome back!"
        subtitle="Login"
        linkText="Sign up"
        linkTo="/sign-up"
      />
      <img
        src="https://cloud.orkes.io/static/media/login-page-image.e237d8fa70a2d2f8494ecd4a2c6c4a3d.svg"
        alt="Login Page"
        width={450}
        className="hidden lg:block"
      />
    </div>
  </AuthLayout>
);

export default Login;
