import React from "react";
import SignInNavbar from "../components/SignIn/SignInNavBar";
import SignUpContent from "../components/SignUp/SignUpContent";
import { titleHandler } from "../handler/titleHandler";

function SignUp() {
  titleHandler("Sign-Up");

  return (
    <React.Fragment>
      <SignInNavbar />
      <SignUpContent />
    </React.Fragment>
  );
}

export default SignUp;
