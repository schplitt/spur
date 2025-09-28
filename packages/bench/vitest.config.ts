import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['bench/**/*.bench.{ts,js}'],
    benchmark: {

    },
  },
})
