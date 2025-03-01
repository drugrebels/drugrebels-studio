import { defineField, defineType } from "sanity"

export default defineType({
  name: "practitioner",
  title: "Practitioner",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),

    defineField({
      name: "website",
      title: "Website",
      type: "string",
    }),

    defineField({
      name: "content",
      title: "Content",
      type: "localeBlockContent",
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Practitioner", value: "practitioner" },
          { title: "Additional", value: "additional" },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
})
