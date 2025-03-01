import { defineField, defineType } from "sanity"

export default defineType({
  name: "drug",
  title: "Drug",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "localeString",
    }),

    defineField({
      name: "content",
      title: "Content",
      type: "localeBlockContent",
    }),
  ],
  preview: {
    select: {
      title: "name.da",
    },
  },
})
