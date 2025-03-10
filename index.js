// Write your code here!

const mainElement = document.getElementById('main');
if (mainElement) {
  mainElement.remove();
}

const newHeader = document.createElement('h1');
newHeader.id = 'victory'; //setting the id to'victory'
const name="Tina-Manga";
newHeader.innerText = 'Tina-Manga is the champion'; // Replace YOUR-NAME with your actual name
document.body.appendChild(newHeader); // Or append it to a specific container if necessary 