import React from "react";
import SignInNavbar from "../components/SignIn/SignInNavBar";
import SignInContent from "../components/SignIn/SignInContent";
import { titleHandler } from "../handler/titleHandler";

function SignUpSignIn() {
  titleHandler("Sign-In");

  return (
    <React.Fragment>
      <SignInNavbar />
      <SignInContent />
    </React.Fragment>
  );
}

export default SignUpSignIn;
