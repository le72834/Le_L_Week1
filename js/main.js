//import here
import Team from "./modules/DataModule.js";


//import NavSystem from "./modules/TheNavSystem";

(() => {
    //start with a Fetch all
    fetch('./DataSet.json')
    .then(res => res.json()) //parse the JSON (translate) back to plain JS
    .then(data => {
        //this is our data (DataSet.json)
        //converted to a plain JavaScript object
        handleDataSet(data);
    })
    .catch((error) => console.log(error));



    //this receives the data payload from our AJAX
     function handleDataSet(data) {
        // select our user elements and load the content
    let userSection = document.querySelector(".user-section"),
        userTemplate = document.querySelector("#user-template").content;
        debugger;

        for (let user in myData) {
            debugger;
            //make a copy of our template here and then populate the children(text element)
            //the static data from the Team object
            let currentUser = userTemplate.cloneNode(true),
            currentUserText = currentUser.querySelector('.user').children;

            currentUserText[1].textContent = myData[user].name;
            currentUserText[2].textContent = myData[user].role;
            currentUserText[3].textContent = myData[user].nickname;

            //add this new user to the view
            
            userSection.appendChild(currentUser);
        }
    }
    console.log(data);
    //handleDataSet(Team);  
})();