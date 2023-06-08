import React from "react";
import SignInNavbar from "../components/SignIn/SignInNavBar/SignInNavbar";
import BlogsContent from "../components/Blogs/BlogsContent/BlogsContent";
import FooterLearn from "../components/Learn/Footer/FooterLearn";

function Blogs() {
  return (
    <React.Fragment>
      <SignInNavbar />
      <BlogsContent />
      <FooterLearn />
    </React.Fragment>
  );
}

export default Blogs;
