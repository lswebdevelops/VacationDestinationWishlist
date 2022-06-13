var destailsForm = document.querySelector("#destination_details_form");

destailsForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event){
    event.preventDefault();
    //1. extract the value from each form field
    //2. clear out the form fields
    //3. run a function that creates the new card
    //4. if needed , change the header at the top of the destination list
    //5. add the card
    let destName = event.target.elements["name"].value;
    let destLocation = event.target.elements["location"].value;
    let destPhoto = event.target.elements["photo"].value;
    let destDesc = event.target.elements["description"].value;




}