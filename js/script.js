var dt = new Date();
document.getElementById("datetime").innerHTML = (("0" + dt.getDate()).slice(-2)) + "." + (("0" + (dt.getMonth() + 1)).slice(-2)) + "." + (dt.getFullYear()) + " " + (("0" + dt.getHours()).slice(-2)) + ":" + (("0" + dt.getMinutes()).slice(-2));
``

function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
}


function like() {
    document.getElementById("up").style.width = "200px";
    document.getElementById("up").style.height = "100px";
    document.getElementById("up").style.backgroundColor = "green";

    document.getElementById("down").style.width = "115px";
    document.getElementById("down").style.height = "50px";
    document.getElementById("down").style.backgroundColor = "black";
}

function dislike() {
    document.getElementById("down").style.width = "200px";
    document.getElementById("down").style.height = "100px";
    document.getElementById("down").style.backgroundColor = "red";

    document.getElementById("up").style.width = "115px";
    document.getElementById("up").style.height = "50px";
    document.getElementById("up").style.backgroundColor = "black";
}

var teller = 0;
function next() {

    

    switch (teller) {
        case 0:
            document.getElementById("anime").src = "image/IMG_20181124_142937_902.jpg";

            break;
        case 1:

            document.getElementById("anime").src = "image/Codes.jpg";
            break;
        case 2:
            teller = -1;
            document.getElementById("anime").src = "image/IMG-20181004-WA0007.jpg";
            break;
        default:
            break;
    }

    teller++;
}