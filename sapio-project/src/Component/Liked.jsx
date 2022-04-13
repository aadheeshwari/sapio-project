import React,{useState,useEffect} from 'react';
import {Row,Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card'

function Liked(){
 const [state, setState] = useState([]);
  
  const Unlikedone = (data) => {
    const characters = localStorage.getItem('liked');
    if (characters) {
      const likedArr = JSON.parse(characters);
      const filtered = likedArr.filter((ele) => ele.id !== data.id);
      localStorage.setItem('liked', JSON.stringify(filtered));
      alert('Unliked It !!');

      return;
    }
  };

  useEffect(() => {
    const characters = localStorage.getItem('liked');
    if (characters) {
      setState(JSON.parse(characters));
    }
  }, []);

 return(
   <>
<div>   
    <Row className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark ">
      <Col  xs lg="12"  >
    <div className="card-subtitle mb-2 text-muted  ">
      {
        state.map(ele => (
        <div className="container">
       
<div className="flip-card" >
  <div className="flip-card-inner">
    <div className="flip-card-front">
          
      <img src={ele.image} />
  
    </div>
          
   
    <div className="flip-card-back">
      <br/>
      <br/>
      
                
                <h3 className="card-title">ID:-{ele.id}</h3> 
      <p className="card-text"><b>NAME:</b> 
  {ele.name}</p>
                <p className="card-text"><b>STATUS:-</b>{ele.status}</p> 
                <p className="card-text"><b>GENDER:-</b>{ele.gender}</p>
                 <p className="card-text"><b>SPECIES:-</b>{ele.species}</p>
       <form> <button onClick={()=>Unlikedone(ele)} id='unlike' >👎</button> </form>   
    </div>
  </div>
</div>  
          <br/> 
          <br/>
          </div>
        ))
      }
    </div>
        
      </Col>
      </Row>
 
  </div>
   </>
 ) 
}
export default Liked




