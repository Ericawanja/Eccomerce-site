import React, {useContext} from 'react'
import { IconContext } from 'react-icons'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { ProductsContext } from './Main_eco'

function Cart() {
    let {state}= useContext(ProductsContext)
    //console.log(state);
    let {cart_size, cart}= state
  return (
    <header>
        <span onClick={()=> console.log(cart)}>
            <IconContext.Provider value={{size:'30px', color:'white'}}>
                <AiOutlineShoppingCart/>
            </IconContext.Provider>

        </span>
        <span className='cartValue'>{cart_size}</span>
    </header>
  )
}

export default Cart