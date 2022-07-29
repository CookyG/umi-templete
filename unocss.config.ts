import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export function createConfig({ strict = true, dev = true } = {}) {
  return defineConfig({
    envMode: dev ? 'dev' : 'build',
    shortcuts: [],
    presets: [
      presetUno(),
      presetAttributify({ strict }),
      presetIcons({
        scale: 1.2,
        warn: true,
      }),
      presetTypography(),
      presetWebFonts({
        fonts: {
          sans: 'DM Sans',
          serif: 'DM Serif Display',
          mono: 'DM Mono',
        },
      }),
    ],
    transformers: [transformerDirectives(), transformerVariantGroup()],
    safelist: 'prose prose-sm m-auto text-left'.split(' '),
  })
}

export default createConfig()
