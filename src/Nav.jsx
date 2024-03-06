import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css'
import Container from 'react-bootstrap/Container'
const Nav = () => {
  return (
    <Container className='mb-5'>
         <Navbar expand="lg"  fixed='top' className='nav-header'>
                  <h4 className='nav-title'>Comfort Homes</h4>
           </Navbar>
    </Container>
      
  )
}

export default Nav