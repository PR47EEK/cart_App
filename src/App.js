import React, { Component } from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from "firebase/app";
export class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
    this.db = firebase.firestore();
  }

  componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection("products")
    //   .get()
    //   .then((snapshot) => {
    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();
    //       data["id"] = doc.id;
    //       return data;
    //     });
    //     this.setState({
    //       products,
    //       loading: false,
    //     });
    //   });
    this.db
      .collection("products")
      // .where("price", ">", 10000)
      .orderBy("price", "desc")
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({
          products,
          loading: false,
        });
      });
  }

  HandleDelete = (id) => {
    // const { products } = this.state;
    // const items = products.filter((item) => item.id !== id);

    // this.setState({
    //   products: items,
    // });

    const docRef = this.db.collection("products").doc(id);
    docRef
      .delete()
      .then(() => {
        console.log("deleted successfully");
      })
      .catch((error) => {
        console.log("error is:", error);
      });
  };
  HandleIcreaseQty = (product) => {
    console.log("please Increase", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1;
    // this.setState({
    //   products,
    // });

    const docRef = this.db.collection("products").doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty + 1,
      })
      .then(() => {
        console.log("updated successfully");
      })
      .catch((error) => {
        console.log("error is:", error);
      });
  };
  HandleDecreaseQty = (product1) => {
    console.log("please decrease", product1);
    const { products } = this.state;
    const index = products.indexOf(product1);
    if (products[index].qty === 0) return;
    // else {
    //   products[index].qty -= 1;
    // }
    // this.setState({
    //   products,
    // });
    const docRef = this.db.collection("products").doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty - 1,
      })
      .then(() => {
        console.log("decreased successfully");
      })
      .catch((err) => {
        console.log("Error:", err);
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
  addProduct = () => {
    this.db
      .collection("products")
      .add({
        img: "",
        price: 900,
        qty: 324,
        title: "washing Machine",
      })
      .then((docref) => {
        console.log("product has been added", docref);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct}>Add Items</button> */}
        <Cart
          products={products}
          onIncreaseQty={this.HandleIcreaseQty}
          onDecreaseQty={this.HandleDecreaseQty}
          onDeleteProduct={this.HandleDelete}
        />
        {loading && <h1>loading products....</h1>}
        <div style={{ padding: 10, fontSize: 20 }}>
          Total: Rs. {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
