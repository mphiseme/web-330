
/**
 * Title: required-field.js
    Author: Manel Phiseme
    Date: 7/3/2022
    Description: This code contain class required-field.js
 **/

//class RequiredField 
//check user's input to see if it's a string value
//If it's string value return true
//If not return false

export class RequiredField {
    constructor(name, field){
        this.name = name;
        this.field = field;
    }    
    validate(){
        if (typeof this.field ==="string"){
            return true;
        }
        else {
            return false;
        }
    }
    getMessage(){
        return `${this.name} is a required field`;
    }
}