import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import ReactDOM from 'react-dom'

import '@/assets/css/loading.scss'

export function showLoading() {
  if (document.getElementById('loadingDom')) {
    return false
  }

  const loadDom = document.createElement('div')

  loadDom.setAttribute('id', 'loadingDom')

  document.body.appendChild(loadDom)

  const antIcon = <LoadingOutlined spin />

  ReactDOM.render(<Spin indicator={antIcon} />, loadDom)
}

export function hideLoading() {
  if (!document.getElementById('loadingDom')) {
    return false
  }

  const loadDom = document.getElementById('loadingDom') as any
  if (loadDom) {
    document.body.removeChild(loadDom)
  }
}
