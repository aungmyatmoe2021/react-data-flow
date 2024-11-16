import React from "react";
import Title from "./Title";

class Header extends React.Component{
    render(){
        return <Title name={this.props.name} />;
    }
}

export default Header;