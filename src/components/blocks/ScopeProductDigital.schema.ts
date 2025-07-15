import { Block } from 'payload'

export const ScopeProductDigital: Block = {
  slug: 'ScopeProductDigital',
  interfaceName: 'ScopeProductDigital',
  admin: {
    group: 'Products',
  },

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
