import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            _id,
            releaseDate,
            body,
            slug,
            categories{
              asset->{
                _id,
                url
              }
            },
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
            
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <main classname="container mx-auto">
      <div className="block mb-5">
        <img
          src={singlePost.mainImage.asset.url}
          alt={singlePost.title}
          style={{ height: "600px", width: "1200px" }}
          className="mx-auto object-cover shadow-2xl"
        />
      </div>
      <div className="container mx-auto w-11/12 p-5">
        <article className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <h1 className="text-5xl font-blog font-bold p-5">
              {singlePost.title}
            </h1>
            <div className="p-5 font-blog">
              <div className="block font-blog prose prose-xl leading-relaxed">
                <BlockContent
                blocks={singlePost.body}
                serializers={serializers}
                {...sanityClient.sanity}
                projectId="x3paw0j9"
                dataset="production"
              />
                </div>
            </div>
          </div>
          <div className="p-5 divide-y-2 divide-gray-100">
            <p className="mb-10">{singlePost.releaseDate}</p>
            <div className="mb-10">
              <h3 className="mb-5 font-bold">Authors</h3>
              <img
                src={urlFor(singlePost.authorImage).url()}
                alt={singlePost.name}
                className="rounded-full h-16 w-16 object-cover inline-block"
              />
              <p className="inline-block pl-3">{singlePost.name}</p>
            </div>
            <div>
              <h3 className=" mb-5 font-bold">Categories</h3>
              <ul>
               
              </ul>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
