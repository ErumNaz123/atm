
import inquirer from "inquirer"

let myBalance=20000;
let myPin=2396;
let pinAns= await inquirer.prompt
    (
    [
    {
        name:"pin",
        message:"please enter your pin",
        type:"number",

    }
 
   ]
   );
   if(pinAns.pin===myPin){
    console.log("correct pincode");

    let operationAns= await inquirer.prompt
   (
  [
  {
    name:"operation",
    message:"what do you want",
    type:"list",
    choices:["check Balance" , "withdraw"],

   }
    ]
    );
    console.log(operationAns.operation);



    if(operationAns.operation==="withdraw"){

      let amountAns  = await inquirer.prompt
      (
      [
          {
              name: "amount",
              message:"enter your amount",
              type: "number",
  
  
  
  }
  ]
  );
  
  myBalance -= amountAns.amount;
    console.log("your remaining balance is: "+ myBalance);}



  }else{console.log("incorrect pincode");}





