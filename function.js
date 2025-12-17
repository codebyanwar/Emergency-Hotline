const transctionData =[];

// function for get inner text
function getInnerText(id){
    const innerTextValue = document.getElementById(id).innerText;
    return innerTextValue;
}

// function for get inner text with conversion of number
function getNumberInnerText(id){
    const innerTextId = parseInt(document.getElementById(id).innerText);
    return innerTextId;
}


// heart functionality start
const hearts = document.getElementsByClassName('heart');
let availableHeart = getNumberInnerText('available-heart');

for(const heart of hearts){
    heart.addEventListener('click', function(){
        availableHeart++;
        document.getElementById('available-heart').innerText = availableHeart;
    })
}
// heart functionality end


// call functionality start

    // Emergency Button start
document.getElementById('emergency-btn')
    .addEventListener('click', function(){
        const availableCoin = parseInt(document.getElementById('available-coin').innerText);

        const serviceTitle = getInnerText('national-Emaergency');
        const serviceNumber = getInnerText('service-number');

        if(19 < availableCoin){
            alert('you are calling in '+ serviceTitle+' at '+serviceNumber);
            const currentCoin = availableCoin-20;
            document.getElementById('available-coin').innerText = currentCoin;
        }else{
            alert("you don't have the suffecient Coin to call in " + serviceTitle+' at '+serviceNumber);
            return;
        }

        const serviceInformation ={
            service:'National Emergency',
            hotlineNum: 999,
            time: new Date().toLocaleTimeString()
        }

        transctionData.push(serviceInformation);
        console.log(transctionData);
    })

// call functionality end