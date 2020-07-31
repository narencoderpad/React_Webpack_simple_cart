import React from 'react';
import ButtonComponent from "./ButtonComponent"
class Product extends React.Component{
    handleAdd(){
        this.props.onAdd();
    }
    render(){
        const prodStyle={
              background:'lightgrey',
              border:'1px solid black',
              borderRadius:'10px',
              display:'inline-block',
              margin:'10px 30px',
              padding:'15px',
              
        }
        var buttonStyle = {
            marginTop: '10%'
        }
        var item=this.props.item;
        return (
            <div style={prodStyle}>
                <h5>Name:{item.name}</h5>
                <div>Quantity:{item.quantity}</div>
                <div>Description:{item.desc}</div>
                <div>Price:${item.price}</div>
                <ButtonComponent handleAdd={this.handleAdd.bind(this)} buttonStyle={buttonStyle} BtnText={"ADD TO CART"}/>
            </div>
        );
    }
}
export default Product;