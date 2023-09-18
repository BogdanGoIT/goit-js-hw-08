import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/feedback-form.css';

const STORAGE_KEY = 'feedback-msg';

const formData = {}

const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea'),
}

refs.form.addEventListener('submit', onSubmitForm);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('input', evt => {
    // console.log(evt.target.name);
    // console.log(evt.target.value)

    formData[evt.target.name] = evt.target.value;

    // console.log(formData);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

    const savedData = localStorage.getItem(STORAGE_KEY)
    console.log('savedData', savedData);

    const parsedData = JSON.parse(savedData)
    console.log(parsedData, 'parsedData');

    
})

// populateTextarea();

/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */
function onSubmitForm(evt){
    evt.preventDefault();

    console.log('Отправляем форму');

    // очищаем поля формы после отправки
    evt.target.reset();

    // очищаем localStorage после отправки
    localStorage.removeItem(STORAGE_KEY);
}

/*
 * - Получаем значение поля
 * - Сохраняем его в хранилище
 * - Можно добавить throttle
 */

// function onTextareaInput(evt){
//     const message = evt.target.value;
    
//     localStorage.setItem(STORAGE_KEY, message);


// }

/*
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */
// function populateTextarea(){
//     const savedMessage = localStorage.getItem(STORAGE_KEY);

//     if(savedMessage){
//     console.log(savedMessage);

//     refs.textarea.value = savedMessage;
//     }

// }


