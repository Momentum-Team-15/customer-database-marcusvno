console.log("Hello world");
const roladexDiv = document.querySelector("#roladex");

function buildCardGrid(customerArray) {
    for(let person of customerArray){
        let cardContainer = document.createElement('div');
        let imageInject = document.createElement("img");
        let name = document.createElement("h2");
        let customerEmail = document.createElement('p');
        let customerAddress = document.createElement('p');
        let customerDOB = document.createElement('p');
        //let dateSort = moment(person.dob.date);

        let customerReg = document.createElement('p');

        imageInject.src = `${person.picture.medium}`;
        name.innerText = `${capitalizeFirstLetter(person.name.first)} ${capitalizeFirstLetter(person.name.last)} `;
        customerEmail.innerText = person.email;
        customerAddress.innerText = `${person.location.street.number} ${person.location.street.name}\n${person.location.city}, ${nameToAbbr(person.location.state)} ${person.location.postcode}`; 
       // customerDOB.innerText = `DOB: ${moment().format(person.dob.date, )}`;

        cardContainer.appendChild(imageInject);
        cardContainer.appendChild(name);
        cardContainer.appendChild(customerEmail);
        cardContainer.appendChild(customerAddress);
        cardContainer.appendChild(customerDOB);

        roladexDiv.appendChild(cardContainer);

        cardContainer.classList.add("card");
        customerEmail.classList.add("email");
    
        }

}

buildCardGrid(customers);
console.log("goodbye world");

function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}