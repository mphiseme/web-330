/**
 * Title: float-field.js
    Author: Manel Phiseme
    Date: 7/3/2022
    Description: This code contain class float-field.js
 **/

//class RequiredField 
//this class validate whether a class is 

export class FloatField {
    constructor(name, field){
        this.name=name;
        this.field=field;
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
        return `${this.name} must be a float value. You entered ${field}`;
    }
    
}