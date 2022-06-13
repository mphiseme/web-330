/**
 * Title: bill.js
    Author: Manel Phiseme
    Date: 6/12/2022
    Description: these javaScript codes
    export Bill class. It takes customer's total cost.
 **/
/**
 * This class take the total of all user's input 
 */
export class Bill {
    _beverages = [];
    _appetizers = [];
    _mainCourses = [];
    _desserts = [];

     addBeverage(beverage)
    {
        this._beverages.push(beverage);
    }
    addAppetizer(appetizer){
        this._appetizers.push(appetizer);
    }
    addMainCourse(mainCourse){
        this._mainCourses.push(mainCourse);        
    }
    addDessert(dessert){
        this._desserts.push(dessert);
    }
    getTotal(){
        let total = 0;

        let beverageTotal = this._beverages.forEach(function(beverage){
            total += parseFloat(beverage.price);
        })
        let appetizersTotal = this._appetizers.forEach(function(appetizer){
            total += parseFloat(appetizer.price);
        })
        let mainCourseTotal = this._mainCourses.forEach(function(mainCourse){
            total += parseFloat(mainCourse.price);
        })
        let dessertsTotal = this._desserts.forEach(function(dessert){
            total += parseFloat(dessert.price)
        })

        let totalFinal =beverageTotal + appetizersTotal + mainCourseTotal + dessertsTotal;
        return totalFinal;        
    }
}

