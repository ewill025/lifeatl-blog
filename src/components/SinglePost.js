import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source);
}

export default function SinglePost() {
    const [ singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`).then((data) => setSinglePost(data[0]))
        .catch(console.error);
    }, [slug]);

    if (!singlePost) return <div>Loading...</div>;

    return(
        <main classname="">
            <article className="">
                <header className="">
                    <div className=" r">
                        <div className="">
                            <h1>{singlePost.title}</h1>
                            <div className="">
                                <img src={urlFor(singlePost.authorImage).url()}
                                alt={singlePost.name}/>
                                <p>{singlePost.name}</p>
                            </div>
                            
                        </div>
                    </div>
                    <img src={singlePost.mainImage.asset.url}
                    alt={singlePost.title}
                    style={{height: "400px" }}/>
                </header>
                <div>
                    <BlockContent blocks={singlePost.body} projectId="x3paw0j9" dataset="production"/>
                </div>
            </article>
        </main>
    )
}