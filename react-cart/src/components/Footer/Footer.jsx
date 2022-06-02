import { Icon } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  const navigate = useNavigate();
  let foot = [
    {
      title: "Faq",
      path: "/faq",
    },
    {
      title: "Career Opportunities",
      path: "/career",
    },

    {
      title: "Contact",
      path: "/contact",
    },
  ];
  const insta = () => {
    window.location.assign("https://www.instagram.com/");
  };
  const linkedin = () => {
    
    window.location.assign("https://www.linkedin.com/");
  };
  const fb = () => {
    window.location.assign("https://www.facebook.com/");
  };
  const twitter = () => {
    window.location.assign("https://www.twitter.com/");
  };
  const git = () => {
    window.location.assign("https://www.github.com/");
  };
  return (
    <div>
      <div className="footer">
        {foot.map((e) => {
          return <Link to={e.path}>{e.title}</Link>;
        })}
      </div>
      <div className="social">
        <Icon as={FaInstagramSquare} w={7} h={6} onClick={insta}></Icon>
        <Icon as={FaLinkedin} w={7} h={6} onClick={linkedin}></Icon>
        <Icon as={FaFacebook} w={7} h={6} onClick={fb}></Icon>
        <Icon as={FaTwitter} w={7} h={6} onClick={twitter}></Icon>
        <Icon as={FaGithub} w={7} h={6} onClick={git}></Icon>
      </div>
    </div>
  );
};

export default Footer;
