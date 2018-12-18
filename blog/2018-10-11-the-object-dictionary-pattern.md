---
author: "hypersprite"
title: "the object dictionary pattern"
date: "2018-10-11"
cover: "./images/hs-mg-7219.jpg"
category: "tech"
---


A coding pattern I use a lot is the dictionary pattern for resolving the proper variable or method for a particular use. If you are working on one of my projects, it is used everywhere and if you don't understand it, the code base will be confusing. In this example I'm calling the object `menu` but it can be given any variable name. Also remember, it's just an object so the results don't have to be strings, they could functions, an array, another object, anything you put in an object.


```js
const menu = {
  firstChoice: {
    meal: 'Pizza',
    drink: 'Coke',
  },
  secondChoice: {
    meal: 'Hamberger',
    drink: 'Sprite',
  },
};
```
Now let's say we have a picker that returns `firstChoice` or `secondChoice` to a question.


```
const mealQuestion = (choice) => menu[choice].meal
const drinkQuestion = (choice) => menu[choice].drink


mealQuestion('firstChoice') // 'Pizza'
mealQuestion('secondChoice') // 'Hamberger'
drinkQuestion('firstChoice') // 'Coke'


``` 


Keep in mind, they don't have to be in a function to work, anywhere you can use a variable, you can use an object dictionary.


They can also be compounded, for instance if the object had multiple sub objects or arrays, just keep adding the sub levels keys `[key][subKey][subSubKey]`


They may also be nested, which can be a little hard to read. For instance, if you had another object for the cookBook:


```js
const cookBook = {
  Pizza: {
    ovenTemp: 400,
    cookTime: 40,
  }
}
// choice === 'firstChoice'
const setOven = (choice) => setOvenTemp(cookBook[menu[choice].meal].ovenTemp);
// 400
const setTimer = (choice) => setOvenTimer(cookBook[menu[choice].meal].ovenTime);
 // 40


```