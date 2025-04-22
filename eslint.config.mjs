import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  {
    rules: {
      '@next/next/no-img-element': 'warn', // 👈 disables breaking the build
      '@typescript-eslint/no-unused-vars': 'warn', // optional: no breaking for unused vars
    },
  },
]

export default eslintConfig
