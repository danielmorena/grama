import type { CollectionConfig } from 'payload'

import { ScopeServiceVisualIdentity } from '../components/blocks/ScopeServiceVisualIdentity.schema'
import { ScopeServiceTechnicalProject } from '../components/blocks/ScopeServiceTechnicalProject.schema'
import { ScopeServiceWebsite } from '../components/blocks/ScopeServiceWebsite.schema'
import { ScopeServiceConsultancy } from '../components/blocks/ScopeServiceConsultancy.schema'
import { ScopeServiceInteractiveInstallation } from '../components/blocks/ScopeServiceInteractiveInstallation.schema'
import { ScopeProductDigital } from '../components/blocks/ScopeProductDigital.schema'
import { RiderHardware } from '../components/blocks/RiderHardware.schema'
import { RiderSoftware } from '../components/blocks/RiderSoftware.schema'
import { RiderBundle } from '../components/blocks/RiderBundle.schema'

export const Proposal: CollectionConfig = {
  slug: 'proposal',
  access: {
    read: () => true,
  },
  fields: [
    // General Information Group
    {
      type: 'group',
      name: 'general_info',
      label: 'General Information',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Proposal Title',
        },
        {
          name: 'preambule',
          type: 'richText',
          label: 'Preamble',
        },
        {
          name: 'client_type',
          type: 'select',
          label: 'Proposal For',
          options: [
            { label: 'Select client type', value: 'none' },
            { label: 'Existing Client', value: 'existing' },
            { label: 'New Client', value: 'new' },
          ],
          defaultValue: 'none',
          required: true,
        },
        {
          name: 'clients',
          type: 'array',
          label: 'Existing Client',
          admin: {
            condition: (data) => data.general_info.client_type === 'existing',
          },
          fields: [
            {
              name: 'client',
              type: 'relationship',
              relationTo: 'client',
              label: 'Client',
            },
          ],
        },
        {
          name: 'requester',
          type: 'array',
          label: 'New Client Details',
          admin: {
            condition: (data) => data.general_info.client_type === 'new',
            initCollapsed: true,
          },
          fields: [
            { name: 'name', type: 'text', label: 'Name' },
            { name: 'email', type: 'email', label: 'Email' },
            { name: 'whatsapp', type: 'text', label: 'WhatsApp' },
          ],
        },
      ],
    },
    // Scope Group
    {
      type: 'group',
      name: 'scope_group',
      label: 'Scope',
      admin: {
        description: 'Add scope items from the product or services templates.',
      },
      fields: [
        {
          name: 'scope',
          type: 'blocks',
          label: 'Scope Items',
          admin: {
            initCollapsed: true,
          },
          blocks: [
            ScopeServiceVisualIdentity,
            ScopeServiceTechnicalProject,
            ScopeServiceWebsite,
            ScopeServiceConsultancy,
            ScopeServiceInteractiveInstallation,
            ScopeProductDigital,
          ],
        },
      ],
    },
    // Rider Group
    {
      type: 'group',
      name: 'rider_group',
      label: 'Rider',
      admin: {
        description: 'Add an optional hardware and software rider.',
      },
      fields: [
        {
          name: 'rider_description',
          type: 'richText',
          label: 'Rider Description',
        },
        {
          name: 'rider',
          label: 'Rider Items',
          type: 'blocks',
          admin: {
            initCollapsed: true,
          },
          blocks: [RiderHardware, RiderSoftware, RiderBundle],
        },
      ],
    },
    // Dates Group with side-by-side row
    {
      type: 'group',
      name: 'dates_group',
      label: 'Proposal Dates',
      admin: {
        description:
          'Dates are automatically set when the proposal is sent, accepted, or rejected.',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'date_sent',
              type: 'date',
              label: 'Sent Date',
              admin: { width: '33%', readOnly: true },
            },
            {
              name: 'date_accepted',
              type: 'date',
              label: 'Accepted Date',
              admin: { width: '33%', readOnly: true },
            },
            {
              name: 'date_rejected',
              type: 'date',
              label: 'Rejected Date',
              admin: { width: '33%', readOnly: true },
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'portfolio_group',
      label: 'Portfolio',
      admin: {
        description:
          'This section is used to present the proposal with minibio template, and portfolio related project samples.',
      },

      fields: [
        // Portfolio presentation options
        {
          name: 'portfolio_should_present_minibio',
          type: 'checkbox',
          label: 'Include Mini Bio',
          defaultValue: false,
        },
        {
          name: 'portfolio_should_present_related_projects',
          type: 'checkbox',
          label: 'Include Related Portfolio Projects',
          defaultValue: false,
        },
        {
          name: 'portfolio_presentation_items',
          type: 'relationship',
          relationTo: 'case',
          hasMany: true,
          label: 'Portfolio Projects',
          admin: { condition: (data) => data.portfolio_should_present_related_projects === true },
        },
      ],
    },
  ],
}
