import React from "react";
import Marigold from "../images/marigoldone.png";
import "../Nav.css";
import { FaUser } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Manbrand from "./Manbrand";
export const Nav = () => {
  return (
    <div className="bg-slate-900">
      <div className="nav pt-5">
        <div className="logo">
          <img src={Marigold} alt="O" />
        </div>
        <div className="lib-name text-5xl text-orange-400 mx-auto mb-2 text-center">
          <h1>MARIGOLD</h1>
        </div>
      </div>
      <div className="navbar flex justify-center py-3 align-center">
        <div>
          <ul className="flex gap-x-6 text-2xl text-orange-50 ">
            <li>Ladies</li>
            <li>Man</li>
            <li>Offer</li>
            <li>Sale</li>

            <li className="brand-list">
              Brands
              <div className="underline w-20 bg-red-800"></div>
              <div className="brands">
                <Manbrand />
              </div>
            </li>
          </ul>
        </div>

        <IconContext.Provider value={{ color: "orange", size: "25px" }}>
          <div className="flex gap-x-5 align-center">
            <FaUser />
            <FaShoppingBasket />
            <FaHeart />
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};
