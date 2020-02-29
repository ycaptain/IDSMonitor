import * as React from 'react';
import { Statistic, Card, Row, Col, Icon } from 'antd';

const Pred = (): JSX.Element => {

  const Data = () => {
    return (
      <Row gutter={[12, 36]}>
        <Col>
          <Card>
            <Statistic
              title="active"
              value={13.14}
              precision={2}
              valueStyle={{ color: '#3f8600'}}
              prefix={<Icon type="arrow-down" />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col>
          <Card>
            <Statistic
            title="idle"
            value={56.66}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<Icon type="arrow-up" />}
            suffix="%"
            />
          </Card>
        </Col>
      </Row>
    );
  }

  return (
    <div style={{ padding: '30px'}}>
      <Row>
        <Col span={6}>
          <Data />
        </Col>
      </Row>
    </div>
  )
}

export default Pred;
