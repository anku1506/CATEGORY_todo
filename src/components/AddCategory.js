import React from "react";

class AddCategory extends React.Component {
    state = {
        name:"",
       
    };

    add=(e)=>{
        e.preventDefault();
        if(this.state.name === ""){alert("Please fill the form");
    return;    
    }
    this.props.addCategoryHandler(this.state);    
    this.setState({name:""});
    alert("Category Added successfgully");
    this.props.history.push("/");
    
    }   


  render() {
    return (
      <div className="ui main" style={{display:"flex",justifyContent: "center",marginTop:"50px" }}>
       
        <form className="ui main" onSubmit={this.add}>
        <h3 style={{color:"blue",marginLeft:"100px"}}>Add Category Here</h3>
          <div className="field" style={{padding:"10px" }}>
            <label>Please Enter Category : </label>
             <input type="text" 
             value={this.state.name}
             name="name" placeholder="Enter Category Name" onChange={(e)=>this.setState({name: e.target.value})}/>
          </div>
          <div style={{marginLeft:"80px"}}> <button className="ui button blue" style={{marginLeft:"80px"}}>Add Category</button></div>
         

          
        </form>
      </div>
    );
  }
}

export default AddCategory;
