import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav, Container,Row,Col} from "react-bootstrap";
import {useState} from 'react';
import {data} from './data.js';
// import {a} from './datatest.js';

function App() {
  let [shoes,shoesSet]=useState(data);

  return (
    <div className="App">   
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      <div className='container'>
        <div className='row'>
        {
          shoes.map(function(d,i){
            return(
              <Compo com_data={shoes[i]}></Compo>
            )
          })
        }
        </div>
      </div>
    </div>
  );
}
function Compo(props){
  let comdata=props.com_data;
  let imgpath=comdata.img_path;
  return (
    <>
      <div className='col-md-4'>
        <img src={process.env.PUBLIC_URL+imgpath} width="80%"></img>
        <h4>{comdata.title}</h4>
        <p> {comdata.content}</p>
        <p>{comdata.price} 원</p>
      </div>
    </>
  )
}

export default App;
