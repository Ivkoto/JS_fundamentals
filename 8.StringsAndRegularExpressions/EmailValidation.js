function  validator(email){
    let regex = /^[a-zA-Z0-9]*@[a-z]*.[a-z]+$/;
    return regex.test(email)? "Valid" : "Invalid"   
}

console.log(validator("valid@email.bg"));
console.log(validator("invalid@emai1.bg"));