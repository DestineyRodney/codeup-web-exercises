"use strict";

     fetch("https://api.github.com/users/DestineyRodney/events", {headers: {'Authorization': promiseGitAPI}})
        .then((response) => response.json())
        .then((events)=>{
            console.log(events[0].created_at);
     })



function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));

}
wait(3000).then(() => console.log('runs after 3 seconds'));

