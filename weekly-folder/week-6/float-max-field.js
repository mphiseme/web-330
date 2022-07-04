/**
 * Title: float-max-field.js
    Author: Manel Phiseme
    Date: 6/27/2022
    Description: This code contain class float-max-field.js
 **/

//class FloatMaxField 
//This class check to see if user's input is less than the max
//value

export class FloatMaxField {
    constructor(name, field, max){
        this.name=name;
        this.field=field;
        this.max=max;
    }
    validate(){
        if(parseFloat(this.field) < this.max){
            return true;           
        }
        else{
            return false;
        }
    }
    getMessage(){
        return `${this.name} must be more than ${this.max}. You entered ${this.field}`;
    }
}