import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={80}
          text="HTML/CSS"
        />
        <ProgressBar
          percent={75}
          text="Javascript"
        />
        <ProgressBar
          percent={70}
          text="jQuery"
        />
        <ProgressBar
          percent={80}
          text="ReactJS"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={75}
          text="Redux"
        />
        <ProgressBar
          percent={85}
          text="Git"
        />
        <ProgressBar
          percent={78}
          text="Responsive Design"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
