import { defineConfig } from '@umijs/max'

// 路由相关配置
import Routes from '../router'

// 主题相关设置
import Theme from './theme'

// antd 全局配置
import AntdBase from './antd'

// proxy 相关配置
import proxy from './proxy'

//openApi 相关配置
import { openAPIData } from './api'

// docker 相关配置
const DOCKERFILES = [
  'config/docker/Dockerfile',
  'config/docker/docker-compose.yml',
  'config/docker/Deployment-service-Ingress.yml',
]

const { REACT_APP_ENV } = process.env

const PROD = process.env.NODE_ENV === 'production'

const DEV = process.env.NODE_ENV === 'development'

export default defineConfig({
  // 路由路径
  base: '/',

  // 资源路径
  publicPath: '/',

  hash: true,

  title: 'Ashermed',

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

  proxy: PROD ? {} : proxy[REACT_APP_ENV || 'dev'],

  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: Theme,

  npmClient: 'pnpm',

  tailwindcss: {},

  // unocss 配置
  // plugins: [require.resolve('@umijs/plugins/dist/unocss')],
  // unocss: {
  //   watch: ['./src/pages/**/*.tsx', './src/components/**.tsx', './src/layouts/**.tsx'], // 添加其他包含 unocss 的 classname 的文件目录
  // },

  // 检测未使用的文件和导出
  deadCode: {},

  copy: [...DOCKERFILES],

  // openAPI配置
  // 因为在本地开发报错，所以过滤openAPI
  ...(DEV
    ? {}
    : {
        openAPI: openAPIData,
      }),

  plugins: ['@umijs/max-plugin-openapi'],
})
