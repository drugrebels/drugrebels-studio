import { defineField, defineType } from "sanity"

export default defineType({
  name: "newsbanner",
  title: "News Banner",
  type: "document",
  fields: [
    defineField({
      name: "date",
      title: "Date",
      type: "date",
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "localeString",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),

    defineField({
      name: "file",
      title: "File",
      type: "file",
    }),

    defineField({
      name: "content",
      title: "Content",
      type: "localeBlockContent",
    }),
  ],
  preview: {
    select: {
      title: "title.da",
    },
  },
})
