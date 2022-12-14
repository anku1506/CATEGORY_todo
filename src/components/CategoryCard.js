import React from "react";
import { Link } from "react-router-dom";
import "./iconstyle.css";

const CardCategory = (props) => {
  const { id, name } = props.category; 

  return (
    <div className="item">
      <div
        className="content "
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="header delete_icon">{name}</div>
        <div style={{padding:"5px"}}>


         {/*View icon / */}
         <Link 
         to={{
          pathname: `/productlist/${id}`,
          state: { category: props.category },
        }}
         >
         <i
         className="eye icon "
         style={{ color: "darkblue", cursor: "pointer", paddingright: "50px" }}
         
       ></i>
       </Link>

          {/*Plus icon / */}
          <Link
            to={{
              pathname: `/addproduct/${id}`,
              state: { category: props.category },
            }}
          >
          <i
            className="plus  icon "
            style={{ color: "blue", cursor: "pointer", paddingright: "50px" }}
          ></i>
          </Link>

          {/*edit icon / */}
          <Link
            to={{
              pathname: `/edit/${id}`,
              state: { category: props.category },
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

export default CardCategory;
