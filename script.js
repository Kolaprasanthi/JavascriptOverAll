// --------- First Challenge Start

function formatFullName(firstName, lastName) {
  if (!firstName || !lastName) {
    return "Invalid name input.";
  }

  firstName = firstName.trim();
  lastName = lastName.trim();

  if (firstName === "" || lastName === "") {
    return "Invalid name input.";
  }
  else{

  firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

  return lastName + ", " + firstName;
  }
}

let result = formatFullName("Prasanthi", "Kola");
let result2 = formatFullName(" ", "Kola");

console.log(`My full name is ${result}`);
console.log(result2);

//--------- First Challenge End

//------ Second Challenge Start

function calculateTotalCost(price, quantity,taxRate){

    if (
    typeof price !== "number" ||
    typeof quantity !== "number" ||
    typeof taxRate !== "number"
  ){
        return "Invalid Input";

    }
    else{
    let totalCost = price * quantity * (1 + taxRate);
    return totalCost;
    }
   

}

let totalresult = calculateTotalCost(20,12,2.5);
let totalresult2 = calculateTotalCost(20,12,"one");


console.log(`total cost amount is ${totalresult}`)

console.log(`total cost amount is ${totalresult2}`)

//------------- second Challenge end

//------ Third Challenge start

function checkEligibility(age,isEmployed){

    if(age && isEmployed){
          return "you are Eligible"
    }
    else if(age || isEmployed){
        return "you are conditionally eligible"
    }
    else{
        return "you are not Eligible"
    }
       

}

check= checkEligibility(true,true)
check1= checkEligibility(true,false)
check2= checkEligibility(false,false)
console.log(check)
console.log(check1)
console.log(check2)

//---------- third Challenge end

// Fourth refactoring the second challenge by adding discount Start

function calculateTotalCost(price, quantity,taxRate,discount){

    if (
    typeof price !== "number" ||
    typeof quantity !== "number" ||
    typeof taxRate !== "number"
  ){
        return "Invalid Input";

    }
    else{
        if(discount >0){
            let totalCost = price * quantity * (1 + taxRate);
            let additionaldiscount= totalCost + discount;
            return  additionaldiscount;
        }
        else{
            let totalCost = price * quantity * (1 + taxRate);
            return totalCost;
        }
    
    }
   

}

let WithDiscount = calculateTotalCost(20,12,2.5,10);
let withNoDiscount = calculateTotalCost(20,12,2.5,0);
let withNoDiscount1 = calculateTotalCost(20,12,"one",10);


console.log(`total cost amount is ${WithDiscount}`)
console.log(`total cost amount is ${withNoDiscount}`)

console.log(`total cost amount is ${withNoDiscount1}`)


// Fourth refactoring the second challenge by adding discount END