function EnableDisableTextBox() {
    var chkUPD = document.getElementById("chkUPD");
    var upd = document.getElementById("upd");
    upd.disabled = chkUPD.checked ? false : true;
    if (!upd.disabled) {
        upd.focus();
    }
}

function modificaLink() {
    var link = "";
    if (document.getElementById('chkMaster').checked) {
        link = "https://www.hrzucchetti.it/infoupdate/" + document.getElementById('applicativo').value + "/" + document.getElementById('applicativo').value + "_" + document.getElementById('versione').value + "_000.pdf";
    } else if (document.getElementById('chkUPD').checked) {
        link = "https://www.hrzucchetti.it/infoupdate/" + document.getElementById('applicativo').value + "/" + document.getElementById('applicativo').value + "_" + document.getElementById('versione').value + "_" + document.getElementById('upd').value + ".pdf";
    }
    window.open(link, "_blank");
}

function modificaVideo() {
    var video = "";
    if (document.getElementById('applicativo').value == "HR1") {
        video = "https://www.zucchetti.it/areariservata/Documenti/Accademia/Videoguida_PagheI_v" + document.getElementById('versione').value + ".pdf";
    }
    window.open(video, "_blank");
}
