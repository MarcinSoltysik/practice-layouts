const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

const btn = document.getElementById('btn');

const errorMsg = document.getElementsByClassName('error');
const successIcon = document.getElementsByClassName('success-icon');
const failureIcon = document.getElementsByClassName('failure-icon');

let engine = (id, serial, message) => {
  // console.log(id);
  console.log(serial);

  if (id.value.trim() === '') {
    errorMsg[serial].innerHTML = message;
    console.log(errorMsg[serial]);
    id.style.border = '2px solid red';
    // console.log(typeof id);

    // icons
    failureIcon[serial].style.opacity = '1';
    successIcon[serial].style.opacity = '0';
  } else {
    errorMsg[serial].innerHTML = '';
    id.style.border = '2px solid green';

    // icons
    failureIcon[serial].style.opacity = '0';
    successIcon[serial].style.opacity = '1';
  }
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  engine(username, 0, 'Username cannot be blank');
  engine(email, 1, 'Email cannot be blank');
  engine(password, 2, 'Password cannot be blank');
});
