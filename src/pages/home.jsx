import React from 'react'
import Hero from '../components/home/Hero'
import Popular from '../components/home/Popular'
import Offers from '../components/home/Offers'
import Collections from '../components/home/Collections'
import NewsLetter from '../components/home/NewsLetter'
import { Col, Container, Row } from 'react-bootstrap'
import brandLogo1 from '../components/assets/brand-logo.png'
import brandLogo2 from '../components/assets/brand-logo-1.svg'
import brandLogo3 from '../components/assets/brand-logo-2.svg'
import brandLogo4 from '../components/assets/brand-logo-3.svg'
import brandLogo5 from '../components/assets/brand-logo-4.svg' 


function Home() {
   
  return (
    <div>
        <Hero />
        <div className='Brands'>
          <Container>
            <Row className='brandsContainer'>
              <Col lg={2} md={3} sm={4} >
                <img className='w-100' src={brandLogo1} alt='' />
              </Col>
              <Col lg={2} md={3} sm={4}  >
                <img className='w-100' src={brandLogo2} alt='' />
              </Col>
              <Col lg={2} md={3} sm={4} >
                <img className='w-100' src={brandLogo3} alt='' />
              </Col>
              <Col lg={2} md={3} sm={4} >
                <img className='w-100' src={brandLogo4} alt='' />
              </Col>
              <Col lg={2} md={3} sm={4} >
                <img className='w-100' src={brandLogo5} alt='' />
              </Col>
            </Row>
          </Container>
        </div>
        <Popular />
        <Offers />
        <Collections />
        <NewsLetter />
    </div>
  )
}

export default Home