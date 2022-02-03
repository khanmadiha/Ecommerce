import React, { useState } from "react";
import Cart from "./Cart";
import FilterKurtis from "./FilterKurtis";
import Products from "./Products";
import { kurtis } from "../data";
import ProductsLabels from "./ProductsLabels";
import Footer from "./Footer"

const Kurtis = () => {
  const [product, setProducts] = useState({
    products: kurtis,
    size: "",
    sort: "",
  });
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  // filter functions

  const filterProducts = (event) => {
    if (event.target.value === "") {
      setProducts({
        size: event.target.value,
        products: kurtis,
      });
    } else {
      const filterArr = kurtis.filter(
        (product) => product.availableSizes.indexOf(event.target.value) >= 0
      );

      setProducts((product) => ({
        ...product,
        size: event.target.value,
        products: filterArr,
      }));
    }
  };

  const sortProducts = (event) => {
    const sort = event.target.value;
    setProducts((product) => ({
      ...product,
      sort: sort,
      products: product.products.sort((a, b) =>
        sort === "Lowest"
          ? a.price > b.price
            ? 1
            : -1
          : sort === "Highest"
          ? a.price < b.price
            ? 1
            : -1
          : a.id < b.id
          ? 1
          : -1
      ),
    }));
  };

  // cart function
  const addToCart = (product) => {
    const cartArr = cartItems;
    let alreadyInCart = false;
    cartArr.forEach((item) => {
      if (item.id === product.id) {
        alreadyInCart = true;
      }
      return;
    });
    if (!alreadyInCart) {
      cartArr.push({ ...product, count: 1 });
    }

    setCartItems([...cartArr]);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  // cart remove function

  const removeFromCart = (cart) => {
    setCartItems(cartItems.filter((item) => item.id !== cart.id));
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.filter((item) => item.id !== cart.id))
    );
  };

  // addOne removeOne

  const addOne = (cartItem) => {
    const addArr = cartItems;
    addArr.forEach((item) => {
      if (item.id === cartItem.id) {
        item.count++;
      }
    });

    setCartItems([...addArr]);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const removeOne = (cartItem) => {
    const minusArr = cartItems;
    minusArr.forEach((item) => {
      if (item.id === cartItem.id) {
        if (cartItem.count === 1) {
          item.count = 1;
        } else {
          item.count--;
        }
      }
    });

    setCartItems([...minusArr]);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  return (
    <>
      <ProductsLabels text="Kurtis" />
      <div className="grid-contaainer">
        <main>
          <div className="content">
            <div className="main">
              <FilterKurtis
                count={product.products.length}
                size={product.size}
                sort={product.sort}
                filterProducts={filterProducts}
                sortProducts={sortProducts}
              />
              <Products products={product.products} addToCart={addToCart} />
            </div>

            <aside className="sidebar">
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                addOne={addOne}
                removeOne={removeOne}
              />
            </aside>
          </div>
        </main>

        
      </div>
{/* footer  */}
<Footer />
    </>
  );
};

export default Kurtis;
