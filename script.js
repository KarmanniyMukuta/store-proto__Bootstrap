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



const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}