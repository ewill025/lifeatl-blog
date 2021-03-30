import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}


function Team() {
    const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,  
            "name": author->name,
            "authorImage": author->image,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
              
            }
        }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  });
    return (
        <div>
            
        </div>
    )
}

export default Team
