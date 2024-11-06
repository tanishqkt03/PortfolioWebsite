import React from "react";
import Navbar from "./Navbar";

function Contact() {
  return (
    <div>
      {/* Pass isContactPage as true to always redirect to home page */}
      <Navbar isContactPage={true} />
      <div className="spline-contact">
      <spline-viewer
        className="spline-container"
        url="https://prod.spline.design/NHdOKupGXbxGDYpW/scene.splinecode"
      ></spline-viewer>
      </div>
     
    </div>
  );
}

export default Contact;
