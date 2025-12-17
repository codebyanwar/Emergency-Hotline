// heart functionality start

const hearts = document.getElementsByClassName('heart');
let availableHeart = parseInt(document.getElementById('available-heart').innerText);

for(const heart of hearts){
    heart.addEventListener('click', function(){
        availableHeart++;
        document.getElementById('available-heart').innerText = availableHeart;
    })
}

// heart functionality end