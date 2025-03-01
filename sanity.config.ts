import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// Plugins
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import { languageFilter } from "@sanity/language-filter"
import { media } from "sanity-plugin-media"


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
  }), media()],

  schema: {
    types: schemaTypes,
  },
})
