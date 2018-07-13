function  validator(email){
    let regex = /^[a-zA-Z0-9]*@[a-z]*.[a-z]+$/;
    let result = regex.test(email);
    if (result !== true) {
        return "Invalid"
    }

    return "Valid"
}

//console.log(validator("valid@email.bg"));
console.log(validator("invalid@emai1.bg"));