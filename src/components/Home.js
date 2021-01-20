import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.css";
import { Slider } from "./Carousel.component.js";
import BlogPreviewList from "./blog-preview-list";
import "./home.css";




class Home extends Component {
  
  render() {
    return (
      <div className="container mx-auto space-y-5 font-medium">
        <Slider />
        <div className="w-10/12 h-fill mx-auto text-center uppercase rounded-none border border-opacity-25 border-green-600">
          <h3 className="uppercase my-14 text-5xl">Who We Are</h3>
          <div className="grid grid-cols-3 gap-4 divide-x divide-green-600 divide-opacity-25">
            <div>
              <h1 className="text-2xl">Culture</h1>
              <p className="p-5">
                whether your just starting with your business or even if you’ve
                been grinding for years LifeATL wants to bring everyone
                together.{" "}
              </p>
            </div>
            <div>
              <h1 className="text-2xl">Community</h1>
              <p className="p-5">
                Our purpose is to create a community of rising entrepreneurs
                that support one another and their respective communities.{" "}
              </p>
            </div>
            <div>
              <h1 className="text-2xl">Content</h1>
              <p className="p-5">
                We want to give people a platform/organization they can count on
                to help them with brand exposure, events, and most importantly
                help people generate success through their vision.
              </p>
            </div>
            <div className="col-span-3 ">
              <p className="p-5">
                We bring passion, confidence, and the ability to reach out and
                work with anyone professionally. We strive to connect others as
                well as maximize exposure for all parties involved.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-11/12 h-fill mx-auto border-b-2 border-green-600 py-5">
          <h1 className="uppercase text-3xl">Latest Blog Posts</h1>
        </div>
        <div className="w-11/12 h-fill mx-auto">
          <BlogPreviewList/>
        </div>
      </div>
    );
  }
}
export default Home;
