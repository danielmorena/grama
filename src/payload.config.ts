// storage-adapter-import-placeholder
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Proposal } from './collections/Proposal'
import { Client } from './collections/Client'
import { Case } from './collections/Case'
import { Hardware } from './collections/Hardware'
import { Software } from './collections/Software'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    autoLogin: { email: 'danielmorena@gmail.com', password: '123', prefillOnly: true },
    components: {
      beforeDashboard: ['/components/admin/beforeDashboard/Test.jsx'],
      beforeNavLinks: ['/components/admin/beforeNavLinks/Test.jsx'],
    },
  },
  collections: [Users, Media, Proposal, Client, Case, Hardware, Software],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [],
})
