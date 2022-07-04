/**
 * Title: float-max-field.js
    Author: Manel Phiseme
    Date: 6/27/2022
    Description: This code contain class float-max-field.js
 **/

//class FloatMaxField 
//check if a user 

export class FloatMaxField {
    constructor(name, field, max){
        this.name=name;
        this.field=field;
        this.max=max;
    }
    validate(){
        if(typeof this.field == "number" < this.max){
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