/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'
import createImageUrlBuilder from "@sanity/image-url"


const projectId = process.env.SANITY_STUDIO_PROJECT_ID 
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineCliConfig({ api: { projectId, dataset } })
export const urlFor = (source: any) => createImageUrlBuilder()