function getWindowSize(){
    let ele = window.document.getElementById("windowSize");

    let width = window.innerWidth;
    let height = window.innerHeight;

    ele.innerHTML = `Window width: ${width} and height: ${height}`;
    //let URL = window.location;
    //ele.innerHTML = URL;
}

function backward(){
    window.history.back();
}

function forward(){
    window.history.forward();
}
