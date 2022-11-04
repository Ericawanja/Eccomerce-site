import React, {useContext} from 'react'
import { IconContext } from 'react-icons'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { ProductsContext } from './Main_eco'

function Cart() {
    let {state}= useContext(ProductsContext)
    //console.log(state);
    let {cart}= state
  return (
    <header>
        <span>
            <IconContext.Provider value={{size:'30px', color:'white'}}>
                <AiOutlineShoppingCart/>
            </IconContext.Provider>

        </span>
        <span className='cartValue'>{cart.length}</span>
    </header>
  )
}

export default Cart