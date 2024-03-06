import React,{useContext} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import './HouseList.css'
import {Link,useNavigate} from 'react-router-dom'
import { houses } from './data'
import { HouseContext } from './Context/HouseContext';
const HouseList = () => {
  const { setHouse } = useContext(HouseContext)
  const navigate = useNavigate();
  const MoreInfo = (houseInfo) => {
    setHouse(houseInfo)
    navigate('/house')
  }
  return (
      <Container className='mt-5'>
      <Row>
        {
            !houses ? (<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
          </Spinner>) : (
              houses.map((house) => {
                return (
                  <Col gap={3} className='mt-5'>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={house.image} key={house.id} width="200px" height="200px" className='mt-5' />
                <Card.Body>
                        <Card.Title>{ house.location}</Card.Title>
                      <Button variant='primary' onClick={()=>MoreInfo(house)}>More info</Button> 
                     </Card.Body>
                    </Card>
                  </Col>
                )
              })
          )
           }
        </Row>
    </Container>
  )
}

export default HouseList