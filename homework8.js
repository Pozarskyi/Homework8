// task1

// function upperCase(text) {
//     let reg = /[A-Z]/;
//     let result = reg.test(text)
//     if(result) {
//         console.log("String's starts with uppercase character")
//     }else {
//         console.log("String's not starts with uppercase character ")
//     }
// }
// upperCase('regexp');
// upperCase('RegExp');

// task2

// function checkEmail(text) {
//     let reg = /@gmail/g;
//     console.log(reg.test(text));
// }

// checkEmail("Qmail2@gmail.com");

// task3

// let str = 'cdbBdbsbz';
// let reg = /d(b+)(d)/ig

// let result = reg.exec(str)
// console.log(result);

// task4

// let str = 'Java Script';
// let reg = /\s/;
// let result = str.split(reg).reverse().join(',');
// console.log(result);

// task5

// function numberCard(number) {
//     let reg = /([0-9]{4})\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}/g
//     let result = reg.test(number);
//     console.log(result);
// }

// numberCard('9999-9999-9999-9999');


// task6

// function checkEmail(str) {
//     let reg = /^[a-zA-Z][0-9a-zA-Z_]{2,21}@[a-zA-Z]{2,12}\.[a-zA-Z]{2,12}/i
//     let result = reg.test(str);
//     if(result) {
//         console.log('Email is correct!')
//     }else {
//         console.log('Email is not correct!')
//     }
// }

// checkEmail('my_mail@gmail.com');
// checkEmail('#my_mail@gmail.com');
// checkEmail('my_ma--il@gmail.com');

// task7

// function checkLogin(str) {
//     let reg = /^[a-zA-Z]{1}[\w\.]{2,10}$/g
//     let result = reg.test(str);
//     console.log(result);

//     console.log(str.match(/\d(\.\d)?/gi))
// }

// checkLogin('ee1.1ret3');
// checkLogin('ee1*1ret3');




