import React from "react";
import Team from "./Team"
import "./about.css";

export default function About() {
  return (
    <div className="container mx-auto p-5 w-11/12">
      <div className="container">
        <h1 className="uppercase my-5 py-6 text-5xl font-bold border-b-2 border-green-600">
          About Us
        </h1>

        <div className="px-5 py-24 mx-auto font-medium text-lg text-gray-900">
          <p className="leading-relaxed uppercase mb-4">
            LifeATL is an upcoming platform connecting rising entrepreneurs with
            each other and maximizing brand exposure. We provide rising
            entrepreneurs with a platform to connect with companies of
            compatible interests and further advance company development and
            exposure.
          </p>
          <p className="leading-relaxed uppercase mb-4">
            We want to give people a platform/organization they can count on to
            help them with brand exposure, help them curate events catering to
            their brand, and most importantly help people generate success
            through their vision.
          </p>

          <p className="leading-relaxed uppercase mb-4">
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
        <h1 className="uppercase my-10 py-6 font-bold text-5xl border-b-2 border-green-600">
          Meet The Team
        </h1>
        <Team/>
        
      </div>
    </div>
  );
}
