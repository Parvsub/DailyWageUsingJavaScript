const futMetEmp = {firstName: "Rohith", lastName: "Gopala", age: 22};
const futMetEmpNew = {};
const futMetEmpObj = new Object();
console.log(futMetEmp);
console.log(futMetEmpNew);

futMetEmpNew.firstName = "Praveen";
futMetEmpNew.lastName = "Kumar";
futMetEmpNew.age = 25;
console.log(futMetEmpNew);
// delete futMetEmpNew.age;
console.log(futMetEmpNew);
futMetEmpNew.state = "Karnataka";
futMetEmpNew.city ="Bengaluru";
futMetEmpNew.district = "Bengalulu south";
//display the values 
for(let variable in futMetEmpNew)
{
    // console.log(futMetEmpNew [variable]);
}
//Display using object.values
console.log(Object.values(futMetEmpNew));

console.log(JSON.stringify(futMetEmpNew));

console.log(typeof JSON.stringify(futMetEmpNew));

let text ="I belonb to Bengaluru visveswaraya museum is 18 km away from my residence and nandhi hills is 70 kms away bridgelabz is more than 1000 kms away"
           +"I want to stay in 'india' ";
           console .log(text);


let multilinetext =`I belong to Bengaluru visveswaraya museum is 18 km away from my residence and nandhi hills is 70 kms away bridgelabz is more than 1000 kms away
                    I want to stay in 'india'` ;
                    console.log(multilinetext);

let question1 = "hey, Sudheer when are you going to Bhimavaram again";
let question2 = "hey, Rohith when are you going to Hyderabad again";

//string interpolation : Automatic replacement of variable with real value
//Template literal (variableSubstituationDemo) : literals defined with a backtick character 
let variableSubstitutionDemo = `hey, ${futMetEmpNew.firstName} when are you going to ${futMetEmpNew.city} again`

console.log(variableSubstitutionDemo);