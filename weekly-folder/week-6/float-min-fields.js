/**
 * Title: float-max-field.js
    Author: Manel Phiseme
    Date: 6/27/2022
    Description: This code contain class float-max-field.js
 **/

//class FloatMaxField 
//check if a user 

export class FloatMinField {
    constructor(name, field, min){
        this.name = name;
        this.field = field;
        this.min = min;
    }
    validate(){
        if( pareFloat(this.field) > this.min){
            return true;           
        }
        else{
            return false;
        }
    }
    getMessage(){
        return `${this.name} must be more than ${this.min}. You entered ${this.field}`;
    }
}