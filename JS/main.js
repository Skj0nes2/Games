function showHtmlGames(){
    var gamesHtml = document.getElementById("htmlGames");
    if (gamesHtml.style.display === "block") {
        gamesHtml.style.display = "none";
    }
    
    else {
        gamesHtml.style.display = "block";
    }
}
function showSettingsMenu(){
    var settingsMenu = document.getElementById("settingsMenu");
    if (settingsMenu.style.display === "block") {
        settingsMenu.style.display = "none";
    }

    else {
        settingsMenu.style.display = "block";
    }
}