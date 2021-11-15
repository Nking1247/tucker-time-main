var date = new Date();
var hour = d.getHours();



function yesLive() {
    document.getElementById("isLive").style.display = "block";
    document.getElementById("isNotLive").style.display = "none";
}

function noLive() {
    document.getElementById("isNotLive").style.display = "block";
    document.getElementById("isLive").style.display = "none";
}



function buttonDisplay(){
    if ( 1 == 1 ){
        document.getElementById("yesButton").style.display = "block";
        document.getElementById("isLive").style.display = "block";
    document.getElementById("isNotLive").style.display = "none";
    }else{
        document.getElementById("noButton").style.display = "block";
        document.getElementById("isNotLive").style.display = "block";
    document.getElementById("isLive").style.display = "none";
    }
}