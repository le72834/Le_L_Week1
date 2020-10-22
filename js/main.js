//import here
//import Team from "./modules/DataModule.js";


//import NavSystem from "./modules/TheNavSystem";
import {fetchData} from "./modules/DataMiner.js";

(() => {
    
    



    //this receives the data payload from our AJAX
     function handleDataSet(data) {
        // select our user elements and load the content
    let userSection = document.querySelector(".user-section"),
        userTemplate = document.querySelector("#user-template").content;
        debugger;

        for (let user in data) {
            debugger;
            //make a copy of our template here and then populate the children(text element)
            //the static data from the Team object
            let currentUser = userTemplate.cloneNode(true),
            currentUserText = currentUser.querySelector('.user').children;

            currentUserText[1].src = `images/${data[user].avatar}.jpg`;
            currentUserText[2].textContent = data[user].name;
            currentUserText[3].textContent = data[user].role;
            currentUserText[4].textContent = data[user].nickname;

            //add this new user to the view
            
            userSection.appendChild(currentUser);
        }
        console.log(data);
    }
    
    fetchData('./DataSet.json').then(data => handleDataSet(data)).catch(err => console.log(err));
    fetchData('./AnotherDataSet.json').then(data => handleMoreDataSet(data)).catch(err => console.log(err));
    
})();