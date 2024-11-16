import { CollectionConfig } from 'payload/types'

const Covers: CollectionConfig = {
    slug: 'covers',
    access: {
        read: () => {
          return true
        }
      },
    upload: {
        staticURL: 'media/images/covers',
        staticDir: 'media/images/covers',
        imageSizes: [
            {
                name: 'xs',
                width: 100,
                height: 100,
                position: 'centre',
            },
            {
                name: 'sm',
                width: 300,
                height: 300,
                position: 'centre',
            },
            {
                name: 'md',
                width: 500,
                height: 500,
                position: 'centre',
            },
            {
                name: 'l',
                width: 1000,
                height: 1000,
                position: 'centre',
            },
            {
                name: 'xl',
                width: 2000,
                height: 2000,
                position: 'centre',
            },
            {
                name: 'xxl',
                width: 3000,
                height: 3000,
                position: 'centre',
            },
        ],
        adminThumbnail: 'sizes',
        mimeTypes: ['image/*'],
    },

    fields: [ {
        name: 'alt',
        type: 'text'
    }],
}

export default Covers;