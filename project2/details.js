//Driver file for Rick and Morty Characters Website
//Foundations of Mobile Design ISTE 252
//Taylor Dennison

let pageOutput = "";

//grab ID from local storage
const selectedCharacterID = localStorage.getItem("Choice");

//get data to local storage.
const charactersString = localStorage.getItem("fileData");

//parse data for use on this page.
const characters =JSON.parse(charactersString);

//determine selected character and send results to page.

characters.forEach((item) => {
    if (item.id == selectedCharacterID) {

        pageOutput = characterTemplate(item)
        addHTMLToPage(pageOutput);
    }
});



function addHTMLToPage(data_input) {
    const charactersContainer = document.getElementById("characterContent");
    charactersContainer.insertAdjacentHTML("afterbegin", data_input);

}

function characterTemplate(item) {
    return  `<img id = "characterPhoto" src="${item.image}" alt="${item.firstName} ${item.lastName}">
    <div id="characterInfo">
        <h2>${item.firstName} ${item.lastName}</h2>
        <p><b>Age:   </b>${item.age}</p>
        <p><b>Profession:   </b>${item.profession}</p>
        <br>
        <p><b>Description:   </b>${item.description}</p>
    </div>`
}
