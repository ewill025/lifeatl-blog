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
import "./about.css";

export default function About() {
  return (
    <div className="container mx-auto p-6 w-11/12">
      <div className="container">
        <h1 className="uppercase my-5 text-5xl font-bold border-b-2 border-green-600">
          About Us
        </h1>

        <div className=" container prose prose-lg sm:prose lg:prose-lg xl:prose-xl">
          <p>
            LifeATL is an upcoming platform connecting rising entrepreneurs with
            each other and maximizing brand exposure. We provide rising
            entrepreneurs with a platform to connect with companies of
            compatible interests and further advance company development and
            exposure.
          </p>
          <p>
            We want to give people a platform/organization they can count on to
            help them with brand exposure, help them curate events catering to
            their brand, and most importantly help people generate success
            through their vision.
          </p>

          <p>
            We want to start a community of rising entrepreneurs that support
            one another and their respective communities. We curated events
            bringing all models, photographers, videographers, public figures,
            influencers, etc. bringing everyone together is the main objective
            whether your just starting with your business or even if you’ve been
            grinding for years LifeATL wants to bring everyone together “EACH
            ONE, TEACH ONE” we grow everyday we can learn something everyday.
          </p>
        </div>
      </div>
      <div className="mx-auto uppercase ">
        <h1 className="uppercase my-10 font-bold text-5xl border-b-2 border-green-600">
          Meet The Team
        </h1>
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
