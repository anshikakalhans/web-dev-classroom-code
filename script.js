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


// MAIN
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


// // let count=1;
// const id= setInterval(()=>{
//     if(count===10)clearInterval(id)
//     console.log(count)
//     count++;
// },1000);


// 2 Feb

// function print(){
//     console.log("hello students!!")
// }
// function greet(num){
//     console.log("welcome to my class");
//     num()
// }
// greet(print)


// function print(name){
//     console.log("hello students!", name)
// }
// function greet(num){
//     console.log("welcome to my class!")
//     setTimeout(()=>{
//         console.log("Inside SetTimeout")
//         let firstName="Alex"
//         num(firstName)
//     },2000);
// }
// greet(print)
// console.log("starting homework...");
// setTimeout(()=>{
//     console.log("homework done!");
//     console.log("starting dinner...");
//     setTimeout(()=>{
//         console.log("dinner done!");
//         console.log("getting ready to go out...");
//         setTimeout(()=>{
//             console.log("going to playground");
//         },1000); // after dinner
//     },1500); // dinner time
// },2000); // homework time


// function finishHomework(callback){
//     console.log("starting homework...");
//     setTimeout(()=>{
//         console.log("homework done!");
//         callback();

//     },2000);
// }

// function eatDinner(callback){
//     console.log("starting dinner...");
//     setTimeout(()=>{
//         console.log("dinner done!");
//         callback();
//     },1500);
// }

// function goToPlayground(){
//     console.log("going to the playground!");
// }

// finishHomework(()=>{
//     eatDinner(()=>{
//         goToPlayground();
//     });
// });


// const input=document.querySelector("#task")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")

// btn.addEventListener('click',(e)=>{
//     e.preventDefault()
//     if(input.value===""){
//         alert("enter task")
//         return
//     }
//     const li=document.createElement('li')
//     const deleteButton=document.createElement('button')

//     deleteButton.innerText="Delete"

//     li.innerText=input.value 
//     li.appendChild(deleteButton)
//     list.appendChild(li)

//     deleteButton.addEventListener('click',()=>{
//         list.removeChild(li)
//     })
//     input.value=""
// })


// const p = new Promise(function(resolve,reject){
//     // resolve
//     // reject
//     setTimeout(()=>{
//         let done= true;
//         if(done){
//             resolve({name: "alex", age: 30})
//         }else{
//             reject("network issue")
//         }
//     },5000)
// })

// p.then((data)=>{
//     console.log("Resolved",data)
// }).catch(()=>{
//     console.log("Rejected",err)
// }).finally(()=>{
//     console.log("finally block")
// })



// function doHomework(){
//     const p=  new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             let done=true;
//             if(done){
//                 console.log("homework is done")
//                 resolve("homework complete")
//             }else{
//                 reject("homework is not done")
//             }
//         },2000)
//     })
//     return p
// }

// function eatDinner(){
//     const p = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             let done=true;
//             if (done){
//                 console.log("dinner is done")
//                 resolve("dinner complete")
//             }else{
//                 reject("dinner is not done")
//             }
//         },2000)
//     })
//     return p
// }


// function goToPlayground(){
//     const p = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             let done=true;
//             if (done){
//                 console.log("went to the playground")
//                 resolve("playground time")
//             }else{
//                 reject("not allowed to go out")
//             }
//         },2000)
//     })
//     return p
// }

// doHomework().then((data)=>{
//     console.log(data)
//     return eatDinner()
// }).then((data)=>{
//     console.log(data)
//     return goToPlayground()
// }).then((data)=>{
//     console.log(data)

// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("go to sleep")
// })




// 9 Feb


// console.log("first line");
// setTimeout(()=>{
//     console.log("Inside Timeout");
// },0)


// const p = new Promise ((resolve,reject)=>{
//     resolve()
// }) 
// p.then(()=>{
//     console.log("Inside Promise");
// }).catch(()=>{
//     console.log("Inside Catch");
// })


// const p2 = new Promise ((resolve,reject)=>{
//     resolve()
// })
// p2.then(()=>{
//     console.log("Inside Promise");
// }).catch(()=>{
//     console.log("Inside Catch");
// })


// const p3 = new Promise ((resolve,reject)=>{
//     resolve()
// })
// p3.then(()=>{
//     console.log("Inside Promise");
// }).catch(()=>{
//     console.log("Inside Catch");
// })


// console.log("Last Line");





// 16 Feb

// function orderFood(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("Food Ordered")
//             resolve("Food Ordered")
//         },1000)
//     })
// }

// function prepareFood(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("Food Prepared")
//             resolve("Food Prepared")
//         },1000)
//     })

// }

// function deliverFood(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("Food Delivered")
//             resolve("Food Delivered")
//         },1000)
//     })

// }

// async function order(){
//     const data = await orderFood()
//     console.log(data)
//     await prepareFood()
//     await deliverFood()

// }

// order()

// orderFood().then((data)=>{
//     console.log(data)
//     return prepareFood()

// }).then((data)=>{
//     console.log(data)
//     return deliverFood()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })





// try-catch-finally

// console.log("first line");
// try{
//     // let sample = 324
//     // console.log(sample)
//     let age= 15
//     if(age<18){
//         //error
//         throw new Error("Access Denied")
//     }
// }catch(error){
//     console.log(error)
// }finally{
//     console.log("finally block")
// }
// console.log("last line");





// async function getData(){
//     try{
//         const response = await fetch("https://dummyjson.com/products")
//         console.log(response.ok)
//         if(response.ok===false)throw new Error("Data not found")
//         const data=await response.json()
//         console.log(data)
//         // data.products.forEach(ele)=>{
//         // console.log(ele.price)
//         //})
//     }catch(error){
//         console.log("Data not found")
//     }
// }

// getData()





































































