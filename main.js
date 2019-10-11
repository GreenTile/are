window.onkeyup = function(){
    localStorage.note = document.getElementById("ta").value;
}
window.onload = function(){
    document.getElementById('ta').value = localStorage.note;
}

document.getElementById('ta').onkeyup = function () {
    document.getElementById('count').innerHTML = "Characters left: " + (2200 - this.value.length);
  };