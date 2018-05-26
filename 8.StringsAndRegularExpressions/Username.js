function getUsername(emails){
    let userList = [];
    for (const email of emails) {
        let emailDetails = email.split('@');
        let username = emailDetails[0] + '.';
        let domain = emailDetails[1];
        let curIndex = 0;
        let dotIndex = 0;

        while(dotIndex > -1){
            username += domain.substr(0, 1);
            dotIndex = domain.indexOf('.');
            domain = domain.substr(dotIndex + 1);
        }

        userList.push(username);
    }

    return userList.join(', ');
}

console.log(getUsername(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']))