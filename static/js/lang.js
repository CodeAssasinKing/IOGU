document.getElementById("langToggle").addEventListener("click", function(event) {
    event.preventDefault(); 

    let img = document.getElementById("langImage");
    let text = document.getElementById("langText");

    if (text.innerText === "TM") {
        img.src = "/images/right_logo.png";
        text.innerText = "RU";           
    } else {
        img.src = "/images/logo.png";   
        text.innerText = "TM";         
    }
});