import { defineField, defineType } from "sanity"

export default defineType({
  name: "sponsor",
  title: "Sponsor",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
})
