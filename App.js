
let formFeilds=document.querySelectorAll('#firstForm, #formInputs input');
let formFeildsError=document.querySelectorAll('#formInputs,.error');
console.log(formFeildsError);
let firstForm1=document.getElementById('firstForm')


const[fname,lname,email,password]=formFeilds;
const[fnameError,lnameError,emailError,passwordError]=formFeildsError;

let emptyString = /^$/;
let emailRegex = /^$/;
let passRegex = /^$/;




function submitData(){
    event.preventDefault();


    let validationObj=[
        {
            feild:fname,
            error:fnameError,
            regex:emptyString,
            errorText:"First Name is Required",
        },
        {
            feild:lname,
            error:lnameError,
            regex:emptyString,
            errorText:"Last Name is Required",
        },
        {
            feild:email,
            error:emailError,
            regex:emailRegex,
            errorText:"Email is Required",
        },
        {
            feild:password,
            error:passwordError,
            regex:passRegex,
            errorText:"Password is Required",
        }
    ]
    // console.log(validationObj);
    validationObj.forEach((values)=>{
        // console.log(values);
        if(values.regex.test(values.feild.value)){
            values.feild.style.border="1px solid red";
           values.error.innerText=values.errorText;
           setTimeout(()=>{
            values.error.innerText="";
           },2000)
        }


        // if(inputCheker(values.feild.value,values.regex)){
        //     values.feild.style.border="1px solid red";
        //     values.error.innerText=values.errorText;
            
        //        setTimeout(()=>{
        //         values.error.innerText="";
        //         values.feild.style.border="";
        //        },2000)
        // }
        
    })


}

// function inputCheker(inputValue, regex){
//     return regex.test(inputValue)
// }
// console.log(inputCheker("Nadeem",emptyString));



firstForm1.addEventListener('submit',submitData);
