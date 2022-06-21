import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useWallet } from '@sentre/senhub'

import { Row, Col, Typography, Button, Space } from 'antd'
import IonIcon from '@sentre/antd-ionicon'

import { AppDispatch, AppState } from 'model'
import { increaseCounter } from 'model/main.controller'
import { MintSelection } from 'shared/antd/mint'

const View = () => {
  const {
    wallet: { address },
  } = useWallet()
  const dispatch = useDispatch<AppDispatch>()
  const { counter } = useSelector((state: AppState) => state.main)

  const increase = useCallback(() => dispatch(increaseCounter()), [dispatch])

  return (
    <Row gutter={[24, 24]} align="middle">
      <Col span={24}>
        <Space align="center">
          <IonIcon name="newspaper-outline" />
          <Typography.Title level={4}>App View</Typography.Title>
        </Space>
      </Col>
      <Col span={24}>
        <Typography.Text>Address: {address}</Typography.Text>
      </Col>
      <Col>
        <Typography.Text>Counter: {counter}</Typography.Text>
      </Col>
      <Col>
        <Button onClick={increase}>Increase</Button>
      </Col>
      <Col>
        <MintSelection />
      </Col>
    </Row>
  )
}

export default View
