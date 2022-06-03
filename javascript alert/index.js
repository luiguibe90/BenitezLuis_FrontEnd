window.addEventListener('DOMContentLoaded', function (e) {
    var content_container = document.getElementsByClassName('content-container')[0];

    for (let index = 0; index < 10; index++) {
        document.body.innerHTML = document.body.innerHTML + '<div class="content-container">' + content_container.innerHTML + '</div>';
    }

});

window.addEventListener('DOMContentLoaded', function (e) {
    var input = document.getElementById('input');
    input.addEventListener('change', function (e) {
        document.getElementById('input-log').innerHTML = e.target.value;
    })
});

function press() {
    let txt =document.getElementById("input");
    alert(txt.value);
} 
window.onload=function(){
    
    var btn =document.getElementById("miBoton");

    btn.onclick=press;
}
 





