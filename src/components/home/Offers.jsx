import React from 'react'
import offersImg from '../assets/offers-image1.jpg'
import { Col, Row } from 'react-bootstrap'


function Offers() {
  return (
    <div >
        <div className=''>
            <Row className='offers'>
                 <Col lg={5} className='offersLeft'>
                    <img src={offersImg} alt=''/>
                 </Col>
                 <Col lg={7} className='offersRightParent d-flex'>   
                    {/* <div className='seprator'>
                      
                    </div>      */}
                    <div className='offersRight'>
                    <p>Women Collection</p>
                    <h3>Peaky Blinders</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis.</p>
                    <b>$100</b>
                    <button>Buy Now</button>
                    </div>
                 </Col>
            </Row>
        </div>
    </div>
  )
}

export default Offers