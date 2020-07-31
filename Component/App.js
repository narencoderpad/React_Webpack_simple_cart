import React from 'react';
import Product from "./Product";
import Cart from "./Cart";

	class App extends React.Component{
		constructor(props){
			super(props);
			this.state={};
			this.state.products=[{
                        id: 1,
                        name: 'Xbox',
                        desc: 'It is a playstation',
                        price: 300,
                        quantity: 1

                    }, {
                        id: 2,
                        name: 'Xbox3',
                        desc: 'It is a playstation',
                        price: 100,
                        quantity: 1

                    }, {
                        id: 3,
                        name: 'Vgame',
                        desc: 'It is a playstation',
                        price: 100,
                        quantity: 1

                    }, {
                        id: 4,
                        name: 'Xbox1',
                        desc: 'It is a playstation',
                        price: 200,
                        quantity: 1

                    }, {
                        id: 5,
                        name: 'Xbox2',
                        desc: 'It is a playstation',
                        price: 300,
                        quantity: 1

                    }

                ];
            this.state.count=1;
            this.state.cart=[];
            this.state.cartId=[];
            this.state.id="",
            this.state.price=[],
            this.state.Total="",
            this.state.PriceValue=""
		}

		addProduct(item){
            var cartItem = this.state.cart;
            var cartItemId = this.state.cartId;
            var Price = this.state.price;
            if (this.iscartItemDuplicate(item.id)) {
               console.log("duplicate")
            } else {
                cartItem.push(item);
                cartItemId.push(item.id);
                Price.push(item.price);
                var sum = 0;
                for( var i = 0; i < Price.length; i++ ){
                    sum += parseInt( Price[i]); 
                }
               // console.log(sum)
            this.setState({cart: cartItem,cartId:cartItemId,Total:sum,PriceValue:item.price});
            }
            //console.log(cartItem.length)
        }
        iscartItemDuplicate(value) {
            var List = this.state.cartId;
            var isDuplicate = false;
            for (var i = 0; i < List.length; i++) {
                if (List[i] === value) {
                    isDuplicate = true;
                    break;
                }
            }
            return isDuplicate;
        };


        
             // e.preventDefault(); 


		getProducts(){
			var itemList=this.state.products.map((item,i)=>{
				return (<Product item={item} key={i} onAdd={this.addProduct.bind(this,item)} />);
			});
			return itemList;
		}
		render(){
			return (
                <div className="row">
                     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        {this.getProducts()}
                     </div>
                     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <Cart cart={this.state.cart} price={this.state.Total} PriceValue={this.state.PriceValue}/>
                     </div>
                </div>
               
			);
		}
	}


export default App;