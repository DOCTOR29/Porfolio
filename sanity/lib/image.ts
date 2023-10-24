import createImageUrlBuilder from '@sanity/image-url'
// import type { Image } from 'sanity'
import { useNextSanityImage } from 'next-sanity-image';
import { dataset, projectId } from '../env'
import { Image } from '@/typings';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})




export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}
