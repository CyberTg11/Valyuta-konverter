const rub = document.getElementById('rub')
const usd = document.getElementById('usd')
const eur = document.getElementById('eur')
const gbp = document.getElementById('gbp')
const rubl = document.getElementById('rubl')
const dollar = document.getElementById('dollar')
const euro = document.getElementById('euro')
const pound = document.getElementById('pound')
const input1 = document.getElementById('first-input')
const input2 = document.getElementById('second-input')
const p1 = document.querySelectorAll('.p1')
const p2 = document.querySelectorAll('.p2')
const span1 = document.getElementById('span1')
const span2 = document.getElementById('span2')
rub.addEventListener('click', function(){
    rub.style.backgroundColor = '#833AE0'
    rub.style.color = 'white'
    usd.style.backgroundColor = 'white'
    usd.style.color = '#c6c6c6'
    eur.style.backgroundColor = 'white'
    eur.style.color = '#c6c6c6'
    gbp.style.backgroundColor = 'white'
    gbp.style.color = '#c6c6c6'
})
usd.addEventListener('click', function(){
    usd.style.backgroundColor = '#833AE0'
    usd.style.color = 'white'
    rub.style.backgroundColor = 'white'
    rub.style.color = '#c6c6c6'
    eur.style.backgroundColor = 'white'
    eur.style.color = '#c6c6c6'
    gbp.style.backgroundColor = 'white'
    gbp.style.color = '#c6c6c6'
})
eur.addEventListener('click', function(){
    eur.style.backgroundColor = '#833AE0'
    eur.style.color = 'white'
    gbp.style.backgroundColor = 'white'
    gbp.style.color = '#c6c6c6'
    usd.style.backgroundColor = 'white'
    usd.style.color = '#c6c6c6'
    rub.style.backgroundColor = 'white'
    rub.style.color = '#c6c6c6'
})
gbp.addEventListener('click', function(){
    gbp.style.backgroundColor = '#833AE0'
    gbp.style.color = 'white'
    usd.style.backgroundColor = 'white'
    usd.style.color = '#c6c6c6'
    rub.style.backgroundColor = 'white'
    rub.style.color = '#c6c6c6'
    eur.style.backgroundColor = 'white'
    eur.style.color = '#c6c6c6'
})
rubl.addEventListener('click', function(){
    rubl.style.backgroundColor = '#833AE0'
    rubl.style.color = 'white'
    dollar.style.backgroundColor = 'white'
    dollar.style.color = '#c6c6c6'
    euro.style.backgroundColor = 'white'
    euro.style.color = '#c6c6c6'
    pound.style.backgroundColor = 'white'
    pound.style.color = '#c6c6c6'
})
dollar.addEventListener('click', function(){
    dollar.style.backgroundColor = '#833AE0'
    dollar.style.color = 'white'
    rubl.style.backgroundColor = 'white'
    rubl.style.color = '#c6c6c6'
    euro.style.backgroundColor = 'white'
    euro.style.color = '#c6c6c6'
    pound.style.backgroundColor = 'white'
    pound.style.color = '#c6c6c6'
})
euro.addEventListener('click', function(){
    euro.style.backgroundColor = '#833AE0'
    euro.style.color = 'white'
    pound.style.backgroundColor = 'white'
    pound.style.color = '#c6c6c6'
    dollar.style.backgroundColor = 'white'
    dollar.style.color = '#c6c6c6'
    rubl.style.backgroundColor = 'white'
    rubl.style.color = '#c6c6c6'
})
pound.addEventListener('click', function(){
    pound.style.backgroundColor = '#833AE0'
    pound.style.color = 'white'
    dollar.style.backgroundColor = 'white'
    dollar.style.color = '#c6c6c6'
    rubl.style.backgroundColor = 'white'
    rubl.style.color = '#c6c6c6'
    euro.style.backgroundColor = 'white'
    euro.style.color = '#c6c6c6'
})

function validateInput(input1) {
    input1.value = input1.value.replace(/[^0-9.]/g, '');
  }
  function validateInput(input2) {
    input2.value = input2.value.replace(/[^0-9.]/g, '');
  }

const url = 'https://api.currencybeacon.com/v1/convert'
const apiKey = 'rpCyE5MY1uV4SVE4FLDAwjlLbelYLexY'


//default convert
let fromCurrency = 'RUB'
let toCurrency = 'USD'

