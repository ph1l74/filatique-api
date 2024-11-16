import { Field } from "payload/types";

export const ImageField: Field = {
    name: 'image',
    type: 'upload',
    relationTo: 'images',
    // filterOptions: {
    //   mimeType: { contains: 'image' },
    // },
  }