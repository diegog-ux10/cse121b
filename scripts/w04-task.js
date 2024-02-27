/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
  name: 'Diego Granados',
  photo: 'images/diego.png',
  favoriteFoods: ['Pizza', 'Espagueti', 'Donuts'],
  hobbies: ['Watch sports', 'sleeping', 'Play video games'],
  placeLived: [],
};

/* Populate Profile Object with placesLive objects */

myProfile.placeLived.push({ place: 'Maracaibo, VEN', length: '5 years' });
myProfile.placeLived.push({ place: 'Caracas, VEN', length: '25 years' });

/* DOM Manipulation - Output */

/* Name */

const nameElement = document.getElementById('name');
nameElement.innerText = myProfile.name;

/* Photo with attributes */

const imageElement = document.getElementById('photo');
imageElement.setAttribute('src', myProfile.photo);
imageElement.setAttribute('alt', myProfile.name);

/* Favorite Foods List*/

const foodList = document.getElementById('favorite-foods');
myProfile.favoriteFoods.forEach((food) => {
    const foodElement = document.createElement('li');
    foodElement.textContent = food;
    foodList.appendChild(foodElement);
});

/* Hobbies List */

const hobbiesList = document.getElementById('hobbies');
myProfile.hobbies.forEach((hobby) => {
    const hobbyElement = document.createElement('li');
    hobbyElement.textContent = hobby;
    hobbiesList.appendChild(hobbyElement);
});
hobbiesList.innerText = myProfile.hobbies.join(', ');

/* Places Lived DataList */

const placesElement = document.getElementById('places-lived');
myProfile.placeLived.forEach(place => {
    const placeElement = document.createElement('dt');
    const lengthElement = document.createElement('dd');
    placeElement.textContent = place.place
    lengthElement.textContent = place.length

    placesElement.append(placeElement, lengthElement)
})
