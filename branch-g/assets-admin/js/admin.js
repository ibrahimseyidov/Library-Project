$(document).ready(() => {
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('pass');
console.log(storedEmail);
console.log(storedPassword);
   $("#fname").val(storedEmail)
   $(".pass-inp").val(storedPassword)
})