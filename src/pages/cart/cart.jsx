import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { ShopContext } from "../../context/shop-context";
import "./cart.css";

export const Cart = () => {
    const { cartItems } = useContext(ShopContext);
    return(<div>
        <div className="cart">
            <h1>Your Cart Items</h1>
         </div>
    <div className="cartItems">
        {PRODUCTS.map((product) =>{
            if (cartItems[product.id] !==0) {
                return <CartItem data={product} />;
            }
        })}
    </div>
 </div>
    );
}