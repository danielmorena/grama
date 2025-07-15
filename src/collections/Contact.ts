import type { CollectionConfig } from 'payload'

export const Contact: CollectionConfig = {
  slug: 'Contact',
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
