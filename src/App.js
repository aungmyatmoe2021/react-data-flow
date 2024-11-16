import React from "react";
import Item from "./Item";
import AddForm from "./AddForm";
import Header from "./Header";

class App extends React.Component{
  state = {
    items:[]
  }

  add = (name,price) => {
    let id = this.state.items.length + 1;

    this.setState({
      items:[
        ...this.state.items,
        {id,name,price}
      ]
    })
  }

  render(){
    return (
      <div>
        <Header name="React Data Flow" />
        <AddForm add={this.add} />
        <ul>
          {
            this.state.items.map(i=>{
              return(
                <Item key={i.id} name={i.name} price={i.price} />
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default App;