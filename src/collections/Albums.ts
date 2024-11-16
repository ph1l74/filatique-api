import { ImageField } from '../commonFields/Image'
import { CollectionConfig } from 'payload/types'

const Albums: CollectionConfig = {
  slug: 'albums',
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'releaseDate',
      type: 'date'
    },
    {
      name: 'description',
      type: 'text'
    },

    ImageField

  ],
}

export default Albums
