import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Blog() {
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

  if (!postData)
    return (
      <div>
        <h1>No Posts Yet!</h1>
      </div>
    );

  return (
    <main className="min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center mb-5 p-5">
          Welcome to Life ATL Blog
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="block h-64 relative shadow-2xl  leading-snug bg-white"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-fill h-fill rounded-none object-cover relative"
                    />

                    <span className="block relative h-full flex justify-between pr-4 pb-4 bg-white">
                      <div className="px-3 py-4">
                        <img
                          src={urlFor(post.authorImage).url()}
                          alt={post.name}
                          className="rounded-full h-12 w-12 object-cover  "
                        />
                      </div>

                      <h1 className="text-green-600 text-3xl font-blog px-3 py-4">
                        {post.title}
                      </h1>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
