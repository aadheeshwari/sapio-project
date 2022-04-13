import React,{useEffect,useState} from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap';



function Show() {
   

  
  return (
    <div >
     
  <Navbar className="d-block" id='nav' variant="dark">
  <div>
   <Navbar href="Home"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9hVfOyt0S7_kQfAxp0ojyTMkk1WdN584kw&usqp=CAU" height='50px' width='50px' margin="1px"/></Navbar></div>
    
    <Nav className="me-auto" >
      <Nav.Link href="Home">Home</Nav.Link>
      <Nav.Link href="Liked">Liked</Nav.Link>
      
    </Nav>
    
  </Navbar>

  <br />
    </div>
  );

}
export default Show;