function SetCurrency1(){

        const amount1 = input1.value; 
        const apiUrl1 = `${url}?api_key=${apiKey}&from=${fromCurrency}&to=${toCurrency}&amount=${amount1}`;  
            fetch(apiUrl1)
            .then(res => res.json())
            .then(data => {
            input2.value = data.value.toFixed(4)
            if(input1.value === ''){
                input2.value =''
            }
            console.log(data)
        })
    
}
function SetCurrency2(){

    const amount2 = input2.value
    const apiUrl2 = `${url}?api_key=${apiKey}&from=${toCurrency}&to=${fromCurrency}&amount=${amount2}`
        fetch(apiUrl2)
        .then(res => res.json())
        .then(data => {
        input1.value = data.value.toFixed(4)
        if(input2.value === ''){
            input1.value =''
        }
        console.log(data)
    })
}

 window.onload = SetCurrency1
 window.onload = SetCurrency2

input1.addEventListener('input', function(){
    const amount1 = input1.value; 
    const apiUrl1 = `${url}?api_key=${apiKey}&from=${fromCurrency}&to=${toCurrency}&amount=${amount1}`;  
        fetch(apiUrl1)
        .then(res => res.json())
        .then(data => {
        input2.value = data.value.toFixed(4)
        if(input1.value === ''){
            input2.value =''
        }
        console.log(data)
    })
    })

input2.addEventListener('input', function(){
    const amount2 = input2.value
    const apiUrl2 = `${url}?api_key=${apiKey}&from=${toCurrency}&to=${fromCurrency}&amount=${amount2}`
        fetch(apiUrl2)
        .then(res => res.json())
        .then(data => {
        input1.value = data.value.toFixed(4)
        if(input2.value === ''){
            input1.value =''
        }
        console.log(data)
    })
    })

   

    p1.forEach(p => {
        p.addEventListener('click', () => {
             fromCurrency = p.textContent;
            const amount3 = input2.value;
            const apiUrl3 = `${url}?api_key=${apiKey}&from=${toCurrency}&to=${fromCurrency}&amount=${amount3}`;
            fetch(apiUrl3)
                .then(res => res.json())
                .then(data => {
                    input1.value = data.value.toFixed(4);
                    if (input2.value === '') {
                        input1.value = '';
                    }
                    console.log(data);
                });
        });
    });
    p2.forEach(p => {
        p.addEventListener('click', () => {
             toCurrency = p.textContent;
            const amount4 = input1.value;
            const apiUrl4 = `${url}?api_key=${apiKey}&from=${fromCurrency}&to=${toCurrency}&amount=${amount4}`;
            fetch(apiUrl4)
                .then(res => res.json())
                .then(data => {
                    input2.value = data.value.toFixed(4);
                    if (input1.value === '') {
                        input2.value = '';
                    }
                    console.log(data);
                });
        });
    });
    
const apiUrl5 = `${url}?api_key=${apiKey}&from=RUB&to=USD&amount=${1}`;  
        fetch(apiUrl5)
        .then(res => res.json())
        .then(data => {
        console.log(data)
        span1.textContent = `1 RUB = ${data.value} USD`
        span2.style.marginLeft = '365px'
})

    const apiUrl6 = `${url}?api_key=${apiKey}&from=USD&to=RUB&amount=${1}`;  
    fetch(apiUrl6)
    .then(res => res.json())
    .then(data => {
    console.log(data)
    span2.textContent = `1 USD = ${data.value} RUB`
    span2.style.marginLeft = '365px'
})


p1.forEach(p => {
    p.addEventListener('click', () => {
         fromCurrency = p.textContent;
        const apiUrl7 = `${url}?api_key=${apiKey}&from=${fromCurrency}&to=${toCurrency}&amount=${1}`;
        fetch(apiUrl7)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                span1.textContent = `1 ${fromCurrency} = ${data.value} ${toCurrency}`
            });
        const apiUrl8 = `${url}?api_key=${apiKey}&from=${toCurrency}&to=${fromCurrency}&amount=${1}`;

            fetch(apiUrl8)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                span2.textContent = `1 ${toCurrency} = ${data.value} ${fromCurrency}`
                if(span1.textContent !== span2.textContent){
                    span2.style.marginLeft = '365px'
                }
                else{
                    span2.style.marginLeft = '440px'
                }
            });
    });
});

p2.forEach(p => {
    p.addEventListener('click', () => {
         toCurrency = p.textContent;
        const apiUrl9 = `${url}?api_key=${apiKey}&from=${toCurrency}&to=${fromCurrency}&amount=${1}`;
        fetch(apiUrl9)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                span2.textContent = `1 ${toCurrency} = ${data.value} ${fromCurrency}`
            });
            const apiUrl10 = `${url}?api_key=${apiKey}&from=${fromCurrency}&to=${toCurrency}&amount=${1}`;

            fetch(apiUrl10)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                span1.textContent = `1 ${fromCurrency} = ${data.value} ${toCurrency}`
                if(span2.textContent !== span1.textContent){
                    span2.style.marginLeft = '365px'
                }
                else{
                    span2.style.marginLeft = '440px'
                }
            });

    });
});