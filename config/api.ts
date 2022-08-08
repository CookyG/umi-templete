import { join } from 'path'

export const openAPIData = [
  {
    requestLibPath: "import { request } from '@umijs/max'",
    schemaPath: join(__dirname, 'swagger.json'),
    projectName: 'als',
  },
  {
    requestLibPath: "import { request } from '@umijs/max'",
    schemaPath: 'http://epchbv.ashermed.cn/ClinicalProtocol/swagger/v1/swagger.json',
    projectName: 'asm',
  },
]
