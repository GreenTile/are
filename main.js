window.onkeyup = function(){
    localStorage.note = document.getElementById("ta").value;
}
window.onload = function(){
    document.getElementById('ta').value = localStorage.note;
}