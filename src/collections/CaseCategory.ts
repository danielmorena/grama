import type { CollectionConfig } from 'payload'

export const CaseCategory: CollectionConfig = {
  slug: 'caseCategory',
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
