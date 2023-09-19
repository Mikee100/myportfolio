import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contacts = () => {
  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_a911eb5",
        "template_ye9c297",
        e.target,
        "KeePPXIGkpTcoiTBJ"
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  const handleClickScroll = () => {
    const element = document.getElementById("container_home");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickScroll2 = () => {
    const element = document.getElementById("container_about");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickScroll3 = () => {
    const element = document.getElementById("container_experience");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickScroll4 = () => {
    const element = document.getElementById("container_project");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickScroll5 = () => {
    const element = document.getElementById("container_skills");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView();
      element.scrollIntoView(false);
      element.scrollIntoView({ block: "end" });
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
        transition: ".9s",
      });
    }
  };

  return (
    <div className="container_contacts" id="container_contacts">
      <h2 className="contact_hd">Contact me</h2>

      <form onSubmit={sendEmail}>
        <input type="text" placeholder="Name" className="name_field" />
        <input type="email" placeholder="Email" className="email_field" />
        <input type="text" placeholder="Messsage" className="message_field" />
        <button className="send"> Send Message </button>
      </form>
      <div className="socialmedia"></div>
      <div className="footer">
        <ul className="ul_pages">
          <p>Pages</p>
          <li className="li_pages" onClick={handleClickScroll}>
            {" "}
            Home{" "}
          </li>
          <li className="li_pages" onClick={handleClickScroll2}>
            {" "}
            About{" "}
          </li>
          <li className="li_pages" onClick={handleClickScroll3}>
            {" "}
            Experience{" "}
          </li>
          <li className="li_pages" onClick={handleClickScroll5}>
            {" "}
            Skills{" "}
          </li>
          <li className="li_pages" onClick={handleClickScroll4}>
            {" "}
            Projects{" "}
          </li>
        </ul>

        <ul className="media_icons">
          <p>Socials</p>
          <li>
            {" "}
            <a target="blank" href="https://github.com/Mikee100/utilitybank">
              {" "}
              <FaInstagram className="faicon" />
            </a>
          </li>
          <li>
            {" "}
            <a target="blank" href="https://github.com/Mikee100/utilitybank">
              <FaGithub className="faicon" />
            </a>
          </li>
          <li>
            {" "}
            <a target="blank" href="https://github.com/Mikee100/utilitybank">
              {" "}
              <FaLinkedin className="faicon" />
            </a>{" "}
          </li>
        </ul>

        <p className="copyright"> &copy;Copyright Shalene </p>
      </div>
    </div>
  );
};

export default Contacts;
