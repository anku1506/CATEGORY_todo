//functional component
import React from "react";
import { Link } from "react-router-dom";
import "../iconstyle.css";

const CardProduct = (props) => {
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
              data-toggle="tooltip"
              data-placement="top"
              title="Edit Product"
              className="edit alternate outline icon "
              style={{ color: "blue", cursor: "pointer" }}
            ></i>
          </Link>

          {/*Delete icon / */}
          <i
            data-toggle="tooltip"
            data-placement="top"
            title="Delete Product"
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
