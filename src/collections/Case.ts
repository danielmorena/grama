import type { CollectionConfig } from 'payload'

export const Case: CollectionConfig = {
  slug: 'case',
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
