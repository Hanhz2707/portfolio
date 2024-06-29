import { defineType, defineField } from "sanity";

export const Brand = defineType({
    name: 'brands',
    title: 'Brands',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),

        defineField({
            name: 'imageurl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
    ],
});