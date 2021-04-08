import BrandLight from "../../assets/images/logo/logo-light.png";
import BrandDark from "../../assets/images/logo/logo-dark.png";
import React, { useState, useEffect } from "react";
import { HiUser } from "react-icons/hi";
import { Link, Switch } from "react-router-dom";

export default function NavBar() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <Switch>
      <nav className={scroll ? "sticky_nav" : "header_nav w-100 d-flex "}>
        <div className="container d-flex item-center justify-between pr-15 pl-15 h-100 bs-bb">
          <Link to="/" className="nav_brand flex-1">
            <img
              className=" light-sticky d-none-md"
              src={BrandLight}
              alt="brand.com"
            />
            <img
              className="dark-sticky d-none d-block-md "
              src={BrandDark}
              alt="brand.com"
            />
          </Link>
          <div className="main_navigation d-flex pl-15 pr-15 bs-bb h-100 flex-3 flex-1-sm justify-content-end ">
            <ul className="header_ul d-flex d-none-md h-100 ">
              <li className="li_home li-style-none ps-relative">
                <Link to="/" className="no-underline text-white">
                  Home
                </Link>
              </li>
              <li className="li_company li-style-none">
                <Link to="/about" className="no-underline text-white">
                  Company
                </Link>
              </li>
              <li className="li_it_soloution li-style-none">
                <Link to="" className="no-underline text-white">
                  {" "}
                  IT Solutions
                </Link>
              </li>
              <li className="li_news li-style-none">
                <Link href="" className="no-underline text-white">
                  {" "}
                  News&Media
                </Link>
              </li>
              <li className="li-style-none">
                <Link href="" className="no-underline text-white">
                  {" "}
                  Features
                </Link>
              </li>
              <li className="li-style-none mr-0">
                <Link href="" className="no-underline text-white">
                  {" "}
                  Contacts
                </Link>
              </li>
            </ul>

            <ul className="nav_action_buttons li-style-none d-flex item-center h-100">
              <li className="ml-20 nav_action_btn_quote d-none-lg">
                <Link
                  href=""
                  className="nav_quote_btn btn no-underline bg-white text-black d-flex justify-center item-center"
                >
                  Request A Quote
                </Link>
              </li>
              <li className="ml-20 ">
                <button className="login_btn bg-trans text-white-lg ">
                  <i className="user_icon text-blue text-white-lg">
                    <HiUser />
                  </i>
                  <span>Login</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Switch>
  );
}
