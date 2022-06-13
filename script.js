var destailsForm = document.querySelector("#destination_details_form");

destailsForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event){
    event.preventDefault();
    //1. extract the value from each form field
   
    
    let destName = event.target.elements["name"].value;
    let destLocation = event.target.elements["location"].value;
    let destPhoto = event.target.elements["photo"].value;
    let destDesc = event.target.elements["description"].value;
    //2. clear out the form fields
    for(let i =0; i < destailsForm.length; i++){
        destailsForm.elements[i].value ="";
    }
    //3. run a function that creates the new card

    
    let wishListContainer = document.querySelector("#destinations_container");
    if (wishListContainer.children.length === 0){
    document.querySelector("#title").innerHTML = "My Wish List";
    //could also be: 
    //document.getElementById("title").innerHTML = "My Wish List";
    }

    //4. if needed , change the header at the top of the destination list


    //5. add the card

    }

    function createDestinationCard(name, location, photoUrl, description){
    let card = document.createElement("div");
    card.className = "card";

    let img = document.createElement('img');
    //here the alt always receives the same name as name of the image
    img.setAttribute('alt', name);
    let constantPhotoUrl = "images/signpost.jpg";

    if(photoUrl.length ===0){
         img.setAttribute('src', constantPhotoUrl);
    }
     else{
        img.setAttribute('src', photoUrl);
    }

        card.appendChild(img);

      let cardBody = document.createElement("div");
     cardBody.className = "card-body";

     let cardTitle = document.createElement('h3');
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle);

     let cardSubtitle = document.createElement('h4');
        cardTitle.innerText = location;
        cardBody.appendChild(cardSubtitle);
         if(description.length !==0){
            let cardText = document.createElement('p');
            cardText.className  ='card-text';
            cardText.innerText = description;
            cardBody.appendChild(cardText);
    
         }


        let cardDeleteBtn = document.createElement('button');
        cardTitle.innerText = Remove;
        
            cardDeleteBtn.addEventListener("click", removeDescription);
            cardDeleteBtn.appendChild(cardDeleteBtn);
         
            card.appendChild(cardBody);
            return card;





}


