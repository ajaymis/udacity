import React from 'react'
import { Col, Row } from 'antd';

const Footer = () => {
  return (
    <div>
      <footer className='Footer'>
        <div className="container-contain">
            <section className='footer-logo'>
                <div className="logo">
                    <img className='img-logo' src="./assets/icon.png.svg" alt="" />
                </div>
            </section>
            <nav className="navigation mt-5">
            <Row className='uld p-3 '>
      <Col span={12}>
      <Row className='mx-2 d-flex'>
      <Col className='col-d'  span={8}>
        <h3 className='footer-title'><strong>Featured Programs</strong></h3>
        <p>Business Analytics</p>
        <p>SQL</p>
        <p>Data Engineering with AWS</p>
        <p>Data Analyst</p>
        <p>Intro to Programming</p>
        <p>Digital Marketing</p>
        <p>Self Driving Car Engineer</p>
      </Col>
      <Col  className='col-d' span={8}><h3 className='footer-title'><strong>Only At Udacity</strong></h3>
        <p>Artificial Intelligence</p>
        <p>Deep Learning</p>
        <p>Digital Marketing</p>
        <p>Flying Car and Autonomous </p>
        <p>Intro to Self-Driving Cars</p>
        <p>Machine Learning Engineer</p>
        <p>Robotics Software Engineer</p></Col>
      <Col className='col-d'  span={8}><h3 className='footer-title'><strong>Enterprise</strong></h3>
        <p>Udacity for Enterprise</p>
        <p>Digital Transformation with Udacity</p>
        <p>Artificial Intelligence for Enterprise</p>
        <p>Cybersecurity for Enterprise</p>
        <p>Data Science for Enterprise</p>
        <p>Udacity for Financial Services</p>
        <p>Corporate Social Responsibility</p></Col>
    </Row>


      </Col>
      <Col span={12}>
      <Row className='mx-5'>
      <Col className='col-d'  span={12}><h3 className='footer-title'><strong>Resources</strong></h3>
        <p>Catalog</p>
        <p>Career Services</p>
        <p>Student Success</p>
        <p>Udacity Talks</p>
        <p>Scholarships</p>
        <p>What is AI?</p>
      </Col>
      <Col className='col-dt'  span={12}>
      <h3 className='footer-title'><strong>Support</strong></h3>
        <p>Contact Us</p>
        <p>Help and FAQ</p>
        <p>Service Status</p>
        <p>Tech Requirements</p>
        <img className='mx-1' src="https://www.udacity.com/images/brand-refresh/icon-facebook.svg" alt="" />
        <span><img src="https://www.udacity.com/images/brand-refresh/icon-twitter.svg" alt="" /></span>
        <span> <img src="https://www.udacity.com/images/brand-refresh/icon-linkedin.svg" alt="" />
            </span>
            <span> <img src="https://www.udacity.com/images/brand-refresh/icon-instagram.svg" alt="" /></span>
      
      </Col>
    </Row>
      </Col>
    </Row>
    <Row>
    <Col xs={20} sm={16} md={12} lg={8} xl={4}>
  
    </Col>

    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
    <Row className='rd w-100'>
      <Col className='ms-2' span={8}><h3 className='footer-title'><strong>Udacity Schools</strong></h3>
        
        <p>School of Business</p>
        <p>School of Cloud Computing</p>
        <p>School of Cloud Computing</p>
        <p>School of Cybersecurity</p>
        <p>School of Data Science</p>
        <p>School of Data Science</p>
        <p>School of Data Science</p>
        <p>School of Artificial Intelligence</p>
        
       </Col>
   
      <Col className='ms-5' span={8}>
        <div className="head-1 mt-5">
        <h3 className='footer-title'><strong>gorvernment</strong></h3>
        <p> Udacity for gorvernment</p>
        <div className="head-1 mt-5">
        <h3 className='footer-title'><strong>Indivisual</strong></h3>
        <p> Udacity for Indivisual</p></div>
        </div>

        
        </Col>  
        <Col className='' span={8}>
      
       
        </Col>
    </Row>
     
    </Col>
    <Col className='me-5' xs={20} sm={16} md={12} lg={8} xl={4}>
    <h3 className='footer-title'><strong>Company</strong></h3>
        
        <p>About</p>
        <p>Blog</p>
        <p> In the news</p>
        <p>Jobs t udacity</p>
        <p>Partner</p>
        <p>Affiliates</p>
        <p>Become an instructor</p>
    </Col>
    
  </Row>
  <hr />
  <div className="add">
  <Row>
      <Col span={12}>
       <p> <strong className='md'>Udacity is the trusted market leader in talent transformation.</strong>
       We change lives, businesses, and nations through digital upskilling, developing the edge you need to conquer what’s next.</p>
       <p>Udacity* Nanodegree programs represent collaborations with our industry partners who help us develop our content and who hire many of our program graduates.</p>
       <p>"Nanodegree" is a registered trademark of Udacity. © 2011–2023 Udacity, Inc.</p>
       <p>*not an accredited university and doesn’t confer traditional degrees</p>
      </Col>
      <Col span={12}>
      <Row>
      <Col span={8}><a className='anchor'  href="">Site Map</a></Col>
      <Col span={8}><a  className='anchor' href="">Legal & Privacy</a></Col>
      <Col span={8}><a  className='anchor' href=""> © 2011–2023 Udacity, Inc. </a></Col>
    </Row>
      </Col>
    </Row>
  </div>

            </nav>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
