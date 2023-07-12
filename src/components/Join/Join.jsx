import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    // YOUR_SERVICE_ID : service_tuvy16o
    // YOUR_TEMPLATE_ID : template_svlt72a
    // Email js YOUR_PUBLIC_KEY: BOEy2NNYil6xsNbY3

    emailjs
      .sendForm(
        "service_tuvy16o",
        "template_svlt72a",
        form.current,
        "BOEy2NNYil6xsNbY3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
     
        <div>
          <span class="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>

        <div>
          <span>YOUR BODY</span>
          <span class="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email address..."
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
