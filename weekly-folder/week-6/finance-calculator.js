/**
 * Title: finance-Calculator.js
    Author: Manel Phiseme
    Date: 7/3/2022
    Description: This code contain class finance-Calculator.js
 **/

//class RequiredField 
//Calculate future value and have it in U.S currency
export class FinanceCalculator {
    static MONTHS_IN_YEAR = 12;
    static calculateFutureValue(monthlyPayment, rate, years){
        let month = years * this.MONTHS_IN_YEAR;
        let interestRate = 1 + rate/100;
        let presentValue = monthlyPayment * month;
        let futureValue = presentValue*(Math.pow(interestRate,month));
        return futureValue.toFixed(2);
    }
    convertToCurrency(field){        
        let currencyFormatter = new Intl.NumberFormat( "en-US", {
            style: "currency",
            currency: "USD"

        } );
        return currencyFormatter.format(field)
    }
}