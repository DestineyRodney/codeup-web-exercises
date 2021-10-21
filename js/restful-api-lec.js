console.log("Hello restful API's");

const API_URL = "https://vagabond-glacier-verse.glitch.me/dogs";

function getDogs(){
    return fetch(API_URL)
        .then((response)=>response.json()); //gives back promise
}
//get all dogs
getDogs().then((dogs)=>console.log(dogs))
// go through scenario w fetch do json and return back the parsed openDatabase
//
//     or return data and let whoever is going to call put then on end

function getDog(id){
    return fetch(`${API_URL}/${id}`)
        .then((response)=>response.json());
}
//get dog at index
getDog(11).then((dog)=>console.log(dog));

//Edit a dog by ID
//take in dog object as dog
//sending data up
function editDog(dog) {
    let options ={
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(dog) //convert the JS object into a json string before sending to main server
    }
    return fetch(`${API_URL}/${dog.id}`)
        .then((response)=>response.json())
}

// let piper = {
//     name: "Piper",
//     isGoodDog: true,
//     id: 11,
//     age: 8
// };
// //edits existing dog but if you refresh piper will go back
// editDog(piper).then((data)=>console.log(data))




//delete dog by id
//No need for body
function deleteDog(id) {
    let options = {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
        },

    }
    fetch(`${API_URL}/${id}`, options)
//         .then((response)=>console.log("Deleted dog with id: " + id, response))
}


//create dog

function createDog(dog) {
    let options ={
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(dog) //convert the JS object into a json string before sending to main server
    }
    return fetch(API_URL, options)
        .then((response)=>response.json())
}

let fatboy = {
    name: "Piper",
    isGoodDog: false,
    age: 3
};

createDog(fatboy).then((newDog)=>console.log(newDog));