function fetchFullDetails(id,butt)
{
    butt.textContent = "Full Details Below";
    butt.style.backgroundColor = "blue";
    butt.style.color = "white";
    butt.disabled = true;
    const Url = `${baseUrl}/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    fetch(Url).then(response => response.json()).then(data => displayFullDetails(data.data.results[0]))
    .finally(()=>{
        butt.disabled = false;
        butt.textContent = "More Info";
        butt.style.backgroundColor = "";
        butt.style.color = "";
    });
}

function displayFullDetails(superhero){
    //console.log(superhero);
    const container = document.getElementById('superheroDetails');
    container.innerHTML = ` <h4>${superhero.name}</h4>
    <img src="${superhero.thumbnail.path}.${superhero.thumbnail.extension}" alt="${superhero.name}" class="image-but">
    <p>${superhero.description}</p>
    <h4>Comics:</h4>
    <ul>
        ${superhero.comics.items.map(comic => `<li>${comic.name}</li>`).join("")}
    </ul>
    <h4>Series:</h4>
    <ul>
        ${superhero.series.items.map(series => `<li>${series.name}</li>`).join("")}
    </ul>
    <h4>Stories:</h4>
    <ul>
        ${superhero.stories.items.map(story => `<li>${story.name}</li>`).join("")}
    </ul>
    <h4>Events:</h4>
    <ul>
        ${superhero.events.items.map(event => `<li>${event.name}</li>`).join("")}
    </ul>`;
    } 
