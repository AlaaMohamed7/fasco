import React from 'react'
import heroImg from '../assets/hero_image.png'
import handIcon from '../assets/hand_icon.png'
import { FaArrowRightLong } from "react-icons/fa6";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import heroImgLeft from '../assets/image 2 28.svg'
import heroImgRight from '../assets/image 227.svg'
import heroImgMidTop from '../assets/image.svg'
import heroImgMidBottom from '../assets/image (2).jpg'
import saleImg from '../assets/SALE.jpg'
 

function Hero() {
  return (
    <div >

    <Container>
        <div className='hero'>
            <div className='heroLeft'>
                <img className='heroLeftImg' src={heroImgLeft} alt='' />
            </div>
            <div className='heroMid'>
                <div className='heroMidTop'>
                    <img className='heroMidTopImg' src={heroImgMidTop} alt='' />
                </div>
                <div className='heroMidContent'>
                    <h1>ULTIMATE</h1>
                    <img className='saleImg' src={saleImg} alt='' />
                    <p>NeW COLLECTION</p>
                    <button className=' heroMidBtn shadow-lg'>SHOP NOW</button>
                </div>
                <div>
                    <img className='heroMidBottomImg' src={heroImgMidBottom} alt='' />
                </div>
            </div>
            <div className='heroRight'>
                 
                <img className='heroRightImg' src={heroImgRight} alt='' />
               
            </div>
        </div>
    {/* <Row>
        <Col  md={6} className='heroLeft'>
            <h2>New Arrivals Only</h2>
            <div className='handIconDiv'>
                <p>New</p>
                <img src={handIcon} alt='' />
            </div>
            <p>Collection</p>
            <p>For Everyone</p>
            <button className='heroBtn'>
                Latest Collection 
                <FaArrowRightLong />
            </button>
        </Col>
        <Col md={6}   className='heroRight'>
            <img src={heroImg} alt='hero-img' />
        </Col>
     
    </Row> */}
    </Container>
    </div>
  )
}

export default Hero