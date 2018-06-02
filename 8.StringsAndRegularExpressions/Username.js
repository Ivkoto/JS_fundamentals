function getUsername(emails){
    let userList = [];
    for (const email of emails) {
        let emailDetails = email.split('@');
        let username = emailDetails[0] + '.';
        let domain = emailDetails[1].split('.');

        let test = 'test';
        
        domain.forEach(element => {
            username += element[0]
        });

        userList.push(username);
    }

    return userList.join(', ');
}

console.log(getUsername(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']))