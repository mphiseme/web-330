/** Title: product.js
    Author: Manel Phiseme
    Date: 6/20/2022
    Description: This file hold the class Product
 */

//the Product Class
export class Product {
    constructor(name,price){
        this.name=name;
        this.price=price;
        this.id = Math.random().toString(16).slice(2);
    }
}