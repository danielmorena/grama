import { CollectionConfig } from 'payload/types'

const DIMENSION_TYPES = [
  'device',
  'display',
  'camera',
  'projector',
  'sensor',
  'actuator',
  'peripheral',
  'wokstation',
  'accessory',
]

export const Hardware: CollectionConfig = {
  slug: 'hardware',
  labels: {
    singular: 'Hardware',
    plural: 'Hardwares',
  },
  admin: {
    defaultColumns: ['name', 'vendor_name', 'vendor_model', 'vendor_url'],
  },
  versions: {
    drafts: true,
    maxPerDoc: 0,
  },
  fields: [
    {
      name: 'hardware_info',
      type: 'group',
      label: 'Hardware Info',
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'name', type: 'text', label: 'Name', admin: { width: '66%' } },
            {
              name: 'hardware_type',
              type: 'select',
              label: 'Type',
              admin: { width: '33%' },
              options: [
                { label: 'Accessory', value: 'accessory' },
                { label: 'Actuator', value: 'actuator' },
                { label: 'Adapter', value: 'adapter' },
                { label: 'Cable', value: 'cable' },
                { label: 'Camera', value: 'camera' },
                { label: 'Connector', value: 'connector' },
                { label: 'Device', value: 'device' },
                { label: 'Display', value: 'display' },
                { label: 'Projector', value: 'projector' },
                { label: 'Peripheral', value: 'peripheral' },
                { label: 'Workstation', value: 'workstation' },
                { label: 'Sensor', value: 'sensor' },
              ],
            },
          ],
        },
        { name: 'description', type: 'richText', label: 'Description', adim: { width: '33%' } },
        {
          name: 'thumbnail',
          type: 'upload',
          relationTo: 'media',
          label: 'Hardware Thumbnail',
          hasMany: true,
        },
        {
          name: 'images',
          type: 'upload',
          relationTo: 'media',
          label: 'Hardware Images',
          hasMany: true,
        },
      ],
    },
    {
      name: 'hardware_vendor',
      type: 'group',
      label: 'Hardware Vendor',
      admin: {
        description: 'The vendor name and all vendor indentification.',
      },
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'vendor_name', type: 'text', label: 'Name', admin: { width: '25%' } },
            { name: 'vendor_model', type: 'text', label: 'Model', admin: { width: '25%' } },
            {
              name: 'vendor_model_serial_number',
              type: 'text',
              label: 'Serial Number',
              admin: { width: '25%' },
            },
            {
              name: 'vendor_model_part_number',
              type: 'text',
              label: 'Part Number',
              admin: { width: '25%' },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            { name: 'vendor_url', type: 'text', label: 'URL', admin: { width: '50%' } },
            {
              name: 'vendor_url_support',
              type: 'text',
              label: 'Support URL',
              admin: { width: '50%' },
            },
          ],
        },
      ],
    },
    {
      name: 'hardware_specs',
      type: 'group',
      label: 'Hardware Specifications',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'width',
              type: 'number',
              label: 'Width – milimeters',
              admin: {
                step: 'any',
                condition: ({ data }) => DIMENSION_TYPES.includes(data.hardware_info.hardware_type),
              },
            },
            {
              name: 'height',
              type: 'number',
              label: 'Height – milimeters',
              admin: {
                step: 'any',
                condition: ({ data }) => DIMENSION_TYPES.includes(data.hardware_info.hardware_type),
              },
            },
            {
              name: 'depth',
              type: 'number',
              label: 'Depth – milimeters',
              admin: {
                step: 'any',
                condition: ({ data }) => DIMENSION_TYPES.includes(data.hardware_info.hardware_type),
              },
            },
            {
              name: 'weight',
              type: 'number',
              label: 'Weight – kilograms',
              admin: {
                step: 'any',
                condition: ({ data }) => DIMENSION_TYPES.includes(data.hardware_info.hardware_type),
              },
            },
          ],
        },
        {
          name: 'hardware_specs',
          type: 'array',
          label: '',
          admin: {
            description: 'Add aditional hardware specifications.',
            initCollapsed: true,
          },
          fields: [
            {
              type: 'row',
              admin: { initCollapsed: true },
              fields: [
                { name: 'spec_name', type: 'text', label: 'Specification' },
                { name: 'spec_defintion', type: 'text', label: 'Definition' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'hardware_purchase_info',
      type: 'group',
      label: 'Purchase Info',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'quantity',
              type: 'number',
              label: 'Quantity',
              admin: { step: 'any', width: '12.5%' },
            },
            {
              name: 'unit',
              type: 'select',
              label: 'Unit',
              admin: { width: '12.5%' },
              options: [
                { label: 'Unit', value: 'unit' },
                { label: 'Piece', value: 'piece' },
                { label: 'Pieces', value: 'pieces' },
                { label: 'Meter', value: 'meter' },
                { label: 'Centimeter', value: 'centimeter' },
                { label: 'Millimeter', value: 'millimeter' },
                { label: 'Kilogram', value: 'kilogram' },
                { label: 'Gram', value: 'gram' },
                { label: 'Liter', value: 'liter' },
                { label: 'Milliliter', value: 'milliliter' },
                { label: 'Set', value: 'set' },
                { label: 'Pack', value: 'pack' },
              ],
            },
            {
              name: 'value_currency',
              type: 'select',
              label: 'Currency',
              admin: { width: '12.5%' },
              options: [
                { label: 'Real (BRL) – R$', value: 'BRL' },
                { label: 'US Dollar (USD) – $', value: 'USD' },
                { label: 'Euro (EUR) – €', value: 'EUR' },
                { label: 'Pound Sterling (GBP) – £', value: 'GBP' },
                { label: 'Japanese Yen (JPY) – ¥', value: 'JPY' },
                { label: 'Canadian Dollar (CAD) – CA$', value: 'CAD' },
                { label: 'Australian Dollar (AUD) – AU$', value: 'AUD' },
                { label: 'Swiss Franc (CHF) – CHF', value: 'CHF' },
                { label: 'Chinese Yuan (CNY) – ¥', value: 'CNY' },
              ],
            },
            { name: 'value', type: 'number', label: 'Value', admin: { step: 'any' } },
          ],
        },
        { name: 'purchase_link', type: 'text', label: 'Purchase Link' },
      ],
    },
  ],
}
