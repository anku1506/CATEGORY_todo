import React from "react";

class EditCategory extends React.Component {
  constructor(props) {
    super(props);
    
    const { id, name } = props.location.state.category;
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state = {
      id,
      name,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "") {
      alert("Please fill the form");
      return;
    }
    this.props.updateCategoryHandler(this.state);
    this.setState({ name: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <div
        className="ui main"
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
      
        <form className="ui main" onSubmit={this.update}>
        
          <div className="field" style={{ padding: "10px"  }}>
          <h3 style={{color:"blue",marginLeft:"30px"}}>Update Category Here</h3>
       
          <div className="ui label">
          Category
          <div className="detail">:</div>
        </div>
            <input
              type="text"
              value={this.state.name}
              name="name"
              placeholder="Enter category Name"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <button className="ui button blue" style={{ marginleft: "10px" }}>
              Update Category
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditCategory;
