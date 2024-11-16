import { CollectionConfig } from 'payload/types'

const Services: CollectionConfig = {
  slug: 'services',
  access: {
    read: () => {
      return true
    }
  },
  fields: [
    {
      name: 'title',
      type: 'text'
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'serviceImages'
    },
  ],
}

export default Services
