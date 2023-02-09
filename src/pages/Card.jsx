import React from 'react'
// import { Card } from 'antd';
import { Col, Row } from 'antd';

const Card = () => {
  return (
    <>
      <div className="cardpage">
        <div className="card-container">
            <h2 className='card-h mx-5'>Our Proven results.</h2>
            <Row className='card-list'>
                <Col span={8} className='card-list-item '><a href="">
                  <div  className="card h-100">
                    <div className="card-wrapper">
                      <h3 className='himg'>
                        <img src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/MHDQmYKcWTwRKOZ1pQcaD/b250478370f3d296403b7fa35aeeb63d/icon-enterprise.svg" className='iconimg' alt="" />
                        For Enterprise
                      </h3>

                    </div>
                    <div className="cardbody">
                      <img src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/5dw2prkvPrNg8PJsnwre5u/49ce939411948c4d80c19ca1f2388f3c/logo-forrester.svg" className='crd mt-5' alt="" />
                      <p className="card-head "><strong>232% ROI reported with a payback period of under 3 months.</strong></p>

                    </div>

                  </div>
                    </a></Col>

                    <Col span={8} className='card-list-item'><a href="">
                  <div  className="card">
                    <div className="card-wrapper">
                      <h3 className='himg'>
                        <img src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/2WvAWA7tkOdZaKD6FeLc67/8c1e5202b1826ec6bb213f18ec2a9875/icon-government.svg" className='iconimg' alt="" />
                        For Government
                      </h3>

                    </div>
                    <div className="cardbody">
                      <img src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/6H2Uu5o7RKCJVSibjvFMUo/f0fe37b5bfa7fa864f5224b5c4b0d855/logo-misk-academy.png" className='crd h-25 mt-5' alt="" />
                      <p className="card-head"><strong>118,000+ graduates in Saudi Arabia transformed scholarships into careers.</strong></p>

                    </div>

                  </div>
                    </a></Col>

                    <Col span={8} className='card-list-item'><a href="">
                  <div  className="card  h-100">
                    <div className="card-wrapper">
                      <h3 className='himg'>
                        <img src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3VCrfMcvx1W9L6F0iXlkwP/d5100ef4ed8e159009007811b87f170a/icon-individuals.svg" className='iconimg' alt="" />
                        For Indivisual
                      </h3>

                    </div>
                    <div className="cardbody">
                      <img src="" className='crd' alt="" />
                      <p className="card-head"><strong>70+% of graduates get promoted or land a better job.</strong></p>

                    </div>

                  </div>
                    </a></Col>

              
            </Row>

        </div>
      </div>

    </>
  )
}

export default Card;
