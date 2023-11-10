document.getElementById("news_button").addEventListener("click", function() { 
    let newsButton = document.getElementById("news_button");
    let eventButton = document.getElementById("event_button");
    let randomButton = document.getElementById("random_button");

    let newsSection = document.getElementById("news_section");
    newsSection.classList.remove("hide_posts"); 
    let eventsSection = document.getElementById("events_section");
    eventsSection.classList.add("hide_posts"); 
    let randomSection = document.getElementById("random_section");
    randomSection.classList.add("hide_posts"); 
});

document.getElementById("events_button").addEventListener("click", function() {
    let newsButton = document.getElementById("news_button");
    let eventButton = document.getElementById("event_button");
    let randomButton = document.getElementById("random_button");

    let newsSection = document.getElementById("news_section");
    newsSection.classList.add("hide_posts"); 
    let eventsSection = document.getElementById("events_section");
    eventsSection.classList.remove("hide_posts"); 
    let randomSection = document.getElementById("random_section");
    randomSection.classList.add("hide_posts");
});

document.getElementById("random_button").addEventListener("click", function() {
    let newsButton = document.getElementById("news_button");
    let eventButton = document.getElementById("event_button");
    let randomButton = document.getElementById("random_button");

    let newsSection = document.getElementById("news_section");
    newsSection.classList.add("hide_posts"); 
    let eventsSection = document.getElementById("events_section");
    eventsSection.classList.add("hide_posts"); 
    let randomSection = document.getElementById("random_section");
    randomSection.classList.remove("hide_posts");
});



