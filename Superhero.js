const publicKey = '0ec872263ea7a0884e146f63cd54b061';
//const privateKey = '70fd895284205d94082b2c2682ac3d65b0a657fb';
const baseUrl = 'https://gateway.marvel.com/v1/public/characters';
const ts = '1706090516188';
//console.log(ts);//'1705892014516'
//generated using MDShashGenerator ts+privatekey+publickey as mentioned in the document
const hash = '2f2bad24493ddfc1ae04b81985b991ef';//'ded003b375f11219dbda4eca53807afb';

function searchSuperheroes() {
    const searchInput = document.getElementById('searchInput').value;
    console.log(searchInput);
    const url1 = `${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    const url2 = `${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${searchInput}`;
    const url = searchInput===''? url1 : url2;
    fetch(url)
  .then(response => {
    return response.json();})
  .then(data => {
      displaySuperheroes(data.data["results"]);});
}
function displaySuperheroes(superheroes) {
    const superheroesList = document.getElementById('superheroesList');
    superheroesList.innerHTML = '';
    superheroes.forEach(superhero => {
        //console.log(superhero);
        const superheroItem = document.createElement('div');
        superheroItem.classList.add('superhero');
        superheroItem.innerHTML = `<h3>${superhero.name}</h3>
            <img src="${superhero.thumbnail["path"]+"."+superhero.thumbnail["extension"]}"></img>
            <button onclick="addToFavorites('${superhero.id}','${superhero.name}',this,'${superhero.thumbnail["path"]+"."+superhero.thumbnail["extension"]}')" class= "add-fav">Add to Favourites</button>
            <button onclick="fetchFullDetails('${superhero.id}', this)" class="more-info">More Info</button> `;
        superheroesList.appendChild(superheroItem);
    });
}

