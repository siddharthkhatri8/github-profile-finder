const searchBar = document.querySelector("[search-bar]");
const profile = document.querySelector("portfolio-container");
const url = "https://api.github.com/users/";
const avatar = document.querySelector("#avatar");
const input = document.querySelector("[user-input]");
const userName = document.querySelector("#name");
const user = document.querySelector("[user]");
const date = document.querySelector("#date");
const bioData = document.querySelector("#bio");
const btnSubmit = document.querySelector("#submit")
const reposData = document.querySelector("#repos");
const followersData = document.querySelector("#followers");
const followingData = document.querySelector("#following");
const locationData = document.querySelector("#location");
const pageData = document.querySelector("#page");
const twitterData = document.querySelector("#twitter");
const companyData = document.querySelector("#company");
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const noResult = document.querySelector("#noresult");

//event listner
btnSubmit.addEventListener("click", function(){
    if(input.value !== ""){
        getUserData(url + input.value);
    }
})

input.addEventListener("keydown", function(e){
    if(e.key == "Enter"){
        if(input.value !== ""){
            getUserData(url + input.value);
        }
    }

});

async function getUserData(url){
    try{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    updateProfile(data);
    // error(data);
    }
    catch{
        console.log("Error");
    }
}

// function error(data) {
//     if(data.message == 'Not Found'){
//         noResult.style.display = "block";
//     }s
//     else{
//         noResult.style.display = "none";
//     }

// }





function updateProfile(data){
    if(data.message !== "Not Found"){
        noResult.style.display = "none";
        avatar.src =`${data.avatar_url}`;
        userName.innerText = data.name === null ? data.login : data.name;
        user.innerText = `@${data.login}`;
        user.href = `${data.html_url}`;
        datesegments = data.created_at.split("T").shift().split("-");
        date.innerText = `Joined ${datesegments[2]} ${months[datesegments[1] - 1]} ${datesegments[0]}`;
        bioData.innerText = data.bio === null ? "Bio not available" : `${data.bio}`;
        reposData.innerText = `${data.public_repos}`;
        followersData.innerText = `${data.followers}`;
        followingData.innerText = `${data.following}`;
        locationData.innerText = `${data.location}`;
        pageData.innerText = data.blog === "" ? "Not Available" : `${data.blog}`;
        pageData.href = data.blog === "" ? "#" : `${data.blog}`;
        twitterData.innerText = data.twitter_username === null ? "Not Available" :  `https://twitter.com/${data.twitter_username}`;
        companyData.innerText = data.company === null ? "Not Available" : `${data.company}`;
     }

     else{
        noResult.style.display = "block";
     }
    

   

}



getUserData(url + "siddharthkhatri8");