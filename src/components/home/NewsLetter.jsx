import React from 'react'
import img1 from '../assets/exclusiveImg1.jpg'
import img2 from '../assets/exclusiveImg2.jpg'

function NewsLetter() {
  return (
    <div className='d-flex px-5'>
      <div className='newsLetterImg1'>

      <img className='w-100 ' src={img1} alt='' />
      </div>

    <div className='newsLetter'>
        <h3>Get Exclusive Offers On Your Email</h3>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type='email' placeholder='Enter Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
    <div className='newsLetterImg2'>

    <img className='w-100' src={img2} alt='' />
    </div>
    </div>
  )
}

export default NewsLetter