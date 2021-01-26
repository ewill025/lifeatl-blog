import React from 'react'
import sanityClient from "../client.js"
import BlockContent from '@sanity/block-content-to-react'


const PortableText = ({blocks}) => (
  <BlockContent blocks={blocks}  {...sanityClient} />
)

export default PortableText
