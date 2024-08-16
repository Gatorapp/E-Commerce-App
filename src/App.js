import Nav from "./components/Nav";
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav />

        <Route path="/home" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} addToCart={addToCart}/>} />
        <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} />}/>
        <Route path="/cart" render={() => (<Cart books={books} cart={cart} changeQuantity={changeQuantity} />)}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
