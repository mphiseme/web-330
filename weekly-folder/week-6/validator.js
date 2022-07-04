
/**
 * Title: validator.js
    Author: Manel Phiseme
    Date: 7/3/2022
    Description: This code contain class validator.js
 **/

//class RequiredField 
//

//following codes import the class name within the brackets
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-fields.js";
import { FloatMaxField } from "./float-max-field.js";

//following codes created class Validor
//this class call all the function imported 
// and validate the user's input
export class Validator{
    //Array validators and message created
    validators = [];
    messages = [];
    constructor(name, field){
        this.name = name;
        this.field = field;
    }
    addRequiredField(){
        this.validators.push(new RequiredField(this.name, this.field));

    }
    addRequiredFloatField(){
        this.validators.push(new FloatField(this.name, this.field));        
    }
    addFloatMinField(min){
        this.validators.push(new FloatMinField(this.name, this.field,min));
    }
    addFloatMaxField(max){
        this.validators.push(new FloatMaxField(this.name,this.field,max))
    }
    validate(){
        for (let validateV of this.validators){
            if(!validateV.validate()){
                this.messages.push(validateV.getMessage());
                return false;
            }

        }
        return true;
    }
    
}