import React from "react";

class AddForm extends React.Component{
    nameRef = React.createRef();
    priceRef = React.createRef();

    add = () => {
        let name = this.nameRef.current.value;
        let price = this.priceRef.current.value;

        this.props.add(name,price);

        this.nameRef.current.value = "";
        this.priceRef.current.value = "";
    }

    render(){
        return(
            <div>
                <h2>Add Fruit Name & Price</h2>
                Name    : <input type="text" ref={this.nameRef} />
                Price    : <input type="text" ref={this.priceRef} />
                <button onClick={this.add}>Add Item</button>
            </div>
        )
    }
}

export default AddForm;