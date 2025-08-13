// storage-adapter-import-placeholder
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { News } from './collections/news'
import { Communities } from './collections/communities'
import { Prides } from './collections/prides'
import { Galleries } from './collections/galleries'
import { defaultLexical } from './fields/defaultLexical'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      title: 'Admin area | Oke-odan website',
      description: 'Admin area for Oke-odan Website',
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: '/Oke-odan-logo.png',
        },
      ],
    },
    components: {
      graphics: {
        Logo: '@/components/logo#Logo',
        Icon: '@/components/logo#Icon',
      },
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  collections: [Users, Media, News, Communities, Prides, Galleries],

  editor: defaultLexical,
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
