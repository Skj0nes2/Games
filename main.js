/* Templates
    Catagory Js
    -------------------------------------------------------------------
    function FUNCTION_NAME() {
        var VARIABLE_NAME = document.getElementById("ID_NAME");
        if (VARIABLE_NAME.style.display === "block") {
            VARIABLE_NAME.style.display = "none";
        } 
        
        else {
            VARIABLE_NAME.style.display = "block";
        }
    }  
*/ 

function showHtmlGames() {
  var htmlGames = document.getElementById("htmlGames");
  if (htmlGames.style.display === "block") {
    htmlGames.style.display = "none";
  } else {
    htmlGames.style.display = "block";
  }
}