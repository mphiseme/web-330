/** Title: calorie-converter.js
    Author: Manel Phiseme
    Date: 6/19/2022
    Description: The below codes import the class FoodMole use it within the new
    class CalorieConverter. This class holds the name of the food and their calories.
    Class FoodModel is imported and CalorieConverter is exported
    */

import {FoodModel} from "./food-model.js";

export class CalorieConverter {
    static data = [
       new FoodModel(1007, 'Egg', 78),
       new FoodModel(1008, 'Apple', 95),
       new FoodModel(1009, 'Hamburger', 354),
       new FoodModel(1010, 'Fries', 400),
       new FoodModel(1011, 'Banana', 105),
       new FoodModel(1012, 'Soda', 150),       
        
    ];
    static find(stringV){        
        return this.data.filter((data) => {
            if (stringV.includes(data.name.toLowerCase())){
            return data;        
          }        

        });
        
    }
}
