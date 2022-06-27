/** Title: cart-component.js
    Author: Manel Phiseme
    Date: 6/26/2022
    Description: This file hold the class FoodModel
    */
class CartComponent extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `
        <i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`;
    }

}
customElements.define("cart-component", CartComponent);
