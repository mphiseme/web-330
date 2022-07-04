
/**
 * Title: validator.js
    Author: Manel Phiseme
    Date: 6/27/2022
    Description: This code contain class required-field.js
 **/

//class RequiredField 
//

//following codes import the class name within the brackets
import { RequiredField } from "./required-field";
import { FloatField } from "./float-field";
import { FloatMinField } from "./float-min-fields";
import { FloatMaxField } from "./float-max-field";

class Validator{
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
        for (let validate of this.validators()){
            if(!validate.validate()){
                this.messages.push(validate.getMessage());
                return false;
            }

        }
        return true;
    }
    
}