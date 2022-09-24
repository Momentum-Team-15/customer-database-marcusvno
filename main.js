console.log("Hello world");
const roladexDiv = document.querySelector("#roladex");

function buildCardGrid(customerArray) {
    for(let person of customerArray){
        let cardContainer = document.createElement('div');
        let infoContainer = document.createElement('div');
        let imgCropper = document.createElement('div');
        let imageInject = document.createElement("img");
        let name = document.createElement("p");
        let customerEmail = document.createElement('p');
        let customerAddress = document.createElement('p');
        let customerDates = document.createElement('p');

        imageInject.src = `${person.picture.medium}`;
//        name.innerText = `${capitalizeFirstLetter(person.name.first)} ${capitalizeFirstLetter(person.name.last)} `;
        name.innerText = `${person.name.first} ${person.name.last}`;
        customerEmail.innerText = person.email;
        customerAddress.innerText = `${person.location.street.number} ${person.location.street.name}\n${person.location.city}, ${nameToAbbr(person.location.state)} ${person.location.postcode}`; 
        customerDates.innerText = `DOB: ${moment(person.dob.date).format('MMM DD, YYYY')}\n Customer since: ${moment(person.registered.date).format('MMM DD, YYYY')}`;
        
        imgCropper.appendChild(imageInject);
        infoContainer.appendChild(name);
        infoContainer.appendChild(customerEmail);
        infoContainer.appendChild(customerAddress);
        infoContainer.appendChild(customerDates);
       
        roladexDiv.appendChild(cardContainer);
        cardContainer.appendChild(imgCropper);
        cardContainer.appendChild(infoContainer);

        cardContainer.classList.add('card');
        infoContainer.classList.add("info");
        imgCropper.classList.add("imgCrop");
        name.classList.add("name");
        customerEmail.classList.add("email");
        customerDates.classList.add("dates");
    }
}

buildCardGrid(customers);
/* 
function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
 */