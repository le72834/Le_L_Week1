//import here
import Team from "./modules/DataModule.js";


//import NavSystem from "./modules/TheNavSystem";

(() => {
 //stub * just a place for non-compoment stuff
 //console.log('loaded');

//set up the XMLHttp object
let myReg = new XMLHttpRequest;

//make sure we can handle whatever data comeback, or any error
myReg.addEventListener("readystatechange", handleRequest);

//open a request and pass thru the URL of the data that we want
myReq.open('GET', '../DataSet.json');

//actually make the request
myReg.send();

 //console.log(Team);

 //handleRequest 
 function handleRequest() {
     if(myReq.readyState === XMLHttpRequest.DONE) {
         //check status here and proceed 
         if(myReg.status === 200) {
             //200 means done and dusted, ready to go with the dataset!
             handleDataSet(myReq.responseText);
         } else {
             //probably got some kind of error code, so handle that
             // a 404, 500 etc.. can 
         }
     }
 }

 debugger;

// select our user elements and load the content
    let userSection = document.querySelector(".user-section"),
        userTemplate = document.querySelector("#profs-template").content;

    function handleDataSet(data) {
        

        for (let user in data) {
            debugger;
            //make a copy of our template here and then populate the children(text element)
            //the static data from the Team object
            let currentUser = userTemplate.cloneNode(true),
            currentUserText = currentUser.querySelector('.user').children;

            currentUserText[1].textContent = data[user].name;
            currentUserText[2].textContent = data[user].role;
            currentUserText[3].textContent = data[user].nickname;

            userSection.appendChild(currentUser);
        }
    }

    handleDataSet(Team);  
})();