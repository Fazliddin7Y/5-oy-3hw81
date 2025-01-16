document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const username = document.getElementById('username');
    const phone = document.getElementById('phone');

    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const usernameError = document.getElementById('usernameError');
    const phoneError = document.getElementById('phoneError');

    let isValid = true;

    if (!email.value.includes('@') || !email.value.includes('.')) {
      emailError.classList.remove('hidden');
      isValid = false;
    } else {
      emailError.classList.add('hidden');
    }

    if (!password.value.trim()) {
      passwordError.classList.remove('hidden');
      isValid = false;
    } else {
      passwordError.classList.add('hidden');
    }

    if (!username.value.trim()) {
      usernameError.classList.remove('hidden');
      isValid = false;
    } else {
      usernameError.classList.add('hidden');
    }


    if (isValid) alert('Login muvaffaqiyatli amalga oshirildi!');
  });
});
