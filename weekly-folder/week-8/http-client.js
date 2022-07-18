/**
 * Title: http-client.js
    Author: Manel Phiseme
    Date: 7/17/2022
    Description: HttpClient class
 **/

   export class HttpClient {
         async get (url, params = ""){
            
            url = new URL(url);
            url.search = new URLSearchParams(params)
            const res = await fetch(url.toString(), {
                method: "GET",
          });
          return res.json() ; 
         }               
    }
 
    
  
    

  
  