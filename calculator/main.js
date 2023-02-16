let onScreen = document.getElementById("screen");

function dispaly(num) {
    onScreen.value = onScreen.value + num;
}

function allClear() {
    onScreen.value ="";
}

function del(){
    onScreen.value = onScreen.value.slice(0,-1);
}

function equalTo() {
    try {
        onScreen.value = eval(onScreen.value);
    }
    catch (err) {
        alert("invalid");
    }
}

