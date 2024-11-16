import { CollectionConfig } from 'payload/types'

const Press: CollectionConfig = {
    slug: 'press',
    access: {
        read: () => {
          return true
        }
      },
    fields: [
        {
            name: 'date',
            type: 'date'
        },
        {
            name: 'title',
            type: 'text'
        },
        {
            name: 'link',
            type: 'text'
        },
        {
            name: 'description',
            type: 'text'
        }
    ],
}

export default Press
