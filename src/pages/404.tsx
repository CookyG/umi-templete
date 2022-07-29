import { Button, Result } from 'antd'

import { history } from '@umijs/max'

const _404 = () => {
  function back() {
    history.replace({
      pathname: '/',
    })
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，你访问的页面不存在"
      extra={
        <Button type="primary" onClick={back}>
          返回首页
        </Button>
      }
    />
  )
}

export default _404
