document.addEventListener('DOMContentLoaded',action);
const btn=document.querySelector('.btn');

function action(){
const num=document.querySelector('.num');
const quote=document.querySelector('.quote');
const url = "https://api.adviceslip.com/advice";
fetch(url).then(res => res.json()).then(data => {
  num.innerHTML=`${data.slip.id}`;
  quote.innerHTML=`"${data.slip.advice}"`;
})
};

btn.addEventListener('click',action);
