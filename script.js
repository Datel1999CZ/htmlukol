let first = document.getElementById('first');

first.addEventListener('click', function(){
    alert("vyskočil mi alert");
})

const second = document.getElementById('java');
const text = document.getElementById('text');

second.addEventListener('click', function(){
    if (text.innerHTML === "Text") {
        text.innerHTML = "Změnilo se";
    }

})

const third = document.getElementById('script')

third.addEventListener('click', function(){
    third.innerText = "Klikl jsi";
})

const fourth = document.getElementById('fourth');
const text2 = document.getElementById('text2');

fourth.addEventListener('click', function(){
    if(text2.innerHTML ===""){
        text2.innerHTML = "Text";
    }
})

const fifth = document.getElementById('fifth');
const textovepole = document.getElementById('textovepole1').innerText
const label = document.getElementById('label').innerText

fifth.addEventListener('click', function(){
    
    alert("ahoj" + textovepole + label);
})

