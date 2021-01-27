import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function BlogPreviewList() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            releaseDate,
            excerpt,
            slug,
            body,
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

  if (!postData)
    return (
      <div>
        <h1>No Posts Yet!</h1>
      </div>
    );

  return (
    <div class="-my-8 grid grid-flow-row auto-rows-max md:auto-rows-min ">
      {postData &&
        postData.map((post, index) => (
          <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span>
                <img
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt}
                  className="lg:h-48 sm:h-36 lg:w-48 sm:w-36 object-cover object-center "
                />
              </span>

              <span class="mt-1 text-green-600 text-sm">
                {post.releaseDate}
              </span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-green-600 title-font mb-2">
                {post.title}
              </h2>
              <div class="leading-relaxed">
                <div>
                  {post.excerpt}
                </div>
                
              </div>
              <Link
                key={index}
                to={"/blog/" + post.slug.current}
                className="text-green-600 inline-flex items-center mt-4"
              >
                Read More
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}
