import { defineType, defineField } from "sanity";

export const WorkExperience = defineType({
    name: 'workexperience',
    title: 'Work Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string'
        }),

        defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),

        defineField({
            name: 'desc',
            title: 'Desc',
            type: 'string'
        })
    ]
});