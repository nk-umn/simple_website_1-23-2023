function changeSize() {
    let element = document.getElementById('img-container');
    if (element.className === 'fullsize-img') {
        element.className ="half-img";
    } else {
        element.className ="fullsize-img";
    }
}

function addGuest() {
    let guest_name = document.getElementById('fname');
    if (guest_name.value) {
        console.log("name: ", guest_name);
        document.getElementById("add_guest").innerHTML +=
        `<div>${guest_name.value}</div><br>`;
        guest_name.value = "";
    } else {
        alert("Please enter a valid guest name!");
    }
}