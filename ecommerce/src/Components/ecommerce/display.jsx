import React, { useContext } from "react";
import { ProductsContext } from "./Main_eco";
function Display() {
  let { state, dispatch } = useContext(ProductsContext);
  let { products, addCart, removeCart } = state;

  console.log(state);

  return (
    <div className="productsGrid">
      {products.map((product) => {
        let { quantity, price, name, id } = product;
        return (
          <div className="product" key={id}>
            <img
              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/475e8817-2f2c-4c1d-993c-a8f678168142/nikecourt-vapor-lite-hard-court-tennis-shoes-rkl5kR.png"
              alt="shoe"
            />
            <span>{name}</span>
            <span>Price:{price}</span>
            {quantity<=0 ?
            <span className="actionButtons">
              <button onClick={() => addCart(id)}>Add</button>
              <button onClick={() => removeCart(id)}>Remove</button>
            </span>
            :
            <span className="actionButtons">
            <button onClick={() => addCart(id)}>+</button>
            <span>{quantity}</span>
            <button onClick={() => removeCart(id)}> -</button>
          </span>
            }
          </div>
        );
      })}
    </div>
  );
}

export default Display;
