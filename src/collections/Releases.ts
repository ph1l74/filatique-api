import { CollectionConfig } from 'payload/types'

const Releases: CollectionConfig = {
  slug: 'releases',
  access: {
    read: () => {
      return true
    }
  },
  fields: [
    {
      name: 'releaseDate',
      type: 'date'
    },
    {
      name: 'title',
      type: 'text'
    },
    {
      name: 'description',
      type: 'text'
    },
    {
      name: 'cover',
      type: 'upload',
      relationTo: 'covers'
    },
    {
      name: 'listenService',
      type: 'array',
      fields: [{
        name: 'service',
        type: 'relationship',
        relationTo: 'services'
      },
      {
        name: 'link',
        type: 'text'
      }]
    }

  ],
}

export default Releases
