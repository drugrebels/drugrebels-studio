const supportedLanguages = [
  { id: "da", title: "Danish", isDefault: true },
  { id: "en", title: "English" },
]

export const baseLanguage = supportedLanguages.find((l) => l.isDefault)

export const localeString = {
  title: "Localized string",
  name: "localeString",
  type: "object",

  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true },
    },
  ],

  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: "string",
    fieldset: lang.isDefault ? null : "translations",
  })),
}

export const localeBlockContent = {
  title: "Localized block content",
  name: "localeBlockContent",
  type: "object",

  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true },
    },
  ],

  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: "blockContent",
    fieldset: lang.isDefault ? null : "translations",
  })),
}
