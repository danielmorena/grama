import type { CollectionConfig } from 'payload'

export const Rider: CollectionConfig = {
  slug: 'Rider',
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
