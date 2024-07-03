import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { IoSend } from "react-icons/io5";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const templateParams = {
      from_name: form.current.user_name.value,
      from_email: form.current.user_email.value,
      message: form.current.message.value
    };

    console.log("Sending email with params:", templateParams);

    emailjs
      .send(
        "service_db7n7cr",
        "template_5zywsxd",
        templateParams,
        "Szy1X5mh23LS_av5S"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitMessage("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Failed to send message:", error);
          setSubmitMessage("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <StyledContactForm>
      <motion.h1 
       whileInView={{opacity:1, y:0}}
       initial={{opacity: 0, y:-100}}
       transition={{duration: 0.5}}
      className="mb-10 pb-10 text-5xl lg:text-6xl font-bold tracking-tight text-white justify-center ">Contact Me</motion.h1>
      <form ref={form} onSubmit={sendEmail}>
        <motion.label
         whileInView={{opacity:1, x:0}}
         initial={{opacity: 0, x:-20}}
         transition={{duration: 0.5}}
        htmlFor="user_name">Name</motion.label>
        <motion.input
         whileInView={{opacity:1, x:0}}
         initial={{opacity: 0, x:100}}
         transition={{duration: 1}}
        type="text" id="user_name" name="user_name" required />

        <motion.label
         whileInView={{opacity:1, x:0}}
         initial={{opacity: 0, x:-20}}
         transition={{duration: 0.5}}
        htmlFor="user_email">Email</motion.label>
        <motion.input 
         whileInView={{opacity:1, x:0}}
         initial={{opacity: 0, x:100}}
         transition={{duration: 1}}
        type="email" id="user_email" name="user_email" required />

        <motion.label
         whileInView={{opacity:1, x:0}}
         initial={{opacity: 0, x:-20}}
         transition={{duration: 0.5}}
        htmlFor="message">Message</motion.label>
        <motion.textarea
         whileInView={{opacity:1, x:0}}
         initial={{opacity: 0, x:100}}
         transition={{duration: 1}}
        id="message" name="message" required />

        <motion.button
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
        type="submit" className="send-button" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"} <IoSend />
        </motion.button>
      </form>
      {submitMessage && <p className="submit-message">{submitMessage}</p>}
      <div className="or">Or</div>
      <motion.div
       whileInView={{opacity:1, x:0}}
       initial={{opacity: 0, x:100}}
       transition={{duration: 1, delayChildren: 100}}
      className="email-info">
        <p style={{ fontSize: "1rem", marginTop: "1rem" }}>
          Email:{" "}
          <a href="mailto:riteshbhadanaa@gmail.com" style={{ color: "white" }}>
            <strong>riteshbhadanaa@gmail.com</strong>
          </a>
        </p>
      </motion.div>
    </StyledContactForm>
  );
};

const StyledContactForm = styled.div`
  width: 270px;
  margin: auto;

  .contact-header {
    text-align: center;
    margin-bottom: 3rem;
    margin-top: 100px;
    font-weight: bold;
    font-size: 2.8rem;
  }

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    margin-bottom: 30px;

    label {
      margin-top: 1.5rem;
    }

    input,
    textarea {
      width: 100%;
      padding: 5px; /* Adjust padding to reduce white box size */
      outline: none;
      border-radius: 10px;
      border: 1px solid rgb(220, 220, 220);
      font-family: Arial, sans-serif;
      font-size: 16px;
      color: #000;
      background-color: #fff;

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    .send-button {
      margin-top: 1.5rem; /* Adjust margin top for button alignment */
      cursor: pointer;
      background: linear-gradient(90deg, #4caf50, #81c784);
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 30px;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      transition: background 0.3s, transform 0.3s;

      &:hover:not(:disabled) {
        background: linear-gradient(90deg, #388e3c, #66bb6a);
        transform: translateY(-2px);
      }

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }

      svg {
        font-size: 1.5rem;
      }
    }
  }

  .submit-message {
    text-align: center;
    margin-top: 1rem;
    font-weight: bold;
  }

  .or {
    text-align: center;
    margin-top: 1.5rem; /* Adjust margin top for "Or" text */
    margin-bottom: 1rem;
    font-weight: bold;
  }

  .email-info {
    text-align: center;
    margin-top: 1.5rem; /* Adjust margin top for email info */
    font-size: 1.2rem;
    color: white;
  }

  .email-info a {
    text-decoration: none;
  }
`;

export default Contact;
