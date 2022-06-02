import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa" 
import { Icon } from "@chakra-ui/react";
const Navbar = () => {
  const navigate=useNavigate()
  let nav = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Mens",
      path: "/mens",
    },
    {
      title: "Womens",
      path: "/womens",
    },
  
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const cartClick=()=>{
    navigate("/cart")
  }
  return (
    <div>
      <div className="navbar">
        <div className="left">Clothing</div>
        <div className="right">
          {nav.map((e) => {
            return (
              <div key={e.title}>
                <Link to={e.path}>{e.title}</Link>
              </div>
              
            );
            
          })}
          <Icon as={FaShoppingCart} w={7} h={6} onClick={cartClick} ></ Icon >
        </div>
      </div>
    </div>
  );
};

export default Navbar;
