import React from "react";
import image1 from "./images/Ford.jpg";
import image2 from "./images/Imani.jpg";
import image3 from "./images/TJ.jpg";
import image4 from "./images/Brittney.jpg";
import image5 from "./images/Bryant.jpg";
import image6 from "./images/Erin.jpg";
import image7 from "./images/Eric.jpg";
import image8 from "./images/Shanelle.jpg";
import image9 from "./images/Tyrelle.jpg";
import image10 from "./images/Dizzle.jpg";
import image11 from "./images/LifeATL-Logo.png";
import image12 from "./images/LifeATL-Logo.png";
import './about.css'


export default function About() {
  return (
    <div className="container mb-5">
      <div className="container text-center">
        <h2 className="text-uppercase text-center my-5 display-4">About Us</h2>
      </div>
      <div className="container">
        <div className="row text-uppercase">
          <div className="col-sm-12 col-lg-6">
            <img
              className="logo"
              src={"images/82910171_2635730663380811_8302267986140463104_o.jpg"}
              alt=""
            />
            <p className="about-text">
              {" "}
              LifeATL is an upcoming platform connecting rising entrepreneurs
              with each other and maximizing brand exposure. We Provide rising
              entrepreneurs with a platform to connect with companies of
              compatible interests and further advance company development and
              exposure.{" "}
            </p>
            <p className="about-text">
              We want to give people a platform/organization they can count on
              to help them with brand exposure, help them curate events catering
              to their brand, and most importantly help people generate success
              through their vision.
            </p>
          </div>
          <div className="col-sm-12 col-lg-6">
            <img
              className="models"
              src={"images/67753737_2481382922148920_7648432367207448576_o.jpg"}
              alt=""
            />
            <p className="about-text">
              We want to start a community of rising entrepreneurs that support
              one another and their respective communities. We curated events
              bringing all models, photographers, videographers, public figures,
              influencers, etc. bringing everyone together is the main objective
              whether your just starting with your business or even if you’ve
              been grinding for years LifeATL wants to bring everyone together
              “EACH ONE, TEACH ONE” we grow everyday we can learn something
              everyday.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="w-11/12 h-fill mx-auto uppercase ">
          <h1 className="uppercase text-center mb-5 text-3xl">Meet The Team</h1>
          <div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4">
            <img
              className="rounded-full h-48 w-48 object-cover"
              src={image1}
              alt=""
            />
             <img
              className="rounded-full h-48 w-48 object-cover"
              src={image2}
              alt=""
            />
             <img
              className="rounded-full h-48 w-48 object-cover"
              src={image3}
              alt=""
            />
             <img
              className="rounded-full h-48 w-48 object-cover"
              src={image4}
              alt=""
            />
            <img
              className="rounded-full h-48 w-48 object-cover"
              src={image5}
              alt=""
            />
             <img
              className="rounded-full h-48 w-48 object-cover"
              src={image6}
              alt=""
            />
             <img
              className="rounded-full h-48 w-48 object-cover"
              src={image7}
              alt=""
            />
             <img
              className="rounded-full h-48 w-48 object-cover"
              src={image8}
              alt=""
            />
              <img
              className="rounded-full h-48 w-48 object-cover"
              src={image9}
              alt=""
            />
             <img
              className="rounded-full h-48 w-48 object-cover"
              src={image10}
              alt=""
            />
             <img
              className="rounded-full h-48 w-48 object-cover"
              src={image11}
              alt=""
            />
             <img
              className="rounded-full h-48 w-48 object-cover"
              src={image12}
              alt=""
            />
          </div>
        </div>
    </div>
  );
}
