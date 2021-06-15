  
const pushNumber = document.getElementById("numberResult");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("egiht")
const nine = document.getElementById("nine")


let placeholder = ""
function doMath () {
    console.log(pushNumber.value)
}

function addNumber(e) {
    switch(e.key) {
        case 1:
            console.log("one");
            break
    }
}


addNumber ()

