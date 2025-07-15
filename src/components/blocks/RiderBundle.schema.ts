import { Block } from 'payload'

export const RiderBundle: Block = {
  slug: 'RiderBundle',
  interfaceName: 'RiderBundle',
  labels: {
    singular: 'Bundle',
    plural: 'Bundles',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      localized: true,
    },
  ],
}
