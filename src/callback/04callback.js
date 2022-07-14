console.log('Hello, world')

const URL = 'https://swapi.dev/api/';



function refresh () {
    fetch(`${URL}/people/1`)
        .then(res => res.json())
        .then(data => {
       
        const character = document.querySelector('.starwarsCharacter')
        character.innerHTML = data.name;
    })
}

refresh();