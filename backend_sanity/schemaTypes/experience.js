import { defineType, defineField } from "sanity";

export const Experience = defineType({
    name: 'experiences',
    title: 'Experiences',
    type: 'document',
    fields: [
        defineField({
            name: 'works',
            title: 'Works',
            type: 'array',
            of: [{type: 'workexperience'}]
        }),

        defineField({
            name: 'year',
            title: 'Year',
            type: 'string'
        }),
    ],
});