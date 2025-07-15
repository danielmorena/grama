import { Block } from 'payload'

export const ScopeServiceInteractiveInstallation: Block = {
  slug: 'ScopeServiceInteractiveInstallation',
  interfaceName: 'ScopeServiceInteractiveInstallation',
  admin: {
    group: 'Services',
  },
  labels: {
    singular: 'Interactive Installation',
    plural: 'Interactive Installations',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      localized: true,
    },
  ],
}
