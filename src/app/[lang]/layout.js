import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const Layout = ({ children, dict }) => {
  return (
    <>     
      {children}
      <Footer />
    </>
  );
};

export default Layout;
