import { defineType, defineField } from "sanity";

export const Work = defineType({
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),

        defineField({
            name: 'description',
            title: 'Description',
            type: 'string'
        }),

        defineField({
            name: 'projectLink',
            title: 'Project Link',
            type: 'string'
        }),

        defineField({
            name: 'codeLink',
            title: 'Code Link',
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
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{
                name: 'tag',
                title: 'Tag',
                type: 'string'
             }]
        }),
    ]
});