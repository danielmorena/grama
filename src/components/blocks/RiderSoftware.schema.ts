import { Block } from 'payload'

export const RiderSoftware: Block = {
  slug: 'RiderSoftware',
  interfaceName: 'RiderSoftware',
  labels: {
    singular: 'Software',
    plural: 'Softwares',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      localized: true,
    },
  ],
}
