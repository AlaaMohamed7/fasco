import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

function BreadCrum({product}) {
  return (
    <div className='breadCrum'>
        Home <IoIosArrowForward className='arrowIcon' />  {product.category}  <IoIosArrowForward className='arrowIcon'/> {product.name}
    </div>
  )
}

export default BreadCrum