import { Form, Button, Input, Typography } from 'antd'

const { Title } = Typography

import Verify from '@/utils/verify'

import { isNaN, isNumber, toNumber } from 'lodash-es'

import { history } from '@umijs/max'

const enum LoginControlType {
  username = 1,
  password,
}

const Login = () => {
  function login<T>(props: T) {
    console.log('[ props ]-18', props)

    history.replace('/home')
  }

  function asyncValidator(value: string, type: number) {
    if (!value) {
      return Promise.reject(new Error('请输入用户名或手机号'))
    }

    if (type === LoginControlType.username) {
      const transformValue = toNumber(value)

      if (isNumber(transformValue) && !isNaN(transformValue)) {
        if (!Verify.isMobile(value)) {
          return Promise.reject(new Error('请输入正确的手机号'))
        }
      }
    }

    return Promise.resolve()
  }

  return (
    <div className="w-full h-full bg-login-bck bg-no-repeat bg-cover flex">
      <div className="w-[1000px] h-[620px] m-auto bg-white flex">
        <div className="w-[50%] bg-[#527BD2] text-white">logo</div>
        <div className="w-[50%] flex">
          <div className="m-auto min-w-[300px]">
            <Title className="!mb-[50px]">用户登录</Title>
            <Form onFinish={login}>
              <Form.Item
                name="username"
                rules={[
                  {
                    validator: (_, value) => asyncValidator(value, LoginControlType.username),
                  },
                ]}
              >
                <Input maxLength={11} placeholder="请输入用户名或手机号" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    whitespace: true,
                    message: '输入有误',
                  },
                  {
                    required: true,
                    message: '请输入密码',
                  },
                ]}
              >
                <Input type="password" placeholder="请输入密码" />
              </Form.Item>
              <Form.Item>
                <Button className="w-full mt-[30px]" type="primary" htmlType="submit">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
