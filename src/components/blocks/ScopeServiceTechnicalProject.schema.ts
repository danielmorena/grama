import { Block } from 'payload'

export const ScopeServiceTechnicalProject: Block = {
  slug: 'ScopeServiceTechnicalProject',
  interfaceName: 'ScopeServiceTechnicalProject',
  admin: {
    group: 'Services',
  },

  labels: {
    singular: 'Technical Project',
    plural: 'Technical Projects',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      localized: true,
    },
  ],
}
