import React from "react";
import BodyPart from "../components/BodyPart";
import Footer from "../components/footer";
import Header from "../components/header";
import Midbody from "../components/midBody";
import Newsletter from "../components/newsletter";
import Payment_section from "../components/payment_sec";

export default function About() {
  return (
    <div>
      <Header />
      <BodyPart />
      <Midbody />
      <Payment_section />
      <Newsletter />
      <Footer/>
    </div>
  );
}
