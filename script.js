// const para=document.querySelector('p');
// para.textContent='This is a simple sample page.';

// const para=document.getElementById('para');
// para.textContent='this is pra1';
// console.log(para);

// const para=document.getElementsByClassName('para')
// para[0].textContent='this is para1'
// para[1].style.color='pink'
// para[1].textContent='this is para2'
// para[2].style.color='blue'
// console.log(para);

// const para=document.querySelector('.para')
// para.style.color='green'
// para.textContent='this is para1'
// console.log(para);

// const para=document.querySelectorAll('.para')
// para[0].innerText='this is para1'
// para[0].textContent='this is para1'
// para[1].style.color='blue'
// para[1].innerHTML


// const button=document.querySelector('#btn')
// function message(){
//   alert('you have clicked the button')
// }
// button.addEventListener('click', message)


// const button2=document.querySelector('#bt')
// button2.addEventListener('click', function(){
//   button.removeEventListener('click', message)
// })


// const btn=document.querySelector('#btn')
// btn.addEventListener('keyup', function(event){
//   console.log(event.key)
// })


// FIXED FUNCTION (main syntax error)
 

//  FIXED SELECTOR


// Event bubbling example
// const btn=document.querySelector("button")
// const div=document.querySelector(".container")

// btn.addEventListener("click", function(){
//   console.log('button')
// })

// div.addEventListener("click", function(){
//   console.log('.container')
// })


// Event capturing example
// btn.addEventListener("click", function(){
//   console.log('button')
// }, false)

// div.addEventListener("click", function(){
//   console.log('.container')
// }, false)





// debugger
// console.log(a)
// //console.log(b)

// var a=78      // stored in global scope 
// let b=345    //stored in script scope

// console.log(a)
// console.log(b)

// function print(){
//   let c=45
//   console.log(c)
//   console.log("Inside fn")
// }
// print()






// let total=100
// function calculate(){
//   console.log(total)
//   let total=100

// }
// calculate()





// console.log("first line");
// setTimeout(()=>{
//     console.log("after 2 sec")
// },2000);
// console.log("second line")




// setTimeout(()=>{
//     alert("alert after 3 sec!!")
// },3*1000);


// setInterval(()=>{
//     console.log("hello world!")
// },2000); 



// const timerId=setInterval(()=>{
//     console.log("hello world!!")
// },1000);

// //console.log(timerId)
// setTimeout(()=>{
//     clearInterval(timerId)
// },10*1000);



// setTimeout(()=> console.log(1), 2000);
// setTimeout(()=> console.log(2), 2000);
// setTimeout(()=> console.log(3), 2000);
// setTimeout(()=> console.log(4), 2000);
// setTimeout(()=> console.log(5), 2000);
// setTimeout(()=> console.log(6), 2000);
// setTimeout(()=> console.log(7), 2000);
// setTimeout(()=> console.log(8), 2000);
// setTimeout(()=> console.log(9), 2000);
// setTimeout(()=> console.log(10),2000);



// let count=1;

// const id= setInterval(()=>{
//     if(count===10)clearInterval(id)
//     console.log(count)
//     count++;
// },1000);













