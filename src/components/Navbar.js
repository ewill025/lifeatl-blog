import React from "react";
import { NavLink } from "react-router-dom";
import  image  from "./images/LifeATL-Logo.png";

export default function Navbar() {
  return (
    <header className="relative bg-white pb-2 shadow-2xl ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-green-600 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <NavLink to="/" exact>
              <span class="sr-only">LifeATL</span>
              <img
                class="h-8 w-auto sm:h-16"
                src={image}
                alt="Life ATL Logo"
              />
            </NavLink>
            <nav className=" ml-10 hidden md:flex space-x-16 ">
              <NavLink
                className="text-base inline-flex items-center font-medium text-gray-500 hover:text-green-600"
                to="/"
                exact
              >
                Home
              </NavLink>
              <NavLink
                className="text-base inline-flex items-center font-medium text-gray-500 hover:text-green-600"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className="text-base inline-flex items-center font-medium text-gray-500 hover:text-green-600"
                to="/blog"
              >
                Blog
              </NavLink>
            </nav>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-green-600 hover:bg-black-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span class="sr-only">Open menu</span>

              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <NavLink
              to="/"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-green-600"
              exact
            >
              Shop
            </NavLink>
            <NavLink
              to="/contact"
              className=" ml-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-green-600"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>

      <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src={image}
                  alt="Life ATL"
                />
              </div>
              <div class="-mr-2">
                <button
                  type="button"
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols gap-y-4 gap-x-8">
              <NavLink
                className="text-base font-medium text-gray-500 hover:text-gray-900"
                to="/"
                exact
              >
                Home
              </NavLink>
              <NavLink
                className="text-base font-medium text-gray-500 hover:text-gray-900"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className="text-base font-medium text-gray-500 hover:text-gray-900"
                to="/blog"
              >
                Blog
              </NavLink>
              <NavLink
                className="text-base font-medium text-gray-500 hover:text-gray-900"
                to="/"
                exact
              >
                Shop
              </NavLink>
              <NavLink
                className="text-base font-medium text-gray-500 hover:text-gray-900"
                to="/contact"
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
