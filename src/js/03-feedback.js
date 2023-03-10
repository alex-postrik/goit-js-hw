import throttle from 'lodash.throttle';

const ref = {
  formRef: document.querySelector('.feedback-form'),
  emailRef: document.querySelector('input[name="email"]'),
  messageRef: document.querySelector('textarea[name="message"]'),
};

const dataBase = {
  email: '',
  message: '',
};

const STORAGE_KEY = localStorage.getItem('');

ref.formRef.addEventListener('input', throttle(validateForm, 500));

function validateForm(e) {
  const { name, value } = e.target;
  dataBase[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(dataBase));
}

function submitForm(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(dataBase);
}

ref.formRef.addEventListener('submit', submitForm);
getDataBase();

function getDataBase() {
  const parsedData = JSON.parse(STORAGE_KEY);
  if (parsedData) {
    ref.emailRef.value = parsedData.email;
    ref.messageRef.value = parsedData.message;
  }
}
