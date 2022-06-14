(function(){

    "use strict";
let destailsForm = document.querySelector("#destination_details_form");

destailsForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event){
    event.preventDefault();
      
    
    let destName     = event.target.elements["name"].value;
    let destLocation = event.target.elements["location"].value;
    let destPhoto    = event.target.elements["photo"].value;
    let destDesc     = event.target.elements["description"].value;
    
    //2. clear out the form fields
    for(let i =0; i < destailsForm.length; i++){
        destailsForm.elements[i].value = "";
    }
    //3. run a function that creates the new card

     //5. add the card
     let destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);

    let wishListContainer = document.getElementById("destinations_container");

    if (wishListContainer.children.length === 0){
    document.getElementById("title").innerHTML = "My Wish List";
    //could also be: 
    //document.getElementById("title").innerHTML = "My Wish List";
    }

    document.querySelector('#destinations_container').appendChild(destCard);
   
    }
//conferido 28th page 2x




    function createDestinationCard(name, location, photoURL, description){
    
        let card = document.createElement("div");
         card.className = "card";

    let img = document.createElement('img');
    //here the alt always receives the same name as name of the image
    img.setAttribute('alt', name);
    let constantphotoUrl = "images/signpost.jpg";

    if(photoURL.length ===0){
         img.setAttribute('src', constantphotoUrl);
    }
     else{
        img.setAttribute('src', photoURL);
    }

        card.appendChild(img);
        //conferido 47 page

      let cardBody = document.createElement("div");
     cardBody.className = "card-body";

     let cardTitle = document.createElement('h3');
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle);

     let cardSubtitle = document.createElement('h4');
     cardSubtitle.innerText = location;
        cardBody.appendChild(cardSubtitle);

         if(description.length !==0){
            let cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.innerText = description;
            cardBody.appendChild(cardText);
    
         }
//conferido page 65

        let cardDeleteBtn = document.createElement('button');
        cardDeleteBtn.innerText = 'Remove';
        




            cardDeleteBtn.addEventListener("click", removeDestination);
            cardBody.appendChild(cardDeleteBtn);
         //
            card.appendChild(cardBody);
            return card;





}

function removeDestination (event){
    let card = event.target.parentElement.parentElement;
    // it goes up one parent, then another parent and removes it
    card.remove();
}


}());


