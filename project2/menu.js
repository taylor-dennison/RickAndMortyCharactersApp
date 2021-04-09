//Driver file for Rick and Morty Characters Website
//Foundations of Mobile Design ISTE 252
//Taylor Dennison


const http = new XMLHttpRequest();
const url  = "characters.json";

let pageOutput = "";
let charactersString;


//when page is finished loading, load all content from characters.json file.

http.addEventListener("load", function () {
    if (http.readyState === 4 && http.status === 200) {

        //read data from JSON File as text.
        charactersString = http.responseText;

        //add data to local storage.
        localStorage.setItem("fileData", charactersString);

        //parse data for use on this page.
        const characters =JSON.parse(charactersString);

        for (let character of characters) {
            
            pageOutput += characterTemplate(character);
            
        };

        addHTMLToPage(pageOutput);
    }


});
http.open("GET", url, true);
http.send();

function addHTMLToPage(data_input) {
    const charactersContainer = document.getElementById("charactersContainer");
    charactersContainer.insertAdjacentHTML("afterbegin", data_input);

}

function characterTemplate(item) {
    return `<div class="character" onclick= determineSelection(${item.id})><img src= "${item.image}" alt="${item.firstName} ${item.lastName}"></div>`
}

function determineSelection(selectionID) {

    localStorage.setItem("Choice", selectionID);
    window.open("details.html", "_self");
}