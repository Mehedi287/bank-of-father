const clickBtn = document.getElementById('btn').addEventListener('click', function () {
    //select user email
    const emailFiled = document.getElementById('user-email');

    const userEmail = emailFiled.value;
    //select user password
    const passrodFiled = document.getElementById('user-password');

    const userPassword = passrodFiled.value;
    if (userEmail == 'mh0816150@gmail.com' && userPassword == 'mehedi') {
        window.location.href = 'get-mony.html';
    }

})