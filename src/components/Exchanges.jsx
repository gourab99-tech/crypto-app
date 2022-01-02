import React from 'react';
import { Row, Col } from 'antd';

const Exchanges = () => {
  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row></Row>
    </>
  );
};

export default Exchanges;