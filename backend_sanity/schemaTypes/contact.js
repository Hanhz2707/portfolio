import {defineType, defineField} from 'sanity';

export const Contact = defineType({
    name: 'contacts',
    title: 'Contacts',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),

        defineField({
            name: 'email',
            title: 'Email',
            type: 'string'
        }),

        defineField({
            name: 'message',
            title: 'Message',
            type: 'text'
        }),
    ],
});