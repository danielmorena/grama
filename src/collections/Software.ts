// src/payload/collections/Software.ts
import { CollectionConfig } from 'payload'

export const Software: CollectionConfig = {
  slug: 'software',
  labels: {
    singular: 'Software',
    plural: 'Software',
  },
  admin: {
    defaultColumns: ['software_info.name', 'software_info.version', 'software_vendor.vendor'],
  },
  versions: {
    drafts: true,
    maxPerDoc: 0,
  },
  fields: [
    {
      name: 'software_info',
      label: 'Software Info',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'name',
              label: 'Name',
              type: 'text',
              admin: { width: '25%' },
            },
            {
              name: 'version',
              label: 'Version',
              type: 'text',
              admin: { width: '12.5%' },
            },
            {
              name: 'thumbnail',
              label: 'Thumbnail',
              type: 'upload',
              relationTo: 'media',
              admin: { width: '100%' },
            },
          ],
        },
        { name: 'description', label: 'Description', type: 'richText' },
        {
          name: 'software_specification',
          label: 'Specifications',
          type: 'richText',
          admin: {
            description:
              'describe the software specification, in generic terms, for licitation purposes',
          },
        },
      ],
    },
    {
      name: 'software_vendor',
      label: 'Software Vendor',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'vendor',
              label: 'Name',
              type: 'text',
              admin: { width: '25%' },
            },
            {
              name: 'vendor_url',
              label: 'URL',
              type: 'text',
            },
            {
              name: 'vendor_download_link',
              label: 'Download URL',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'purchase_info',
      label: 'Purchase Info',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'value_currency',
              label: 'Currency',
              type: 'select',
              options: [
                { label: 'Real (BRL)', value: 'BRL' },
                { label: 'US Dollar (USD)', value: 'USD' },
                { label: 'Euro (EUR)', value: 'EUR' },
              ],
              defaultValue: 'BRL',
            },
            {
              name: 'value',
              label: 'Value',
              type: 'number',
              admin: { step: 0.01 },
            },
            {
              name: 'value_purchase_option',
              label: 'Purchase Option',
              type: 'select',
              options: [
                { label: 'Free', value: 'free' },
                { label: 'Single Payment', value: 'single' },
                { label: 'Yearly', value: 'yearly' },
                { label: 'Monthly', value: 'monthly' },
              ],
              defaultValue: 'single',
            },
          ],
        },
      ],
    },
  ],
}
