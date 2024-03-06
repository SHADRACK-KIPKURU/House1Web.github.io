import React,{useContext} from 'react'
import Container from 'react-bootstrap/Container';
import {HouseContext} from './Context/HouseContext'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const SingleHouse = () => {
  const { house } = useContext(HouseContext)
  console.log(house);
  return (
   <Container className='mt-5 justify-content-center align-items-center'>
  <Container>
      <Row key={house?.id} className='mt-5'> 
        <img src={house?.image}  alt={house?.location} className='house-image'/>
        <Col>
          <h3 className='house-title'>{house?.location}</h3>
            {house?.description && <p>{house?.description}</p>}
            <p className='price'>Name:{house?.name }</p>
            <p className='price'>Price: <span className='price'>{house?.price}</span></p>
            <p className='price'>Selling Price:<span>{ house?.seling_price}</span></p>
        </Col>
      </Row>
  </Container>
</Container>
  )
}
export default SingleHouse