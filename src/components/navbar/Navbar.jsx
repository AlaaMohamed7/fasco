import React, { useContext } from 'react'
import { BsCart4 } from "react-icons/bs";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { useValid } from '../../context/validation';
import { CategoryContext } from '../../context/CategoryContext'; 


function NavbarComp() {
  const valid = useValid()
  const {getTotalCartItems} = useContext(CategoryContext)
  const totalItems = getTotalCartItems()
  return (    
        <Navbar fixed='top'  expand='lg' className=" navbar">
          <Container>
          <Navbar.Brand className='navbarLogo'>
            <Link to='/' className='navbarLogoLink'>
             <p>Fasco</p> 
            </Link>
          </Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Shopper
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className=" navbarMenu justify-content-center flex-grow-1 pe-3">
                  <Link className='navbarLinks' to='/'>Home</Link>
                  <Link className='navbarLinks' to='/men'>Men</Link>
                  <Link className='navbarLinks' to='/women'>Women</Link>
                  <Link className='navbarLinks' to='/kids'>Kids</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className='navbarLoginCart'>
              {valid.user? <div><Link className='navbarLinks' to='/logout'>welcome {valid.user}</Link> </div>
              :
               <Link to='/login' ><button className='navbarLoginBtn shadow-lg'>Login</button></Link>
              }
               <div className='cartLogo'>
                   <Link className='navbarCartIcon' onClick={() => window.scrollTo(0,0)} to='/cart'> <BsCart4 /> </Link> 
                    <div className='cartCount'>{totalItems}</div>
                </div>
            </div>
            <Navbar.Toggle className='navbarToggle' aria-controls={`offcanvasNavbar-expand-lg`} />
          </Container>
        </Navbar>
     
         
 
  )
}

export default NavbarComp