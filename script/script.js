function show() {
    document.getElementById("sidebar").style.width = "25%"
    document.getElementById("display").style.display = "inline"
    document.getElementById("show").style.display = "block" 
    document.getElementById("dark").style.display = "inline" 
    document.getElementById("dark").style.width = "75vw" 
    document.getElementById("dark").style.opacity = "100%"  
    document.getElementById("z-index").style.zIndex = "-1"  
}

function hide() {
    document.getElementById("sidebar").style.width = "0%"
    document.getElementById("display").style.display = "none"
    document.getElementById("show").style.display = "none"
    document.getElementById("dark").style.width = "0%"
    document.getElementById("dark").style.opacity = "0"  
    document.getElementById("z-index").style.zIndex = "-1" 
}


function changecolor(){
    alert("Call Now : +92 3183790054")
}
