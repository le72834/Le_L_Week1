//import here
import Team from "./modules/DataModule.js";


//import NavSystem from "./modules/TheNavSystem";

(() => {
 //stub * just a place for non-compoment stuff
 //console.log('loaded');

//set up the XMLHttp object
let myReq = new XMLHttpRequest;

//make sure we can handle whatever data comeback, or any error
myReq.addEventListener("readystatechange", handleRequest);

//open a request and pass thru the URL of the data that we want
myReq.open('GET', '../DataSet.json');

//actually make the request
myReq.send();

 //console.log(Team);

 //handleRequest 
 function handleRequest() {
     if(myReq.readyState === XMLHttpRequest.DONE) {
         //check status here and proceed 
         if(myReq.status === 200) {
             debugger;
             //200 means done and dusted, ready to go with the dataset!
             handleDataSet(JSON.parse(myReq.responseText));
         } else {
             //probably got some kind of error code, so handle that
             // a 404, 500 etc.. can 
             console.error(`${myReq.status} : somthing done broke, son`);
         }
     } else {
         //request isn't ready yet, keep waiting...
         console.log(`Request state: ${myReq.readyState}. Still processing...`);
     }
 }

 debugger;

// select our user elements and load the content
    let userSection = document.querySelector(".user-section"),
        userTemplate = document.querySelector("#profs-template").content;

    function handleDataSet(data) {
        debugger;

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

    //handleDataSet(Team);  
})();