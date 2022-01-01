// 환율 정보 들고오기
// 드랍 다운 리스트에서 아이템 선택하면 아이템이 바뀜
// 금액을 입력하면 환전이 된다
// 드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전이 됨
// 숫자를 한국어로 읽는 법
// 반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율이 적용이 된다

let currencyRatio = {
  USD: {
    KRW: 1189.23,
    USD: 1,
    VND: 22770.02,
    JP: 115.09,
    unit: "달러"
  },
  KRW: {
    KRW: 1,
    USD: 0.00084,
    VND: 19.13,
    JP: 0.097,
    unit: "원"

  },
  VND: {
    KRW: 0.052,
    USD: 0.000044,
    VND: 1,
    JP: 0.0051,
    unit: "동"
  },
  JP: {
    KRW: 10.33,
    USD: 0.0087,
    VND: 197.82,
    JP: 1,
    unit: "엔"
  }
};


let fromCurrency = 'USD';
let toCurrency = 'USD';

const fromBtn = document.getElementById('from-btn');
const toBtn = document.getElementById('to-btn');
const dropBoxTop = document.getElementById('from-currency-list');
const dropBoxBottom = document.getElementById('to-currency-list');
  
document.querySelectorAll('#from-currency-list a').forEach(menu => menu.addEventListener("click", function () {
  fromBtn.textContent = this.textContent;
  fromCurrency = this.textContent;
  dropBoxTop.classList.toggle('from-on');
  convert('from');
  })
);

document.querySelectorAll('#to-currency-list a').forEach(menu => menu.addEventListener("click", function () { 
  toBtn.textContent = this.textContent;
  toCurrency = this.textContent;
  dropBoxBottom.classList.toggle('to-on');
  convert('from');
}));

fromBtn.addEventListener('click', function(){
  dropBoxTop.classList.toggle('from-on');
});

toBtn.addEventListener('click', function () {
  dropBoxBottom.classList.toggle('to-on');
});

function convert(type) { 
  let amount = 0;
  let convertedAmount;
  if ('from' == type) {
    amount = document.getElementById('from-input').value;
    convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    document.getElementById('to-input').value = convertedAmount;
    readChangekorean(type);
  } else { 
    amount = document.getElementById('to-input').value;
    convertedAmount = amount * currencyRatio[toCurrency][fromCurrency];
    document.getElementById('from-input').value = convertedAmount;
    readChangekorean(type);
  }
}


function readChangekorean(type) { 
  if ('from' == type) { 
    document.getElementById('fromNumToKorea').textContent = currencyRatio[fromCurrency]['unit'];
  }
  else { 
    document.getElementById('fromNumToKorea').textContent = currencyRatio[fromCurrency]['unit'];
  }
}