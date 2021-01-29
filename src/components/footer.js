import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-green-700 pt-8 pb-6 mt-20">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px", transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-green-700 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl text-white font-semibold">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-white">
                Find us on any of these platforms!
              </h5>
              <div className="mt-6">
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                    <a href="https://twitter.com/lifeatl_?lang=en/" target="_blank" rel="noreferrer">
                    <i className="flex fab fa-twitter"></i>
                    </a>
                  
                </button>
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                    <a href="https://www.facebook.com/LifeATL229/" target="_blank" rel="noreferrer">
                        <i className="flex fab fa-facebook-square"></i>
                    </a>
                  
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                    <a href="https://www.instagram.com/lifeatl/?hl=en" target="_blank" rel="noreferrer">
                        
                  <i className="flex fab fa-instagram"></i>
                    </a>
                </button>
                <button
                  className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                    <a href="https://lifeatl.tumblr.com/" target="_blank" rel="noreferrer">
                        <i className="flex fab fa-tumblr"></i>
                    </a>
                  
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                         to="/Home">Home
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                         to="/about">About Us
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                         to="/blog">Blog
                      </Link>
                    </li>

                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                         to="/#">Shop
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                         to="/contact-us">Contact Us
                      </Link>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-white" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-white font-semibold py-1">
                Copyright © {new Date().getFullYear()}{" "}Life ATL Website by{" "}
                <a
                  href="https://www.ericwilliamsjr.dev"
                  className="text-white hover:text-gray-900"
                >
                  Eric Williams
                </a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}