import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/tcs.png";
import Fiverr from "../../img/tcs.png";
import Amazon from "../../img/tcs.png";
import Shopify from "../../img/tcs.png";
import Facebook from "../../img/tcs.png";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for TCS
          </span>
          <span>Brands & Clients</span>
          <spane>
            Worked with many clients and gained knowledge in each and every part on my learning period
            <br />
            Always thinks out of the box and comes up with effective solutions             
            <br />
           Having good listening skills will help to understand information or new concepts quickly
            <br />
            Also makes enough effort to search for the best source of information
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>


          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}


          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
