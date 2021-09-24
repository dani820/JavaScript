const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");


function onLoginSubmit(event) {
    // const userName = loginInput.value;
    // if(userName === "") {
    //     alert("Please write your name");
    // }else if(userName.length > 15) {
    //     alert("Your name is too long");
    // }

    // const userName = loginInput.value;
    // console.log(userName);

    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    // console.log(event);
    console.log(username);

}

// function handleLinkClick(event) {
//     event.preventDefault();
//     console.dir(event);
//     // alert("Clicked");
// }

loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick);