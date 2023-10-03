import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const refs = {
   form: document.querySelector('.feedback-form'),
   email: document.querySelector('[name="email"]'),
   message: document.querySelector('[name="message"]'),
}

const formData = {}; 


getItem();

refs.form.addEventListener('input', throttle(setItem, 500));
refs.form.addEventListener('submit', onSubmitTarget);

function setItem(e){
    
    formData[e.target.name] = e.target.value;  
    // console.log(formData)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function getItem(){
    const persistedState = localStorage.getItem(STORAGE_KEY)
    if(persistedState){
        const {email, message} = JSON.parse(persistedState);;

        refs.email.value = email;
        refs.message.value = message;
    }
}

function onSubmitTarget(e){
    e.preventDefault();

    console.log('Отправка формы');

    e.target.reset();

    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}

