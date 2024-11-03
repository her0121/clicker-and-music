var h1Id=document.getElementById('123321');
var buttonId=document.getElementById('button');
var counter=1;
buttonId.addEventListener('click',function(){
    counter++;
    h1Id.textContent='деньги:'+counter;
});

h1Id.addEventListener('click', function(){
    alert('Привет!!!!!! ты нашел сикретку я благодорю тебя за то что ты зашол на сайт!!!')
})

