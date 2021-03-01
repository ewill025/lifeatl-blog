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
import "./about.css";

export default function About() {
  return (
    <div className="container mx-auto p-5 w-11/12">
      <div className="container">
        <h1 className="uppercase my-5 py-6 text-5xl font-bold border-b-2 border-green-600">
          About Us
        </h1>

        <div className="px-5 py-24 mx-auto">
          <p className="leading-relaxed text-base uppercase mb-4">
            LifeATL is an upcoming platform connecting rising entrepreneurs with
            each other and maximizing brand exposure. We provide rising
            entrepreneurs with a platform to connect with companies of
            compatible interests and further advance company development and
            exposure.
          </p>
          <p className="leading-relaxed text-base uppercase mb-4">
            We want to give people a platform/organization they can count on to
            help them with brand exposure, help them curate events catering to
            their brand, and most importantly help people generate success
            through their vision.
          </p>

          <p className="leading-relaxed text-base uppercase mb-4">
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
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/5 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  className="flex-shrink-0 rounded-full h-48 w-48 object-cover object-center mb-4"
                  src={image1}
                  alt="Ford"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Ford
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/5 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  className="flex-shrink-0 rounded-full h-48 w-48 object-cover object-center mb-4"
                  src={image2}
                  alt="Imani"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Imani
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/5 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  className="flex-shrink-0 rounded-full h-48 w-48 object-cover object-center mb-4"
                  src={image3}
                  alt="TJ"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    TJ
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/5 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  className="flex-shrink-0 rounded-full h-48 w-48 object-cover object-center mb-4"
                  src={image4}
                  alt="Brittney"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Brittney
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/5 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  className="flex-shrink-0 rounded-full h-48 w-48 object-cover object-center mb-4"
                  src={image5}
                  alt="Bryant"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Bryant
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/5 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  className="flex-shrink-0 rounded-full h-48 w-48 object-cover object-center mb-4"
                  src={image6}
                  alt="Erin"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Erin
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/5 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  className="flex-shrink-0 rounded-full h-48 w-48 object-cover object-center mb-4"
                  src={image7}
                  alt="Eric"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Eric
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/5 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  className="flex-shrink-0 rounded-full h-48 w-48 object-cover object-center mb-4"
                  src={image8}
                  alt="Shenelle"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Shenelle
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/5 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  className="flex-shrink-0 rounded-full h-48 w-48 object-cover object-center mb-4"
                  src={image9}
                  alt="Tyrell"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Tyrell
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/5 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  className="flex-shrink-0 rounded-full h-48 w-48 object-cover object-center mb-4"
                  src={image10}
                  alt="Dizzle"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Dizzle
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
