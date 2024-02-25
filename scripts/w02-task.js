/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Diego Granados';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/diego.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementById('profile-pic');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);

/* Step 5 - Array */
const favFoods = ['Pizza', 'Espagueti', 'Donuts'];
const otherFood = 'Hot dogs';
// const listFood = document.createElement('ul')
// for(food of favFoods) {
//     const foodElement = document.createElement('li')
//     foodElement.innerHTML = food
//     listFood.appendChild(foodElement)
// }
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.push(otherFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;
