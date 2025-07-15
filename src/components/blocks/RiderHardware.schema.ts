import { Block } from 'payload'

export const RiderHardware: Block = {
  slug: 'RiderHardware',
  interfaceName: 'RiderHardware',
  labels: {
    singular: 'Hardware',
    plural: 'Hardwares',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      localized: true,
    },
  ],
}
