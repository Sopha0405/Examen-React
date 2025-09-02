import React from "react";
import Navbar from "../organisms/Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container my-4">{children}</main>
    </>
  );
}

export default Layout;
