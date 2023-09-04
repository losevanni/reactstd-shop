import { useParams } from "react-router-dom";

function CompoDetail(props){
    let {id}=useParams();
    let comdata=props.ComShoes[id];
    let imgpath=comdata.img_path;
    return (
      <>
      <div className="row">
        <div className="center">
          <img src={process.env.PUBLIC_URL+imgpath} width="50%"></img>
          <h4>{comdata.title}</h4>
          <p> {comdata.content}</p>
          <p>{comdata.price} 원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
        </div>
      </>
    )
  }

export default CompoDetail;