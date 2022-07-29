import { ReactNode } from 'react'

import { Modal } from 'antd'

interface ModalType {
  visible: boolean
  title: string
  okHandle: () => void
  cancelHandle: () => void
  content: ReactNode
}

const BaseModal: React.FC<ModalType> = props => {
  const { visible, title, okHandle, cancelHandle, content } = props

  function handleOk() {
    okHandle()
  }

  function handleCancel() {
    cancelHandle()
  }

  return (
    <Modal
      wrapClassName="body-modal"
      title={title}
      centered
      closable={false}
      keyboard={false}
      maskClosable={false}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div className="body-modal__text">{content}</div>
    </Modal>
  )
}

export default BaseModal
