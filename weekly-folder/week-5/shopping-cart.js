/** Title: cart-component.js
    Author: Manel Phiseme
    Date: 6/26/2022
    Description: This file hold the shoppingCart
    */
export class ShoppingCart {
    constructor(){
        this.product = [];
    }
    count(){
        return this.product.length;
    }
    
    add(prdObj){
        
        this.product.push(prdObj);
        
        }
        *[Symbol.iterator](){
            yield* this.product;
        }
}
