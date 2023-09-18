console.log(localStorage);

// ключи и значение (что бы сохранить массив или обьект приводим сначала к JSON.stringify)
localStorage.setItem('my-data', JSON.stringify({name: 'Mango', age: 20}))

// прочитать из localStorage
const savedData = localStorage.getItem('my-data');
console.log('savedData', savedData);

// распарсить данные
const parsedData = JSON.parse(savedData);
console.log('parsedData', parsedData)



// const user = {
//     name: 'Mango',
//     age: 20
// }

// // stringify - из массива или обьекта делает строку
// console.log(JSON.stringify(user));

// const savedUserData = '{"name":"Mango","age":20}';

// // parse - берет строку и пытаеться её распарсить
// console.log(JSON.parse(savedUserData))