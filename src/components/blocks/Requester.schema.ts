import { Block } from 'payload'

export const Requester: Block = {
  slug: 'Requester',
  interfaceName: 'Requester',
  labels: {
    singular: 'Digital Product',
    plural: 'Digital Products',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      localized: true,
    },
  ],
}
