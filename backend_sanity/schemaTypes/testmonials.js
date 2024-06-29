import { defineField, defineType } from "sanity";

export const eventType = defineType({
    name: 'testmonials',
    title: 'Testmonials',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),

        defineField({
            name: 'company',
            title: 'Company',
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
        
        defineField({
            name: 'feedback',
            title: 'Feedback',
            type: 'string'
        })
    ],
});