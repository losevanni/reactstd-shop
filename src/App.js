import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav, Container,Row,Col} from "react-bootstrap";
import {useState} from 'react';
import {data} from './data.js';
// import {a} from './datatest.js';
import {Routes,Route,Link, useNavigate,Outlet} from 'react-router-dom';
import CompoDetail from './pages/ComDetail';
import Compo from './pages/Compo';

function App() {
  let [shoes,shoesSet]=useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">   
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand> 
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Features</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Pricing</Nav.Link> {/* 이렇게도 페이지를 이동 할수있다 navigate(-1) 은 뒤로 가기 처럼 작동*/}
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<>
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
        </>}/>
        <Route path='/detail/:id' element={<div>
          <CompoDetail ComShoes={shoes}></CompoDetail>
        </div>}/>

        <Route path='/about' element={<About/>}>
          <Route path='user' element={<div> 사람들 </div>}></Route>  
          <Route path='location' element={ <About/>}></Route>  
        </Route> 
        <Route path='*' element={<>없는 페이지 입니다</>} /> {/* 404  * 로하면 else 같은 녀석 */}
        
        <Route path='/member' element={<><h4>member page</h4></>}>  {/* Nested Routes rest api 같은 느낌 */}
          <Route path='login' element={<><h4>member 하위 경로 login page</h4></>} />
        </Route>

      </Routes>

    </div>
  );
  function About(){
    return(
      <div>
        <h4>어바웃 page</h4>
        <Outlet></Outlet>  {/* outlet = nested route 로 접근시 하위 경로로 접근하면 하위경로가 include 되는 위치*/}
      </div>
      
      )
    }
    
}
export default App;
