var numberOfDrums = document.querySelectorAll(".drum");
for(var i = 0; i < numberOfDrums.length; i++) {
    numberOfDrums[i].addEventListener("click", clickFunction);
}

function clickFunction() {
    alert("I'm still working");
}