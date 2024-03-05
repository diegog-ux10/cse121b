/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
const filterElement =  document.getElementById('filtered')
let templeList = [];

/* async displayTemples Function */
const displayTemples = async (temples) => {
  temples.forEach((temple) => {
    const articleElement = document.createElement('article');
    const headingElement = document.createElement('h3');
    const imageElement = document.createElement('img');
    headingElement.textContent = temple.templeName;
    imageElement.setAttribute('src', temple.imageUrl);
    imageElement.setAttribute('alt', temple.location);
    articleElement.appendChild(headingElement);
    articleElement.appendChild(imageElement);
    templesElement.appendChild(articleElement);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  try {
    const response = await fetch(
      'https://byui-cse.github.io/cse121b-ww-course/resources/temples.json'
    );
    const data = await response.json();
    templeList = data
    displayTemples(data);
  } catch (error) {
    throw new Error(error);;
  }
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = ''
}

/* filterTemples Function */

const filterTemples = (temples) => {
    reset();
    const filter = document.getElementById('filtered').value;
    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temp => temp.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temp => !temp.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temp => new Date(temp.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
        default:
            displayTemples(temples);
            break;
    }

}


/* Event Listener */

filterElement.addEventListener('change', () => filterTemples(templeList))

getTemples();


