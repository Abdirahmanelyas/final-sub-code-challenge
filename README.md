# final-sub-code-challenge
SUPPLEMENTARY ASSESSMENT

As it was communicated to you about the supplementary project regarding your plagiarism on code challenge. This will form the basis for your progress to the next phase. Ensure you finish it within the time limit allocated to you and have it marked by your TM.

  

Instructions:

## Learning Goals

-   Access information from an API using a GET request and use it to update the DOM
    
-   Listen for user events and update the DOM in response
    
-   Send data to an API using a POST request
    

## Introduction

For this assessment, your objective is to build a frontend for our monsters data. Currently provided below this page. Create a db.json file and store the data inside.

  

## Deliverables

-   When the page loads, show the first 50 monsters. Each monster's name, age, and description should be shown.
    
-   Above your list of monsters, you should have a form to create a new monster. You should have fields for name, age, and description, and a 'Create Monster Button'. When you click the button, the monster should be added to the list and saved in the API.
    

## API methods

Get the list of monsters:

GET [http://localhost:3000/monsters](http://localhost:3000/monsters)

  

optional parameters:

  

_limit=[number] - limit the number of monsters returned

_page=[number] - offset your request for monsters to some page (must specify a limit)

  

example:

  

GET [http://localhost:3000/monsters/?_limit=20&_page=3](http://localhost:3000/monsters/?_limit=20&_page=3)

  

sample response:

[

{

"name": "Chronos",

"age": 4005.302453418598,

"description": "Effulgence eldritch shunned foetid. Ululate gibbering tenebrous foetid iridescence daemoniac. Stench nameless gambrel. Amorphous furtive iridescence noisome. Foetid mortal nameless.",

"id": 1

},

{

"name": "Tartarus",

"age": 1874.4913565609456,

"description": "Cyclopean swarthy amorphous singular accursed furtive non-euclidean stygian. Swarthy gibbering charnel eldritch daemoniac gibbous. Cyclopean lurk hideous tentacles squamous immemorial tenebrous mortal. Madness tentacles furtive mortal foetid decadent. Foetid immemorial comprehension.",

"id": 2

},

{

"name": "Hemera",

"age": 4094.8375978925988,

"description": "Dank immemorial abnormal gambrel. Cat lurk unutterable. Abnormal tenebrous ululate. Nameless swarthy manuscript eldritch indescribable accursed antediluvian decadent.",

"id": 3

}

]

  

Create a monster:

POST [http://localhost:3000/monsters](http://localhost:3000/monsters)

headers:

{

"Content-Type": "application/json",

Accept: "application/json"

}

  

body:

{ name: string, age: number, description: string }

  

Use data from the below link to populate your db.json data

[https://api.npoint.io/4feac36f41d8e0decc70](https://api.npoint.io/4feac36f41d8e0decc70)

NB: Remember to deploy both your frontend and your db.json when done.

  

If you encounter any challenges kindly reach out to us.

  

GOOD LUCK