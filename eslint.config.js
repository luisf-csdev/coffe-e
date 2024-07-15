import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import tailwind from 'eslint-plugin-tailwindcss'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...compat.extends('@rocketseat/eslint-config/react'),
  ...tailwind.configs['flat/recommended'],
]
