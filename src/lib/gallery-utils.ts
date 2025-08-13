import { notFound } from 'next/navigation'
import { GalleryType } from '../app/(frontend)/communities/[slug]/actions'

export const galleryTypes: GalleryType[] = ['place', 'event', 'festival', 'development']

export function validateGalleryType(typeWithS: string): string {
  const type = typeWithS.slice(0, -1)
  if (!galleryTypes.includes(type as GalleryType)) throw notFound()
  return type
}
