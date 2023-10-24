import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url"
import { useNextSanityImage } from 'next-sanity-image';
export const config = {
    dataset: process.env.SANITY_STUDIO_DATASET || "production",
   
}
