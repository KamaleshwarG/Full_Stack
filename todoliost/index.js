const add_inp = document.getElementById("add");
const remove_inp = document.getElementById("remove");
const datas = document.getElementById("datas");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
plus.addEventListener("click",push)
minus.addEventListener("click",pop)
function push(){
    var li = document.createElement("li");
    li.setAttribute("id",add_inp.value);
    li.appendChild(document.createTextNode(add_inp.value));
    datas.appendChild(li);
    add_inp.value = "";  
}
function pop(){
    var item = document.getElementById(remove.value);
    console.log(item.textContent)
    datas.removeChild(item);
    remove.value = "";
}