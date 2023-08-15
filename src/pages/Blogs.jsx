import React from "react";
import SignInNavbar from "../components/SignIn/SignInNavBar";
import BlogsContent from "../components/Blogs/BlogsContent";
import FooterLearn from "../components/Learn/Footer/FooterLearn";
import { useScrollToTop } from "../actions/actions";
import { titleHandler } from "../handler/titleHandler";

function Blogs() {
  useScrollToTop();
  titleHandler("Blogs");

  return (
    <React.Fragment>
      <SignInNavbar />
      <BlogsContent />
      <FooterLearn />
    </React.Fragment>
  );
}

export default Blogs;
