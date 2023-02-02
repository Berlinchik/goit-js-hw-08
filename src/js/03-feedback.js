//імпортую throttle
import throttle from 'lodash.throttle';
// отримую доступ до форми і до інпутів
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input');
const messagelInput = form.querySelector('textarea');
//якщо в localStorage є якісь збережені данні - підставляю їх в інпути
const currentData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (currentData) {
  emailInput.value = currentData.email || '';
  messagelInput.value = currentData.message || '';
}
//вішаю слухачі на форму
form.addEventListener('input', throttle(pushToServer, 1000));
form.addEventListener('submit', onSubmitForm);
//створюю пустий обʼєкт, щоб потім в нього зберегти данні з інпутів
const obj = {};
//функція для додавання данних на локальне сховище
function pushToServer({ target }) {
  obj[target.name] = target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
}
//при сабміті виводимо дані(взяті з локального сховища) у вигляді обʼєкту в консоль, стираємо інпути та чистимо локальне сховище
function onSubmitForm(e) {
  e.preventDefault();
  if (emailInput.value === '' || messagelInput.value === '') {
    return alert('Заповніть усі поля!');
  }
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.target.reset();
  localStorage.removeItem('feedback-form-state');
}
