import { CollectionConfig } from 'payload/types'

const ServiceImages: CollectionConfig = {
    slug: 'serviceImages',
    access: {
        read: () => {
          return true
        }
      },
    upload: {
        staticURL: 'media/images/services',
        staticDir: 'media/images/services',
        imageSizes: [
            {
                name: 's',
                width: 100,
                height: 100,
                position: 'centre',
            },
            {
                name: 'md',
                width: 500,
                height: 500,
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

export default ServiceImages;