import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input');
const messagelInput = form.querySelector('textarea');

const currentData =
  JSON.parse(localStorage.getItem('feedback-form-state')) || {};
emailInput.value = currentData.email || '';
messagelInput.value = currentData.message || '';

form.addEventListener('input', throttle(pushToServer, 1000));
form.addEventListener('submit', onSubmitForm);

const obj = { ...currentData };
function pushToServer({ target }) {
  obj[target.name] = target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
}

function onSubmitForm(e) {
  e.preventDefault();
  if (emailInput.value === '' || messagelInput.value === '') {
    return alert('Заповніть усі поля!');
  }
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.target.reset();
  localStorage.removeItem('feedback-form-state');
  obj.email = '';
  obj.message = '';
}
