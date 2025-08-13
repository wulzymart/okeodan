import { anyone } from '@/access/anyone'
import { isSuperAdmin } from '@/access/isSuperAdmin'
import { slugField } from '@/fields/slug'
import type { CollectionConfig } from 'payload'

export const Communities: CollectionConfig = {
  slug: 'communities',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    create: isSuperAdmin,
    delete: isSuperAdmin,
    read: anyone,
    update: isSuperAdmin,
  },
  defaultPopulate: {
    name: true,
    description: true,
  },
  fields: [
    ...slugField('name'),
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'news',
      label: 'News',
      type: 'join',
      collection: 'news',
      on: 'communities',
    },
    {
      name: 'prides',
      label: 'Prides',
      type: 'join',
      collection: 'prides',
      on: 'communities',
    },
    {
      name: 'places',
      label: 'Places',
      type: 'join',
      collection: 'galleries',
      on: 'community',
      where: {
        type: {
          equals: 'place',
        },
      },
    },
    {
      name: 'events',
      label: 'Events',
      type: 'join',
      collection: 'galleries',
      on: 'community',
      where: {
        type: {
          equals: 'event',
        },
      },
    },
    {
      name: 'festivals',
      label: 'Festivals',
      type: 'join',
      collection: 'galleries',
      on: 'community',
      where: {
        type: {
          equals: 'festival',
        },
      },
    },
    {
      name: 'developments',
      label: 'Developments',
      type: 'join',
      collection: 'galleries',
      on: 'community',
      where: {
        type: {
          equals: 'development',
        },
      },
    },
  ],
}
