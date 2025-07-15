import { Block } from 'payload'

export const ScopeServiceVisualIdentity: Block = {
  slug: 'ScopeServiceVisualIdentity',
  interfaceName: 'ScopeServiceVisualIdentity',
  admin: {
    group: 'Services',
  },

  labels: {
    singular: 'Visual Identity',
    plural: 'Visual Identities',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      localized: true,
    },
  ],
}
