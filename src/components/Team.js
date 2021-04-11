import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";






function Team() {
    const [teamData, setTeam] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "team"]{
            title,
            name,
            slug,  
            profileImage{
                asset->{
                    _id,
                    url
                },
                alt
              
            }
        }`
      )
      .then((data) => setTeam(data))
      .catch(console.error);
  });
    return (
      <section className="container  px-5 py-24 mx-auto">
      <div className="grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {teamData &&
          teamData.map((team, index) => (
            
            <article>
              <Link to={"/about/" + team.slug.current} key={team.slug.current}>
                <span
                  key={index}
                  className= "h-full flex flex-col text-center items-center"
                >
                  <img
                    src={team.profileImage.asset.url}
                    alt={team.profileImage.alt}
                    className="flex-shrink-0 rounded-full h-48 w-48 object-cover object-center mb-4"
                  />
<h1 className="title-font font-medium text-lg text-gray-900">
                      {team.name}
                    </h1>
                </span>
              </Link>
            </article>
          ))}
      </div>
    </section>
    

    )
}

export default Team
