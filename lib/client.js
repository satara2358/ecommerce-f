import sanityClient from '@sanity/client';
import { createClient } from '@sanity/client';
// import ImageUrlBuilder  from "next-sanity-image";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '0hqruhsm',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);