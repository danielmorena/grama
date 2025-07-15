import type { CollectionConfig } from 'payload'

export const Client: CollectionConfig = {
  slug: 'client',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
}
