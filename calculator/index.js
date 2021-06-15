const pushNumber = document.getElementById("numberResult")
let placeholder = ""
function doMath () {
    console.log(pushNumber.value)
}

function addOne() {
    placeholder.concat("1");
    pushNumber.value = placeholder;
}