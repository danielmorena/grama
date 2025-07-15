import { Block } from 'payload'

export const ScopeServiceWebsite: Block = {
  slug: 'ScopeServiceWebsite',
  interfaceName: 'ScopeServiceWebsite',
  admin: {
    group: 'Services',
  },

  labels: {
    singular: 'Website',
    plural: 'Websites',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      localized: true,
    },
  ],
}
