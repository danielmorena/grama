import type { CollectionConfig } from 'payload'

export const RiderTag: CollectionConfig = {
  slug: 'RiderTag',
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
