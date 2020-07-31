import React from 'react';
import ButtonComponent from "./ButtonComponent"
class Cart extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count:1,
            id:"",
            Xbox:1,
            Xbox3:1,
            Vgame:1,
            Xbox1:1,
            Xbox2:1,
            Totalprice:0
        }
    }
    componentWillReceiveProps(nextProps){
        if(this.state.Totalprice === 0){
            this.setState({
                Totalprice:nextProps.price
            })
        }else{
            this.setState({
                Totalprice: this.state.Totalprice+nextProps.PriceValue
            })
        }
            
    }
    handleAdd(id,status,price) {
        var count = this.state.count;
        if(status==="Add"){
            this.setState({
                [id]:this.state[id]+1,
                Totalprice: this.state.Totalprice+price,
                count:this.state.count+1
            });
        }else if(status==="Remove" && this.state[id]!==1){
            this.setState({
                [id]:this.state[id]-1,
                Totalprice:this.state.Totalprice-price,
                count:this.state.count-1
            });
        } 
        //alert(typeof this.state.Xbox)
        //+ this.state.Xbox3 * 100 + this.state.Vgame * 100 + this.state.Xbox1 * 200 + this.state.Xbox1 * 300;
        
       
    }

    getCartInfo() {
        var totalPrice = 0;
        var buttonStyle ={
            //float:'right',
            cursor:'pointer',
            margin:'10px'
           // width:'20%'
        }
        var priceStyle = {
               width:'80%'
        }
        var cartItems=this.props.cart.map((item,i)=>{
            totalPrice += item.price;
            return(<div key={i}><span>{item.name} {item.price}</span>
                       <ButtonComponent handleAdd={this.handleAdd.bind(this, item.name,"Add",item.price)} buttonStyle={buttonStyle} BtnText={"+"}/>
                       {this.state[item.name]?this.state[item.name]:1}
                       <ButtonComponent handleAdd={this.handleAdd.bind(this, item.name,"Remove",item.price)} buttonStyle={buttonStyle} BtnText={"-"}/>
                   </div>) 
            });
        return {totalPrice,cartItems};
    }
   

    render(){
        const info=this.getCartInfo();
        var cartStyle ={
            border:'2px solid black',
            background:'lightgrey',
            borderRadius:'10px',
            color:'blue',
            margin :'10px 30px',
            padding:'10px',
            width:'80%'
        }
        return (
                <div style ={cartStyle}>
                    <h1>My shopping Cart</h1>
                    {info.cartItems}
                    <h2>Total Price : ${this.state.Totalprice} </h2>
                </div>);
    }
}
export default Cart;