function calc(){ //creating a function called "calc"

    //retrives values from the input field from the html file with the matching id and stores them in the respective variables.
    //parseFloat converts the datatype to Float
    var petrol_cost = parseFloat(document.getElementById('Petrolcost').value); 
    var  total_liters = parseFloat(document.getElementById('Liters').value);
    
    //to check if the values inserted are numbers by using "isNan"
    if(isNaN(petrol_cost) || isNaN(total_liters)){
        
        //if they arent a number then the output will be "Invalid input"
        document.querySelector('#totalcost').innerText = "Invalid input";
    } else {

        //if the requirment is satisfed the "petrol_cost" variable is multipled with the "total_liters" variable
        document.querySelector('#totalcost').innerText = "£" + petrol_cost * total_liters;
    }
}