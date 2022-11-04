import React from "react";
import { createContext } from "react";
import { useReducer } from "react";
import Cart from "./cart";
import Display from "./display";
import "./ecommerceStyles.css";

const data = [
  {
    id: 1,
    img: "",
    name: "shoes",
    price: "$50",
    quantity: 0,
  },
  {
    id: 2,
    img: "",
    name: "clothes",
    price: "$5",
    quantity: 0,
  },
  {
    id: 3,
    img: "",
    name: "shoes",
    price: "$500",
    quantity: 0,
  },
  {
    id: 4,
    img: "",
    name: "Pen",
    price: "$50",
    quantity: 0,
  },
];

export const ProductsContext = createContext();
function Main_eco() {
  const addCart = (id) => {
    return dispatch({ type: "add", id: id });
  };

  const removeCart = (id) => {
    return dispatch({ type: "remove", id: id });
  };
  const reduceQuantity = (id) => {
    return dispatch({ type: "reduceQuantity", id: id });
  };
  const initialState = {
    products: data,
    cart: [],
    cart_size: 0,
    addCart: addCart,
    removeCart: removeCart,
    reduceQuantity,
    reduceQuantity,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="mainWrapper">
      <ProductsContext.Provider value={{ state, dispatch }}>
        <Cart />
        <Display />
      </ProductsContext.Provider>
    </div>
  );
}

export default Main_eco;

function reducer(state, action) {
  switch (action.type) {
    case "add":
      //increasing quantity
      let newProducts = state.products.map((p) => {
        if (p.id === action.id) {
          p.quantity = p.quantity + 1;
        }
        return p;
      });
      let item = newProducts.find((p) => p.id === action.id);
      return { ...state, products: newProducts, cart: [...state.cart, item], cart_size: state.cart_size + 1 };
    case "remove":
      //reduce cart
      let items = state.cart.filter((p) => p.id != action.id);
      //edit quantity
      let remProducts = state.products.map((p) => {
        if (p.id === action.id) {
          p.quantity = p.quantity + 1;
        }
        return p;
      });
      return { ...state, cart: items };
    case "reduceQuantity":
      let rem_cart = state.cart
      let rem_cart_size = state.cart_size
      let newProd_quantity = state.products.map((p) => {
        if (p.id === action.id) {
          p.quantity = p.quantity - 1;
          rem_cart_size = rem_cart_size- 1
        }
        if(p.id=== action.id && p.quantity == 0){
          // console.log(state.cart);
           rem_cart =state.cart.filter((p) => p.id !== action.id);
          //  console.log(rem_cart, 'rem');
           
        }
        return p;
      });
      //console.log(rem_cart);
      return { ...state, products: newProd_quantity,  cart: rem_cart, cart_size:rem_cart_size};

    default:
      return state;
  }
}
