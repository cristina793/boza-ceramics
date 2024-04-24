import React from "react";
import { PRODUCTS } from "../../products";
import 'bootstrap/dist/css/bootstrap.css';
import {Product} from "./product";
import "./shop.css";

export const Shop = () => {
    return(
        <div className="shop container">
            
            <div className="shopTitle mb-5 text-center ">
                <h1>BozaCeramics Shop</h1>
            </div>
                <div className="products">
                    <div className="products">
                        {PRODUCTS.map((product)=>(
                        <Product data={product} />
                        ))}
                        </div>
                    
                </div>
             </div>
    );
}