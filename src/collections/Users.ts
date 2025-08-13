import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    { name: 'name', type: 'text', required: true },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Super Admin', value: 'super-admin' },
        {
          label: 'Admin',
          value: 'admin',
        },
      ],
      defaultValue: 'admin',
    },
    // Email added by default
    // Add more fields as needed
  ],
}
