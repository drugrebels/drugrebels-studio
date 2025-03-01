import { defineField, defineType } from "sanity"

export default defineType({
  name: "customerReference",
  title: "Reference",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),

    defineField({
      name: "area",
      title: "Area",
      type: "string",
      options: {
        list: [
          { title: "Front page", value: "frontPage" },
          { title: "Roadshow", value: "roadshow" },
          { title: "Facts about drugs", value: "factsAboutDrugs" },
          { title: "For parents", value: "forParents" },
          { title: "Get help", value: "getHelp" },
          { title: "About Drugrebels", value: "aboutDrugrebels" },
        ],
      },
    }),

    defineField({
      name: "information",
      title: "Information",
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
      title: "name",
    },
  },
})
