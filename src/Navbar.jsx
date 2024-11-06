import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ isContactPage }) {
  const navigate = useNavigate();

  useEffect(() => {
    const buttons = document.querySelectorAll(".side-scroller button");

    const handleButtonClick = (e) => {
      const targetId = e.target.getAttribute("data-target");

      // If we are on the Contact page and the Contact button is clicked, do nothing
      if (isContactPage && targetId === "section4") {
        return; // Prevent navigation
      }

      // If we're not on the Contact page, we handle the button clicks normally
      if (isContactPage) {
        // Redirect all buttons to home page except "Contact"
        if (targetId !== "section4") {
          navigate("/");
        }
      } else {
        // If we're on the home page, implement scroll behavior or navigate to contact
        if (targetId && targetId !== "section4") {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          navigate("/contact"); // Navigate to the contact page
        }
      }
    };

    // Attach event listeners for the buttons
    buttons.forEach((button) => {
      button.addEventListener("click", handleButtonClick);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", handleButtonClick);
      });
    };
  }, [navigate, isContactPage]);

  return (
    <div className="side-scroller">
      <button data-target="section1">Home</button>
      <button data-target="section2">About</button>
      <button data-target="section3">Projects</button>
      <button data-target="section4">Contact</button>
    </div>
  );
}

export default Navbar;
