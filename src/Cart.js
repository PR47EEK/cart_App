import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component {
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
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQty={this.HandleIcreaseQty}
              onDecreaseQty={this.HandleDecreaseQty}
              onDeleteProduct={this.HandleDelete}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
