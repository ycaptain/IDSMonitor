import React, { useRef, useEffect } from 'react';
import { Statistic, Card, Row, Col } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Bar } from '@antv/g2plot';

const Pred = (): JSX.Element => {

  const data = [
    { year: '1951 年', sales: 38 },
    { year: '1952 年', sales: 52 },
    { year: '1956 年', sales: 61 },
    { year: '1957 年', sales: 145 },
    { year: '1958 年', sales: 48 },
  ];

  const container = useRef(null);

  useEffect(() => {
    if (!container.current) {
      return;
    }
    const bar = new Bar(container.current!, {
      data,
      xField: 'sales',
      yField: 'year',
      colorField: 'year',
    });
    bar.render();
  }, []);



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
              prefix={<ArrowDownOutlined />}
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
            prefix={<ArrowUpOutlined />}
            suffix="%"
            />
          </Card>
        </Col>
        <div ref={container}></div>
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
