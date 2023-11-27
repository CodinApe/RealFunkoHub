document.getElementById("news_button").addEventListener("click", function() { 
    // let newsButton = document.getElementById("news_button");
    // newsButton.classList.add("selected_filter_button");
    // let eventButton = document.getElementById("events_button");
    // eventButton.classList.remove("selected_filter_button");
    // let randomButton = document.getElementById("random_button");
    // randomButton.classList.remove("selected_filter_button");

    let newsSection = document.getElementById("news_section");
    newsSection.classList.remove("hide_posts"); 
    let eventsSection = document.getElementById("events_section");
    eventsSection.classList.add("hide_posts"); 
    let randomSection = document.getElementById("random_section");
    randomSection.classList.add("hide_posts"); 
});

document.getElementById("events_button").addEventListener("click", function() {
    // let newsButton = document.getElementById("news_button");
    // let eventButton = document.getElementById("events_button");
    // let randomButton = document.getElementById("random_button");
    
    // newsButton.classList.remove("selected_filter_button");
    // eventButton.classList.add("selected_filter_button");
    // randomButton.classList.remove("selected_filter_button");

    let newsSection = document.getElementById("news_section");
    newsSection.classList.add("hide_posts"); 
    let eventsSection = document.getElementById("events_section");
    eventsSection.classList.remove("hide_posts"); 
    let randomSection = document.getElementById("random_section");
    randomSection.classList.add("hide_posts");
});

document.getElementById("random_button").addEventListener("click", function() {
    // let newsButton = document.getElementById("news_button");
    // let eventButton = document.getElementById("events_button");
    // let randomButton = document.getElementById("random_button");

    // newsButton.classList.remove("selected_filter_button");
    // eventButton.classList.remove("selected_filter_button");
    // randomButton.classList.add("selected_filter_button");

    let newsSection = document.getElementById("news_section");
    newsSection.classList.add("hide_posts"); 
    let eventsSection = document.getElementById("events_section");
    eventsSection.classList.add("hide_posts"); 
    let randomSection = document.getElementById("random_section");
    randomSection.classList.remove("hide_posts");
});


// Navigation button
document.getElementById("menu_button").addEventListener("click", function(event) {
    let navContent = document.getElementById("nav_ul");
    let button = document.querySelector("#menu_button");

    button.classList.toggle("animate");
    navContent.classList.toggle("show");
}); 

window.addEventListener("click", function(event) {
    let navContent = document.getElementById("nav_ul");
    let button = document.querySelector("#menu_button");
    if (!event.target.matches("#menu_button")) {
        if (navContent.classList.contains("show")) {
            navContent.classList.remove("show"); 
        }
        if (button.classList.contains("animate")) {
            button.classList.remove("animate"); 
        }
    }
}); 


// Random number generator game
// function generateNum(event) {
//     let userInput = document.getElementById("guessInput");



//     if (userInput.value = )
// }

// Dark/Light mode toggle 


function toggleMode(event) {
    event.preventDefault();

    let body = document.querySelector("body");
    let colorToggle = document.getElementById("colorToggle");
    let icon = document.getElementById("toggleLabel");

    icon.classList.toggle("mode");

    if (icon.classList.contains("mode")){
        icon.innerHTML = "<span><i class=\"fa-regular fa-moon\"></i></span>"; 
    }
    if (!icon.classList.contains("mode")){
        icon.innerHTML = "<span><i class=\"fa-solid fa-sun\"></i></span>"; 
    }

    body.classList.toggle("darkMode");  

}



// Comment form validation

function validateForm(event){
    // prevent the form from submitting while we perform validation
    event.preventDefault();
    
    // the inputs
    let fullName = document.getElementById("full_name");
    let email = document.getElementById("email_input");
    let phone = document.getElementById("phone_number");
    let comment = document.getElementById("comment");
    let emailRadio = document.getElementById("email");
    let phoneRadio = document.getElementById("phone"); 
    let fieldset = document.querySelector("fieldset");
    
    let displayInfo = document.getElementById("contact_display");

    let userInfo = {
        "fullName": "",
        "phone": "",
        "email": "",
        "preference": "",
        "comment": "",
    }
    
    let fullNameRegex = /([A-Za-z]){1,30} ([A-Za-z]){1,30}/; 
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;


    let isValid = true; 
    if(!(fullNameRegex.test(fullName.value))){
        isValid = false;
        // add error class to input
        fullName.classList.add("error");
        // display error message for user about this input
        fullName.nextElementSibling.classList.remove("hide");
     }
     if (comment.value == "") {
        isValid = false;

        comment.classList.add("error");

        comment.nextElementSibling.classList.remove("hide"); 
     }
     if (emailRadio.checked) {
        if(!(emailRegex.test(email.value))) {
            isValid = false;
            email.classList.add("error");
            email.nextElementSibling.classList.remove("hide");
         }
        userInfo.email = email.value;
        userInfo.preference = "email"; 
     } else if (phoneRadio.checked) {
        if (!parseInt(phone.value) || (phone.value.length != 10)) {
            isValid = false;
            phone.classList.add("error");
            phone.nextElementSibling.classList.remove("hide");
        }
        userInfo.phone = phone.value; 
        userInfo.preference = "phone"; 
     }

     if(isValid) {
        userInfo.fullName = fullName.value;

        userInfo.comment = comment.value;
        
        displayInfo.classList.remove("hide"); 
        displayInfo.innerHTML += "Full name: " + userInfo.fullName + "<br>" + "Email: " + userInfo.email +"<br>" + "Phone: " + userInfo.phone + "<br>" + "Contact Preference: " + userInfo.preference + "<br>" + "Comment: " + userInfo.comment;
     }
}

document.getElementById("contact_form").addEventListener("submit", validateForm);
document.getElementById("colorToggle").addEventListener("click", toggleMode); 

