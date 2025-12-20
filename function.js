// call history start
const callData =[];

function callHistoryFunction(){
    const callHistory = document.getElementById('call-history-main');
    callHistory.innerHTML ='';
    for (const data of callData){
        const div = document.createElement('div');
        div.innerHTML = `
                <div class="flex justify-between items-center mt-1">
                    <div class="px-4">
                        <h2>${data.service}</h2>
                        <p>${data.hotlineNum}</p>
                    </div>
                    <div>
                        <p>${data.time}</p>
                    </div>
                </div>
        `
        callHistory.appendChild(div);
    }
}
// call history clear button start
document.getElementById('call-history-clear-btn')
    .addEventListener('click', function(){
        const callHistory = document.getElementById('call-history-main');
        callHistory.innerHTML = '';
    })
// call history clear button end
// call history end

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

        callData.push(serviceInformation);
        callHistoryFunction();
    })


        // Police button start
document.getElementById('police-btn')
    .addEventListener('click', function(){
        const availableCoin = getNumberInnerText('available-coin')
        const police = getInnerText('police');
        const policeNumber = getInnerText('police-number');
        if(availableCoin > 19){
            alert('you are calling in '+police+ ' at '+policeNumber);
            const currentCoin = availableCoin-20;
            document.getElementById('available-coin').innerText = currentCoin;
        }else{
            alert("You don't have suffecient Coin to call in "+police+ ' at '+policeNumber);
            return;
        }

        const serviceInformation ={
            service: 'police',
            hotlineNum: 999,
            time: new Date().toLocaleTimeString()
        }

        callData.push(serviceInformation);
        callHistoryFunction();
    })

        // fire service btn start
    document.getElementById('fire-service-btn')
        .addEventListener('click', function(){
            const availableCoin = getNumberInnerText('available-coin');
            const fireService = getInnerText('fire-service');
            const serviceNumber = getInnerText('fire-service-num');
            
            if(19<availableCoin){
                alert('Your are calling in '+fireService+' at '+serviceNumber);
                const currentCoin = availableCoin-20;
                document.getElementById('available-coin').innerText = currentCoin;
            }else{
                alert("You don't have suffecient Coin to call in "+police+ ' at '+policeNumber);
                return;
            }

            const serviceInformation ={
                service:'Fire Service',
                hotlineNum: 999,
                time: new Date().toLocaleTimeString()
            }
            callData.push(serviceInformation);
            callHistoryFunction();
        })

        // Ambulance btn start
    document.getElementById('ambulance-btn')
        .addEventListener('click', function(){
            const availableCoin = getNumberInnerText('available-coin');
            const ambulance = getInnerText('ambulance');
            const serviceNumber = getInnerText('ambulance-num');
            
            if(19<availableCoin){
                alert('Your are calling in '+ambulance+' at '+serviceNumber);
                const currentCoin = availableCoin-20;
                document.getElementById('available-coin').innerText = currentCoin;
            }else{
                alert("You don't have suffecient Coin to call in "+ambulance+ ' at '+serviceNumber);
                return;
            }

            const serviceInformation ={
                service:'Ambulance',
                hotlineNum: 1994-999999,
                time: new Date().toLocaleTimeString()
            }
            callData.push(serviceInformation);
            callHistoryFunction();
        })

        // Women & Child Helpline button start
    document.getElementById('women-btn')
        .addEventListener('click', function(){
            const availableCoin = getNumberInnerText('available-coin');
            const serviceName = getInnerText('women');
            const serviceNumber = getInnerText('women-num');
            
            if(19<availableCoin){
                alert('Your are calling in '+serviceName+' at '+serviceNumber);
                const currentCoin = availableCoin-20;
                document.getElementById('available-coin').innerText = currentCoin;
            }else{
                alert("You don't have suffecient Coin to call in "+serviceName+ ' at '+serviceNumber);
                return;
            }

            const serviceInformation ={
                service:'Women & Child Helpline',
                hotlineNum: 109,
                time: new Date().toLocaleTimeString()
            }
            callData.push(serviceInformation);
            callHistoryFunction();
        })

        // Anti-Corruption button start
    document.getElementById('anti-corruption-btn')
        .addEventListener('click', function(){
            const availableCoin = getNumberInnerText('available-coin');
            const serviceName = getInnerText('anti-corruption');
            const serviceNumber = getInnerText('anti-corruption-number');
            
            if(19<availableCoin){
                alert('Your are calling in '+serviceName+' at '+serviceNumber);
                const currentCoin = availableCoin-20;
                document.getElementById('available-coin').innerText = currentCoin;
            }else{
                alert("You don't have suffecient Coin to call in "+serviceName+ ' at '+serviceNumber);
                return;
            }

            const serviceInformation ={
                service:'Anti-Corruption',
                hotlineNum: 106,
                time: new Date().toLocaleTimeString()
            }
            callData.push(serviceInformation);
            callHistoryFunction();
        })

        // Electricity btn start
    document.getElementById('electricity-btn')
        .addEventListener('click', function(){
            const availableCoin = getNumberInnerText('available-coin');
            const serviceName = getInnerText('electricity');
            const serviceNumber = getInnerText('electricity-number');
            
            if(19<availableCoin){
                alert('Your are calling in '+serviceName+' at '+serviceNumber);
                const currentCoin = availableCoin-20;
                document.getElementById('available-coin').innerText = currentCoin;
            }else{
                alert("You don't have suffecient Coin to call in "+serviceName+ ' at '+serviceNumber);
                return;
            }

            const serviceInformation ={
                service:'Electricity Outage',
                hotlineNum: 16216,
                time: new Date().toLocaleTimeString()
            }
            callData.push(serviceInformation);
            callHistoryFunction();
        })

        // Brac btn 
    document.getElementById('brac-btn')
        .addEventListener('click', function(){
            const availableCoin = getNumberInnerText('available-coin');
            const serviceName = getInnerText('brac');
            const serviceNumber = getInnerText('brac-number');
            
            if(19<availableCoin){
                alert('Your are calling in '+serviceName+' at '+serviceNumber);
                const currentCoin = availableCoin-20;
                document.getElementById('available-coin').innerText = currentCoin;
            }else{
                alert("You don't have suffecient Coin to call in "+serviceName+ ' at '+serviceNumber);
                return;
            }

            const serviceInformation ={
                service:'Brac',
                hotlineNum: 16445,
                time: new Date().toLocaleTimeString()
            }
            callData.push(serviceInformation);
            callHistoryFunction();
        })

        // Bangladesh Railway btn
    document.getElementById('railway-btn')
        .addEventListener('click', function(){
            const availableCoin = getNumberInnerText('available-coin');
            const serviceName = getInnerText('railway');
            const serviceNumber = getInnerText('railway-number');
            
            if(19<availableCoin){
                alert('Your are calling in '+serviceName+' at '+serviceNumber);
                const currentCoin = availableCoin-20;
                document.getElementById('available-coin').innerText = currentCoin;
            }else{
                alert("You don't have suffecient Coin to call in "+serviceName+ ' at '+serviceNumber);
                return;
            }

            const serviceInformation ={
                service:'Bangladesh Railway',
                hotlineNum: 163,
                time: new Date().toLocaleTimeString()
            }
            callData.push(serviceInformation);
            callHistoryFunction();
        })
// call functionality end

// copy button functionality start
    const copyCounters = document.querySelectorAll('.copy-counter');
    let availableCopy = parseInt(document.getElementById('available-copy').innerText);

    for (const counter of copyCounters) {
        counter.addEventListener('click', function () {
            const cardBox = this.closest('.card-box');
            const serviceNumber = cardBox.querySelector('.service-name').innerText;
            const hotlineNumber = cardBox.querySelector('.hotline-number').innerText;

            navigator.clipboard.writeText(hotlineNumber)
                .then(() => {
                    alert('you are copied the hotline number of ' + serviceNumber);

                    availableCopy++;
                    document.getElementById('available-copy').innerText = availableCopy;
                })
                .catch(err => {
                    console.error('Failed to  the copied the number of ', serviceNumber);
                });
        });
    }

// copy button functionality end