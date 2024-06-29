import { defineField, defineType } from "sanity";

export const About = defineType({
    name: 'abouts',
    title: 'Abouts',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),

        defineField({
            name: 'description',
            title: 'Desctiption',
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