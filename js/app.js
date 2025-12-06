// async function loginpage(){
//    let res = await fetch();
//    let data = await res.text();
//        document.getElementById("root").innerHTML=data;
 
// }

// fetch("components/login/login.html").then(res=>res.text()).then(data=>{
//     document.getElementById("root").innerHTML=data;
// })  

// navigator.geolocation.getCurrentPosition(getPosition)

// function getPosition(position){
// console.log(position)
// }
 fetch("components/home/home.html").then(res=>res.text()).then(data=>{
    document.getElementById("root").innerHTML=data;
}) 

fetch("json/newArrivals.json")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    });
