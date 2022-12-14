import React from "react";

class AddProduct extends React.Component {
    state = {
        pname:"",
       
    };

    addProduct=(e)=>{
        e.preventDefault();
        if(this.state.pname === ""){alert("Please fill the form");
    return;    
    }
    this.props.addProductHandler(this.state);    
    this.setState({pname:""});
    this.props.history.push("/");
    alert("Product Added successfully");
    }   
    constructor(props) {
        super(props);
        const { id, pname } = props.location.state.category;
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state = {
          id,
          pname,
        };
      }

  render() {
    return (
      <div
        className="ui main"
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <form className="ui main" onSubmit={this.addProduct}>
          <h3 style={{ color: "blue", marginLeft: "100px" }}>
            Add Product Here
          </h3>
          <div className="field" style={{ padding: "10px" }}>
            
            <div>
              <label>Please Enter Product : </label>
              <input
                type="text"
                value={this.state.pname}
                name="pname"
                placeholder="Enter Product Name"
                onChange={(e) => this.setState({ pname: e.target.value })}
              />
            </div>
          </div>
          <div style={{ marginLeft: "169px" }}>
            {" "}
            <button className="ui button blue">Add Product</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProduct;
