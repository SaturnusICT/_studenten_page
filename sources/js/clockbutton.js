function clockButton () {
    var klokknop = document.getElementById('inClockButton');

    if (klokknop.innerText == "Uitklokken") {
        document.getElementById('disp_msg_clock').classList.remove('div_Away');
        document.getElementById('disp_msg_clock').classList.add('div_Show');
    } else if (klokknop.innerText == "Inklokken") {
        klokknop.innerText = "Uitklokken";
    }
}

function clockYes() {
        var klokknop = document.getElementById('inClockButton');
        klokknop.innerText = "Inklokken";
        document.getElementById('disp_msg_clock').classList.remove('div_Show');
        document.getElementById('disp_msg_clock').classList.add('div_Away');
}


function clockNo() {
        document.getElementById('disp_msg_clock').classList.remove('div_Show');
        document.getElementById('disp_msg_clock').classList.add('div_Away');
}