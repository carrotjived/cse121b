import { fetchJoke } from "./get-values.mjs"

const jokeDisplay = document.querySelector('#jokeDisplay');
const saveJokeElement = document.querySelector("#saved");
const generateButton = document.querySelector('#generate');
const saveButton = document.querySelector('#save');

var jokeList = []

async function displayOnClick() {
	const {joke} = await fetchJoke("https://icanhazdadjoke.com");
	jokeDisplay.textContent = joke;
	jokeList.push(joke);
	console.log(jokeList);
	
	
}

function reset() {
	saveJokeElement.innerHTML = '';
}
function onClick(){
	reset()
	jokeList.forEach(joke => {
		let list = document.createElement('li');
		list.textContent = joke;
		saveJokeElement.appendChild(list);

		
	});
}

saveButton.addEventListener('click', onClick);
generateButton.addEventListener('click', displayOnClick);






