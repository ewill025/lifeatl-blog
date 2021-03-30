import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.css";
import { Slider } from "./Carousel.component.js";
import BlogPreviewList from "./blog-preview-list";
import UpcomingEvents from "./UpcomingEvents";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="container mx-auto font-medium">
        <Slider />
        <UpcomingEvents/>
        <div className="container w-11/12 px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl lg:text-5xl font-medium title-font mb-4 text-black">
              WHO WE ARE
            </h1>
          </div>
          <div className="flex flex-wrap divide-x divide-green-700">
            <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6">
              <h2 className=" text-center text-lg sm:text-xl text-green-700 font-medium title-font font-bold py-6 mb-2">
                CULTURE
              </h2>
              <p className="leading-relaxed text-base uppercase mb-4">
                whether your just starting with your business or even if you’ve
                been grinding for years LifeATL wants to bring everyone
                together.
              </p>
            </div>
            <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6">
              <h2 className=" text-center text-lg sm:text-xl font-bold text-green-700 font-medium title-font py-6 mb-2">
                COMMUNITY
              </h2>
              <p className="leading-relaxed text-base uppercase mb-4">
                Our purpose is to create a community of rising entrepreneurs
                that support one another and their respective communities.
              </p>
            </div>
            <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6">
              <h2 className=" text-center font-bold text-lg sm:text-xl text-green-700 font-medium title-font py-6 mb-2">
                CONTENT
              </h2>
              <p className="leading-relaxed text-base uppercase mb-4">
                We want to give people a platform/organization they can count on
                to help them with brand exposure, events, and most importantly
                help people generate success through their vision.
              </p>
            </div>
            <div className="col-span-3 text-center border-none ">
              <p className="p-5 mx-auto lg:text-lg sm:text-sm">
                We bring passion, confidence, and the ability to reach out and
                work with anyone professionally. We strive to connect others as
                well as maximize exposure for all parties involved.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-11/12 h-fill mx-auto border-b-2 border-green-700 py-5">
          <h1 className="uppercase text-3xl">Latest Blog Posts</h1>
        </div>
        <div className="w-11/12 h-fill mx-auto py-6 ">
          <BlogPreviewList />
        </div>
      </div>
    );
  }
}
export default Home;
