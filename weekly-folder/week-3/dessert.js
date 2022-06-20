/**
 * Title: dessert.js
    Author: Manel Phiseme
    Date: 6/12/2022
    Description: these javaScript codes
    import product class and create an Appetizer class.
 **/

//this code import product class
import {Product} from "./product.js";

/**
 * these code create a class name MainCourse
 * which inherit the class Product
 * export key word is use to export class
 */
export class Dessert extends Product {
    constructor (name, price){
        super(name, price)
    }
}