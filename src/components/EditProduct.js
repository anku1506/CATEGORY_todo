import React from "react";

class Editproduct extends React.Component {
    
  constructor(props) {
    super(props);
    console.log("from location",props);
    const { id, pname } = props.location.state.product;
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state = {
      id,
      pname,
    };
  }

  updateproduct = (e) => {
    e.preventDefault();
    if (this.state.pname === "") {
      alert("Please fill the form");
      return;
    }
    this.props.updateproductHandler(this.state);
    this.setState({ pname: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <div
        className="ui main"
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
      
        <form className="ui main" onSubmit={this.updateproduct}>
        
          <div className="field" style={{ padding: "10px"  }}>
          <h3 style={{color:"blue",marginLeft:"30px"}}>Update product Here</h3>
       
          <div className="ui label">
          product
          <div className="detail">:</div>
        </div>
            <input
              type="text"
              value={this.state.pname}
              name="pname"
              placeholder="Enter product Name"
              onChange={(e) => this.setState({ pname: e.target.value })}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <button className="ui button blue" style={{ marginleft: "10px" }}>
              Update product
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Editproduct;
