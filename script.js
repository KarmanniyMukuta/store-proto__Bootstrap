const main = document.querySelector(".main")
const gr = "1fr 1fr 1fr 1fr"
function line(){
    main.style.gridTemplateColumns = "1fr";
}

function grid(){
    main.style.gridTemplateColumns = gr;
}


const al = () => {
    let alr = confirm("hi");
    alert(alr);
}



