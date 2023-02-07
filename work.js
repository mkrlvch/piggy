const pig = document.getElementById('pig')
const cake = document.getElementById('cake')

document.addEventListener('keydown', function(event) {
    jump();
});

function jump () {
    if(pig.classList !='jump'){
        pig.classList.add('jump')
    }

    setTimeout ( function() {
        pig.classList.remove('jump')
    }, 300)
}

let isAlive = setInterval ( function () {
    let pigTop = parseInt (window.getComputedStyle(pig).getPropertyValue('top'));
    let cakeLeft = parseInt (window.getComputedStyle(cake).getPropertyValue('left'));

    if (cakeLeft < 50 && cakeLeft > 0 && pigTop >= 140) {
        alert('Losing!')
    }
} , 50)


