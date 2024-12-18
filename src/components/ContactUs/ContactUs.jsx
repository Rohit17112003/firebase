import React from "react";
import ContactForm from "./ContactForm";
import Discover from "./Discover";
import OurOffice from "./OurOffice";
import GetTouch from "./GetTouch";
import ContactSlider from "./ContactSlider";
import ContactSliderTwo from "./ContactSliderTwo";

const ContactUs = () => {
  return (
    <>
      <GetTouch />
      <ContactSlider />
      <ContactForm />
      <ContactSliderTwo />
      <Discover />
      <OurOffice />
    </>
  );
};

export default ContactUs;
