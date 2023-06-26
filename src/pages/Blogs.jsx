import React from "react";
import SignInNavbar from "../components/SignIn/SignInNavBar/SignInNavbar";
import BlogsContent from "../components/Blogs/BlogsContent/BlogsContent";
import FooterLearn from "../components/Learn/Footer/FooterLearn";
import { useLocation } from "react-router-dom";

function Blogs() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };

  return (
    <React.Fragment>
      <ScrollToTop />
      <SignInNavbar />
      <BlogsContent />
      <FooterLearn />
    </React.Fragment>
  );
}

export default Blogs;
