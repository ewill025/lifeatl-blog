import sanityClient from "../client.js"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)

export function imageUrlFor (source) {
  return builder.image(source)
}
