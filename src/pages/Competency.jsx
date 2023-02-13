import React from 'react'
import { Col, Row } from 'antd';


const Competency = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="content">
        <Row className='row-item'>
      <Col className='img-section col-lg-6 col-md-6 col-sm-12 col-xs-12' span={12}>
        <div className="">
            <img className='imdc' src="./assets/img-assets.webp
            " alt="" />
        </div>

      </Col>
      <Col className='column-2 col-lg-6 col-md-6 col-sm-12 col-xs-12' span={12}>
       <div className="item-2 mx-5 justify-content-center">
       <h3 className="title">Udacity’s Digital <br /> Competency <br /> Platform</h3>
        <p className="comp-para">
        Our enterprise training programs focus <br /> exclusively on in‑demand digital <br /> technologies and ensure workplace <br /> relevance.
        </p>

        <a className='learn' href="https://www.udacity.com/enterprise/digital-competencies">Learn more <span>→</span></a>
       </div>
      </Col>
    </Row>

    <Row className='footer-icon mt-5 '>
     
      <Col className='ico' span={6}>
        <img src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/7i0vIvSYhBZpPXzaJCHaBn/50bfa1e2b52653aa76a8c413ae5e0f28/icon-curriculum.svg" alt="" />
      <p className='icon-para mt-3'>Curriculum co-created with industry leaders</p>  
        </Col>
      <Col className='ico' span={6}>
        <img src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/zh6jYZi3xGa6a9yRZdMat/672eaa6d90f82bcf8b2bb36dab1cfc79/icon-feedback.svg" alt="" />
        <p className='icon-para mt-3'>Personalized feedback ensures mastery</p> 
      </Col>
      <Col className='ico' span={6}><img src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/5eLSyxIAS3Fb9CXRkYGg4u/1c23e9f28d5eaa1edc57f1532ecb8331/icon-projects.svg" alt="" />
      <p className='icon-para mt-3'>Hands-on projects, not step-by-step guides</p> 
      </Col>
      <Col className='ico' span={6}><img src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/4r0jrCI7BjgLYRb8vPFgJl/62a8348809aa327099c0e553f305034d/icon-expert-network.svg" alt="" />
      <p className='icon-para mt-3'>1,400+ highly vetted expert network</p> </Col>
    </Row>

        </div>
    </div>
    </>
  )
}

export default Competency;
