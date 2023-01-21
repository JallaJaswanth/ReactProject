import React from "react";
import "./hero.css";
import hero from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };

  return (
    <div className="HeroContainer">
      {/* Left side */}
      <div className="h_sides">
        <span className="text1">skin protection crem</span>
        <div className="text2">
          <span>Trendy Collections</span>
          <span>
            {" "}
            seedily say has suitable disposal and boy. Excercise joy man
            children rejoiced
          </span>
        </div>
      </div>
      {/* Wrapper */}
      <div className="wrapper">
        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          className="blueColor"
          transition={transition}
        ></motion.div>

        <motion.img
          transition={transition}
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          src={hero}
          alt="heroImage"
          width={600}
        />
        <motion.div
          transition={transition}
          initial={{ right: "4%" }}
          whileInView={{ right: "2%" }}
          className="cart2"
        >
          <RiShoppingBagFill />
          <div className="signup">
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>
      {/* Right Side */}
      <div className="h_sides">
        <div className="traffic">
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>
        <div className="customers">
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
