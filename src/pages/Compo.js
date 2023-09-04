// import {Navbar,Nav, Container,Row,Col} from "react-bootstrap";
import { Link } from "react-router-dom";
function Compo(props){
    let comdata=props.com_data;
    let imgpath=comdata.img_path;
    return (
      <>
        <div className='col-md-4'>
          <img src={process.env.PUBLIC_URL+imgpath} width="80%"></img>
          <h4>{comdata.title}</h4>
          <p>{comdata.price} 원</p>
          <Link to="/detail">상세보기</Link>
        </div>
      </>
    )
  }
  
export default Compo;