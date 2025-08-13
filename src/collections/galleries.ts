import type { CollectionConfig } from 'payload'
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { generatePreviewPath } from '@/utilities/generatePreviewPath'
import { slugField } from '@/fields/slug'

export const Galleries: CollectionConfig = {
  slug: 'galleries',
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        return generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'galleries',
          req,
        })
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'galleries',
        req,
      }),
    useAsTitle: 'title',
  },
  access: {
    create: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
    delete: authenticated,
  },
  defaultPopulate: {
    title: true,
    description: true,
    images: true,
    videos: true,
    community: true,
    meta: {
      image: true,
      description: true,
    },
  },
  fields: [
    ...slugField(),
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      label: 'Gallery Type',
      admin: {
        position: 'sidebar',
      },
      type: 'select',
      options: [
        { label: 'Place', value: 'place' },
        { label: 'Event', value: 'event' },
        { label: 'Festival', value: 'festival' },
        { label: 'Development', value: 'development' },
      ],
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },

    {
      type: 'tabs',
      tabs: [
        {
          label: 'content',
          fields: [
            {
              name: 'images',
              type: 'array',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
              ],
              minRows: 1,
              required: true,
            },
            {
              name: 'videos',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  label: 'Video Title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'url',
                  label: 'Video URL',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'community',
      label: 'Community Involved',
      admin: {
        position: 'sidebar',
      },
      type: 'relationship',
      relationTo: 'communities',
      hasMany: false,
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
  ],
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
