import React from "react";
import { NavLink } from "react-router-dom";
import  image  from "./images/LifeATL-Logo.png";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
    <nav
      className={
        (props.white
          ? "top-0 absolute z-50 w-full"
          : "relative shadow-lg bg-white py-2 shadow-2xl") +
        " flex flex-wrap items-center justify-between py-4  px-6 navbar-expand-lg"
      }
    >
      <div className="container   px-6 py-4 mx-auto border-b-2 border-green-600 flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <NavLink to="/" exact>
              <span class="sr-only">LifeATL</span>
              <img
                class="h-8 w-auto sm:h-16"
                src={image}
                alt="Life ATL Logo"
              />
            </NavLink>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (props.transparent ? "text-green-700" : "text-green-700") +
                " fas fa-bars"
              }
            ></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-transparent lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:mr-auto">
            <li className="flex items-center">
              <NavLink
                className={
                  (props.transparent
                    ? "lg:text-black lg:hover:text-green-300 text-green-800"
                    : "text-black hover:text-green-700") +
                  " px-3 py-4 lg:py-2 items-center text-base uppercase flex font-bold"
                }
                to="/" exact
              >
              <span className="inline-block ml-2">Home</span>
              </NavLink>
              </li>
              <li className="flex items-center">
              <NavLink
                className={
                  (props.transparent
                    ? "lg:text-black lg:hover:text-green-300 text-green-800"
                    : "text-black hover:text-green-700") +
                  " px-3 py-4 lg:py-2 items-center text-base uppercase flex font-bold"
                }
                to="/about" 
              >
               <span className="inline-block ml-2">About</span>
              </NavLink>

              </li>
              <li className="flex items-center">
              <NavLink
                className={
                  (props.transparent
                    ? "lg:text-black lg:hover:text-green-300 text-green-800"
                    : "text-black hover:text-green-700") +
                  " px-3 py-4 lg:py-2 items-center text-base uppercase flex font-bold"
                }
                to="/blog" 
              >
                <span className="inline-block ml-2">Blog</span>
              </NavLink>
            </li>
          </ul>
          <ul className="flex  flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <NavLink
                className={
                  (props.transparent
                    ? "lg:text-black lg:hover:text-green-300 text-green-800"
                    : "text-black hover:text-green-700") +
                  " px-3 py-4 lg:py-2 flex items-center text-base uppercase font-bold"
                }
                to ="#"
              >
                <span className=" inline-block ml-2">Shop</span>
              </NavLink>
            </li>

            <li className="flex items-center">
              <NavLink
                className={
                  (props.transparent
                    ? "lg:text-black lg:hover:text-green-700 text-green-700"
                    : "text-black hover:text-green-700") +
                  " px-3 py-4 lg:py-2 flex items-center text-base uppercase font-bold"
                }
                to="/contact"
              >
                <span className="inline-block ml-2">Contact Us</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
    
  );
}
