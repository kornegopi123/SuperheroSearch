function addToFavorites(id, name, butto, image) {
    const faList = document.getElementById('faList');
    const faItem = document.createElement('div');
    faItem.classList.add('faItem');
   
    butto.textContent = "Added to favourites";
    butto.style.backgroundColor ="red";
    butto.style.color="white";
    butto.disabled= true;
    
    faItem.innerHTML =
    `<h3>${name}</h3>
    <img src="${image}" class="image"></img>
    <button id="remove-btn-${id}" class="remove-btn">Remove</button>`;
    faItem.setAttribute('data-id',id);
    faList.appendChild(faItem);

    const removeButton = document.getElementById(`remove-btn-${id}`);
    removeButton.addEventListener('click', () => removeFromFavorites(id, butto));
}

function removeFromFavorites(id, butto) {
    const faList = document.getElementById('faList');
    const faItemToRemove = document.querySelector(`.faItem[data-id="${id}"]`);
    if (faItemToRemove) {
        faList.removeChild(faItemToRemove);

        butto.textContent = "Add to Favourites";
        butto.style.backgroundColor="";
        butto.style.color="";
        butto.disabled=false;
    }
}

