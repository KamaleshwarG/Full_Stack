const two = document.getElementById("two");
const clr = document.getElementById("clr");
const equal = document.getElementById("equalto");
const cube = document.getElementById("cube");
const square = document.getElementById("square");
const squareroot = document.getElementById("squareroot");
function enter(name){
    two.value+=name;
}
function clear_txt(){
    two.value = ""
}
equal.addEventListener("click",()=>{
    two.value = eval(two.value);
})
cube.addEventListener("click",()=>{
    two.value = parseInt(two.value)*parseInt(two.value)*parseInt(two.value);
})
square.addEventListener("click",()=>{
    two.value = parseInt(two.value)*parseInt(two.value);
})
squareroot.addEventListener("click",()=>{
    two.value = Math.sqrt(parseInt(two.value));
})