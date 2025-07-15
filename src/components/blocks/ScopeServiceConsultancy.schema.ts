import { Block } from 'payload'

export const ScopeServiceConsultancy: Block = {
  slug: 'ScopeServiceConsultancy',
  interfaceName: 'ScopeServiceConsultancy',
  admin: {
    group: 'Services',
  },

  labels: {
    singular: 'Consultancy',
    plural: 'Consultancies',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      localized: true,
    },
  ],
}
