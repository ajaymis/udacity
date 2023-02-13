import React from 'react'
import { Collapse } from 'antd';
import { Col, Row } from 'antd';
const { Panel } = Collapse;

const text = (
    <p
      style={{
        paddingLeft: 24,
      }}
    >
    Assess talent gaps to accurately benchmark and prioritize innovation projects. Align organizational goals and define workforce transformation strategy, with upskill courses curated to the individual level.
    </p>
  );

const Transformation = () => {
  return (
    <>
      
      <div className="padding pt-5"></div>
      <div className="exp-container">
        <Row className="fig-container ">
        <Col className='column' span={12}>
      <div className="mob-header mx-5">
        <h3 className='mh'>Udacity’s Talent Transformation Suite</h3>
        <p className="p-header">Combine technology training for employees with industry experts, mentors, and projects, for critical thinking that pushes innovation. Our proven enterprise training system goes after success—relentlessly.</p>
        <a  href="https://www.udacity.com/enterprise/product" className='tr-link'>learn more <span className='span'>→</span></a>

      </div>
      <div className=" mx-5 figure-layout">
      <Collapse className='' bordered={false} defaultActiveKey={['1']}>
    <Panel className='collaps' header="Workshop" key="1">
      {text}
    </Panel>
    <Panel header=" Platform" key="2">
      {text}
    </Panel>
    <Panel header="Impact" key="3">
      {text}
    </Panel>
  </Collapse>


      </div>
     
     
    </Col>
    <Col span={12}><div className="background-img">
        <img className='img-bg img-fluid' src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/6VWrRGtNBKGeivw207U8Gj/9628b44b000dad0588b78d37c751d495/udacitys-talent-transformation-suite-graphic.png?fm=webp&q=60" alt="" />
        <div className="buttons">
            {/* <button className="workshop">
                <img src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3vpN7jZdIas4DMA4OErtjl/18671564f92da2d95b70755362ae3997/icon-workshop-dark.svg" alt="" />
                <span  className='work mx-3'>Workshop</span>

            </button> */}
            
        </div>
        </div></Col>
        </Row>
      </div>
    </>
  )
}

export default Transformation;

