let name = document.getElementById("name")
let description = document.getElementById("description")
let price = document.getElementById("price")
let delete_id = document.getElementById("delete_id")
let products = document.getElementById("products")
let upload = document.getElementById("upload")
let del = document.getElementById("remove")
let count = 0;
upload.addEventListener("click",()=>{
    if(name.value == "")
    {
        alert("Enter name : ")
    }else{
        let image = document.getElementById("image").files[0]
        let div = document.createElement("div");
        div.setAttribute("id",count);
        let img = document.createElement("img");
        button = document.createElement("button");
        button.innerHTML = "X"
        button.setAttribute("id",count);
        button.addEventListener("click",(e)=>{
            document.getElementById(e.target.id).remove();
        })
        count++;
        const reader = new FileReader();
        reader.addEventListener("load",()=>{
            img.src = reader.result;
        },false)
        if(image){
            reader.readAsDataURL(image);
        }
        img.style.height = "100px";
        let p = document.createElement("p");
        p.innerHTML = name.value+"<br>"+description.value+"<br>"+price.value+"<br>";
        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(button);
        products.appendChild(div);
    }
})
del.addEventListener("click",()=>{
    products.removeChild(products.children[delete_id.value]);
})