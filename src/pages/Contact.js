import React from "react";
import Formulaire from "../components/Formulaire";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <h1 className="titre"> Me contacter</h1>
      <Formulaire />
    </div>
  );
};

export default Contact;
