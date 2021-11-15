var date = new Date();
var hour = date.getHours();



function yesLive() {
    document.getElementById("isLive").style.display = "block";
    document.getElementById("isNotLive").style.display = "none";
}

function noLive() {
    document.getElementById("isNotLive").style.display = "block";
    document.getElementById("isLive").style.display = "none";
}



function buttonDisplay(){
    if ( hour > 14 && hour < 16){
        document.getElementById("yesButton").style.display = "block";
        document.getElementById("isLive").style.display = "block";
    document.getElementById("isNotLive").style.display = "none";
    }else{
        document.getElementById("noButton").style.display = "block";
        document.getElementById("isNotLive").style.display = "block";
    document.getElementById("isLive").style.display = "none";
    }
}