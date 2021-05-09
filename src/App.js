import React, { Component } from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
export class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: "Phone",
          price: 99,
          qty: 1,
          id: 1,
        },
        {
          title: "watch",
          price: 9,
          qty: 1,
          id: 2,
        },
        {
          title: "ipad",
          price: 999,
          qty: 1,
          id: 3,
        },
      ],
    };
  }
  HandleDelete = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items,
    });
  };
  HandleIcreaseQty = (product) => {
    console.log("please Increase", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products,
    });
  };
  HandleDecreaseQty = (product1) => {
    console.log("please decrease", product1);
    const { products } = this.state;
    const index = products.indexOf(product1);
    if (products[index].qty === 0) return;
    else {
      products[index].qty -= 1;
    }
    this.setState({
      products,
    });
  };
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQty={this.HandleIcreaseQty}
          onDecreaseQty={this.HandleDecreaseQty}
          onDeleteProduct={this.HandleDelete}
        />
      </div>
    );
  }
}

export default App;
