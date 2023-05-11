const t = document.getElementById("Total");
var total = parseInt(t);
total = 0;

const pizzas = document.getElementById("pizzas");

const small = document.getElementById("small");
const medium = document.getElementById("medium");
const large = document.getElementById("large");

const dropdown = document.getElementById("dropdown");

pizzas.addEventListener("change",(e)=>{
    if(e.target.value == "Small"){
        dropdown.value = 10;
        total +=parseInt(dropdown.value);
        t.value = total;
    }else if(e.target.value == "Medium"){
        dropdown.value = 15;
        total +=parseInt(dropdown.value);
        t.value = total;
    }else{
        dropdown.value = 20;
        total +=parseInt(dropdown.value);
        t.value = total;
    }
})

// function change(e){

// }
// small.addEventListener("",()=>{
//     dropdown.value = 10;
//     total +=parseInt(dropdown.value);
//     t.value = total;
// })

// medium.addEventListener("toggle",()=>{
//     dropdown.value = 10;
//     total +=parseInt(dropdown.value);
//     t.value = total;
// })

// large.addEventListener("toggle",()=>{
//     dropdown.value = 10;
//     total +=parseInt(dropdown.value);
//     t.value = total;
// })

const pan = document.getElementById("pb");
const button1 = document.getElementById("count");

button1.addEventListener("click",pb);
function pb(){

    pan.value = 20;
    total +=parseInt(pan.value);
    t.value = total;
    
}

const ex1 = document.getElementById("ex1");
const ex2 = document.getElementById("ex2");
const ex3 = document.getElementById("ex3");
const ex4 = document.getElementById("ex4");

const mushrooms = document.getElementById("mushrooms");
const olives = document.getElementById("olives");
const fingernail = document.getElementById("fingernail");
const spicybeef = document.getElementById("spicybeef");


ex1.addEventListener("click",()=>{
    mushrooms.value = 15;
    total += parseInt(mushrooms.value);
    t.value = total;
})

ex2.addEventListener("click",()=>{
    olives.value = 10;
    total += parseInt(olives.value);
    t.value = total;
})


ex3.addEventListener("click",()=>{
    fingernail.value = 10;
    total += parseInt(fingernail.value);
    t.value = total;

})


ex4.addEventListener("click",()=>{
    spicybeef.value = 20;
    total += parseInt(spicybeef.value);
    t.value = total;
})

const ex5 = document.getElementById("ex5");
const hd = document.getElementById("hd");

ex5.addEventListener("click",()=>{
    hd.value = 25;
    total += parseInt(hd.value);
    t.value = total;
})