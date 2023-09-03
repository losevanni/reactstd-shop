import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav, Container,Row,Col} from "react-bootstrap";
import {useState} from 'react';
import {data} from './data.js';
import {a} from './datatest.js';

function App() {
  let [shoes]=useState(data);

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
          <div className='col-md-4' >
            <img src={"/img/shoes1.jpg"} width="80%"></img>  {/* / 경로는 /public 에서 시작 된다 */}
            {/* <img src={"https://codingapple1.github.io/shop/shoes1.jpg"} width="80%"></img> */}
            <h4>{shoes[0].title}</h4>
            <p> {shoes[0].content}</p>
            </div>
          <div className='col-md-4'>
            <img src={process.env.PUBLIC_URL+'/img/shoes2.jpg'} width="80%"></img>
            <h4>{shoes[1].title}</h4>
            <p> {shoes[1].content}</p>
            </div>
          <div className='col-md-4'>
            <img src={process.env.PUBLIC_URL+'/img/shoes3.jpg'} width="80%"></img>
            <h4>{shoes[2].title}</h4>
            <p> {shoes[2].content}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
function Compo(props){
  return (
    <>
      <div className='col-md-4'>
        <img src={process.env.PUBLIC_URL+'/img/shoes2.jpg'} width="80%"></img>
        <h4>{"s"}</h4>
        <p> {""}</p>
      </div>
    </>
  )
}

export default App;
