import { defineField, defineType } from "sanity"

export default defineType({
  name: "people",
  title: "People",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),

    defineField({
      name: "jobFunction",
      title: "Job Function",
      type: "localeString",
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),

    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),

    defineField({
      name: "management",
      title: "Management",
      type: "boolean",
    }),

    defineField({
      name: "stageTeam",
      title: "Stage team",
      type: "boolean",
    }),

    defineField({
      name: "volunteer",
      title: "Volunteer",
      type: "boolean",
    }),

    defineField({
      name: "boardOfDirectors",
      title: "Board of Directors",
      type: "boolean",
    }),

    defineField({
      name: "impactBoard",
      title: "Impact Board",
      type: "boolean",
    }),

    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image.asset",
    },
  },
})
