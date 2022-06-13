/**
 * Title: main-course.Js
    Author: Manel Phiseme
    Date: 6/12/2022
    Description: these javaScript codes
    import product class and create a MainCourse class.
 **/
//this code import product class
import {Product} from "./product.js";

/**
 * these code create a class name MainCourse
 * which inherit the class Product
 * export key word is use to export class
 */
export class MainCourse extends Product {
    constructor(name, price){
       super(name, price)       
    }
}