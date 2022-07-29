import { defineConfig } from '@umijs/max'

//路由相关配置
import Routes from '../router'

//主题相关设置
import Theme from './theme'

//antd 全局配置
import AntdBase from './antd'

export default defineConfig({
  base: '/',
  hash: true,
  locale: {
    antd: true,
    default: 'zh-CN',
    baseNavigator: true,
  },
  antd: AntdBase,
  access: {},
  model: {},
  initialState: {},
  request: {},

  routes: Routes,

  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: Theme,

  npmClient: 'pnpm',

  // tailwindcss: {},

  // unocss 配置
  plugins: [require.resolve('@umijs/plugins/dist/unocss')],
  unocss: {
    watch: ['./src/pages/**/*.tsx', './src/components/**.tsx', './src/layouts/**.tsx'], // 添加其他包含 unocss 的 classname 的文件目录
  },
})
