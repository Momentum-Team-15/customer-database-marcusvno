console.log("Hello world");
const roladexDiv = document.querySelector("#roladex");

function buildCardGrid(customerArray) {
    for(let person of customerArray){
        let cardContainer = document.createElement('div');
        let name = document.createElement("h2");
        let imageInject = document.createElement("img");

        imageInject.src = `${person.picture.medium}`;

        name.innerText = `${capitalizeFirstLetter(person.name.first)} ${capitalizeFirstLetter(person.name.last)} `;
        
        cardContainer.appendChild(imageInject);
        cardContainer.appendChild(name);

        roladexDiv.appendChild(cardContainer);

        cardContainer.classList.add("card");
        }

}

buildCardGrid(customers);
console.log("goodbye world");

function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log (capitalizeFirstLetter('marcus'));