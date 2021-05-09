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
          img:
            "https://images.unsplash.com/photo-1603210119709-26103832d0e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        },
        {
          title: "Laptop",
          price: 999,
          qty: 1,
          id: 2,
          img:
            "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        },
        {
          title: "ipad",
          price: 999,
          qty: 1,
          id: 3,
          img:
            "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
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
  getCartTotal = () => {
    const { products } = this.state;
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.qty;
    });
    return total;
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
        <div style={{ padding: 10, fontSize: 20 }}>
          Total: Rs. {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
