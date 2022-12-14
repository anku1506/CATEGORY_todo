import React from "react";
import { Link } from "react-router-dom";
import "./iconstyle.css";

const CardProduct = (props) => {
  //console.log("from card product",props);
  const { id, pname } = props.product;
 

  return (
    <div className="item">
      <div
        className="content "
        style={{ display: "flex", justifyContent: "space-between" }}
      >     
        <div className="header delete_icon">{pname}</div>
        <div style={{ padding: "5px" }}>  

         {/*edit icon / */}
         <Link
         to={{
           pathname: `/editproduct/${id}`,
           state: { product: props.product },
         }}
       >
         <i
           className="edit alternate outline icon "
           style={{ color: "blue", cursor: "pointer" }}
         ></i>
       </Link>     

          {/*Delete icon / */}
          <i
            className="trash alternate outline icon "
            style={{ color: "red", cursor: "pointer", paddingright: "50px" }}
            onClick={() => {
              props.clickHandler(id);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
