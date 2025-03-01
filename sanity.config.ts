import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

// Plugins
import {visionTool} from '@sanity/vision'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import { languageFilter } from "@sanity/language-filter"
import { media } from "sanity-plugin-media"

// Components
import StudioNavbar from "./components/StudioNavbar"
import StudioLogo from "./components/StudioLogo"

export default defineConfig({
  name: 'default',
  title: 'Drugrebels',

  projectId: '9gpurr7n',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), vercelDeployTool(), languageFilter({
    supportedLanguages: [
      { id: "da", title: "Danish" },
      { id: "en", title: "English" },
    ],
    defaultLanguages: ["da"],
    documentTypes: ["drug", "newsbanner", "people"],
    filterField: (enclosingType, field, selectedLanguageIds) =>
      !enclosingType.name.startsWith("locale") || selectedLanguageIds.includes(field.name),
  }), media()],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      logo: StudioLogo,
      navbar: StudioNavbar,
    },
  },
})
