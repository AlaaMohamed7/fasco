import React, { useContext } from 'react'
import { CategoryContext } from '../context/CategoryContext'
import { useParams } from 'react-router-dom'
import BreadCrum from '../components/product/BreadCrum'
import { Container } from 'react-bootstrap'
import ProductDisplay from '../components/product/ProductDisplay'
import DescriptionBox from '../components/product/DescriptionBox'
import RelatedProducts from '../components/product/RelatedProducts'


function Product() {
    const {allProduct} = useContext(CategoryContext)
    const {productId} = useParams()
    const product = allProduct.find((e) => e.id === Number(productId))
  return (
    <div>
        <Container> 
          <BreadCrum product={product} />
          <ProductDisplay product={product} />
          <DescriptionBox />
          <RelatedProducts />
        </Container>
    </div>
  )
}

export default Product