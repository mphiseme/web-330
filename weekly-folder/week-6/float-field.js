/**
 * Title: float-field.js
    Author: Manel Phiseme
    Date: 7/3/2022
    Description: This code contain class float-field.js
 **/

//class RequiredField 
//this class validate if user's input are float value

export class FloatField {
    constructor(name, field){
        this.name = name;
        this.field = field;
    }
    valid(){
        if(isNaN(this.field)){
            return false;
        }
        else{
            return true;
        }
    }
    getMessage(){
        return `${this.name} must be a float value. You entered ${this.field}`;
    }
    
}