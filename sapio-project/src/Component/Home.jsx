import React,{useState,useEffect} from 'react';
import {Row,Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Search from "./Search"


function Home(){

 const [state, setState] = useState([]);
 const [search,setSearch]= useState("");
 const [page,setPage]= useState(1);
  
const api = `https://rickandmortyapi.com/api/character?page=${page}&name=${search}`;
  
  const likedone = (data) => {
    const characters = localStorage.getItem('liked');
    if (characters) {
      const likedArr = JSON.parse(characters);
      likedArr.push(data);
      localStorage.setItem('liked', JSON.stringify(likedArr));
      alert('Data Added');

      return;
    }
    localStorage.setItem('liked', JSON.stringify([data]));
    alert('Data Added');
  };
  const data = `https://rickandmortyapi.com/api/character`

  useEffect(function() {

    fetch(api)
      .then(response => response.json())
      .then(json => setState(json['results']))
     }, [api])
  
  return(
    
 <div>  
    <div
      className={` d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
       <Search setSearch={setSearch} />
         </div>
    <Row >
      <Col  xs lg="12" style={{columnCount:"4"}}>
    <div className="card-subtitle mb-2 text-muted">
      {
        state.map(ele => (
        <div>
       
<div className="flip-card">
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
        <button onClick={()=>likedone(ele)} id='like' >👍</button>    
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
   )
}
export default Home;