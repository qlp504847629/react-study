import React from 'react'
import { Button, Space } from 'antd-mobile'

function myButton(){
  return (
    <>
      <Space wrap>
        <Button color='primary' fill='solid'>
          Solid
        </Button>
        <Button color='primary' fill='outline'>
          Outline
        </Button>
        <Button color='primary' fill='none'>
          None
        </Button>
      </Space>
    </>
  )
}
export default myButton