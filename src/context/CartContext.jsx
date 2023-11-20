import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const useCartContext = () => {
  return useContext(CartContext);
}

const cartInitialState = localStorage.getItem("cart-page") ? JSON.parse(localStorage.getItem("cart-page")) : [];

const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState(cartInitialState);
  const [total, setTotal] = useState(0);

  const handleCart = (product) => {

    const itemInCart = cart.find(el => el.product_id == product.contentModal.product_id);

    if (itemInCart) {
      let newCart = [...cart];
      for (let i = 0; i < newCart.length; i++) {
        if (newCart[i].product_id == product.contentModal.product_id) {
          if ((newCart[i].amount + product.amount > 20)) {
            newCart[i].amount = 20
          }
          else {
            newCart[i].amount = newCart[i].amount + product.amount
          }
        }
      }
      setCart(newCart);
    }
    else {
      let newProduct = {
        trademark: product.contentModal.trademark,
        amount: product.amount,
        product_id: product.contentModal.product_id,
        price: product.contentModal.price,
        img_url: product.contentModal.img_url
      }
      setCart(cart => [...cart, newProduct])
    }
  }

  const addAmountProduct = (product_id) => {
    const itemAdd = cart.find(el => el.product_id == product_id);
    let newCart = [...cart];
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].product_id == product_id) {
        if (newCart[i].amount < 20) {
          newCart[i].amount = newCart[i].amount + 1
        }
      }
    }
    setCart(newCart);
  }

  const delAmountProduct = (product_id) => {
    const itemAdd = cart.find(el => el.product_id == product_id);
    let newCart = [...cart];
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].product_id == product_id) {
        if (newCart[i].amount > 1) {
          newCart[i].amount = newCart[i].amount - 1
        }
      }
    }
    setCart(newCart);
  }

  const deleteItemCart = (product_id) => {
    const newCart = cart.filter(el => el.product_id != product_id);
    setCart(newCart);
  }

  useEffect(() => {

    let newTotal = 0;
    for(let i = 0; i < cart.length; i++){
      newTotal = newTotal + (cart[i].amount * cart[i].price)
    }
    setTotal(newTotal);
    localStorage.setItem("cart-page", JSON.stringify(cart))

  }, [cart])


  const data = { cart, handleCart, addAmountProduct, delAmountProduct, deleteItemCart, total }

  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  )
}

export { useCartContext, CartContextProvider }