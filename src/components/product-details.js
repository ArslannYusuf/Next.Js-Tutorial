import Image from 'next/image';
import React from 'react'
import { Badge, Col, Row } from 'react-bootstrap'
import FlexImage from './flex-image';

const ProductDetails = () => {

    const {image, title, category, price} = product;


  return (
    <Row>
      <Col md={6}>
        <FlexImage src={image} alt={title} height='400px'/>

      </Col>
        <h2>{title}</h2>
        <h4 className='d-flex justify-content-between'>
            <Badge >${category}</Badge>
            <Badge bg="primary">${price}</Badge>   
        </h4>

      <Col md={6}>

</Col>


    </Row>
  )
}

export default ProductDetails
