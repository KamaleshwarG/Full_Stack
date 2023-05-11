// buton.addEventListener("click",swap)
// let color = arr[1].style.color;
// console.log(color)
// console.log(arr[0].textContent)
// function swap(){
//     // console.log(arr[0].innerHTML);
//     // console.log("working");
//     var temp = arr[0].innerHTML;
//     arr[0].innerHTML = arr[arr.length-1].innerHTML;
//     arr[arr.length-1].innerHTML =  temp;
//     // console.log(arr[0].innerHTML);
// //     var temp = arr[0].style.color;
// //     arr[0].innerHTML = arr[arr.length-1].innerHTML;
// //     arr[arr.length-1].innerHTML =  temp;
// }
// function swap(){
//     // let e = window.getComputedStyle(arr[0],null);
//     // let b = e.getPropertyValue("background-color");

//     arr[0].style.backgroundColor = arr[4].style.backgroundColor;
// }
// function swap(){
//     let randomIndex = Math.floor(Math.random()*arr.length);
//     arr[3].style.backgroundImage = "url('"+arr[randomIndex]+"')";
// }




// const one = document.getElementById("one");
// const two = document.getElementById("two");
// const three = document.getElementById("three");
// const four = document.getElementById("four");
// const five = document.getElementById("five");


// function swap(){
//     // arr.pop(one);
//     arr[arr.length-1].style.backgroundImage = "url('yellow.png')";
//     arr[arr.length-2].style.backgroundImage = "url('skyblue.png')";
//     arr[arr.length-3].style.backgroundImage = "url('red.jpg')";
//     arr[arr.length-4].style.backgroundImage = "url('skin_color.png')";
//     arr[arr.length-5].style.backgroundImage = "url('brown.png')";
// }


















const button = document.getElementById("buton");

const arr = document.querySelectorAll(".block");
// let arr = [five,four,three,two,one];

// button.addEventListener("click",swap);

let colors = ["/skin_color.png","/yellow.png","/skyblue.png","/red.jpg","/blue.png"]
setUpColor()
function swap(){
    var temp = colors.shift()
    colors.push(temp)
    setUpColor()
}

function setUpColor () {
    for(let i = 0;i < arr.length;i++){
        arr[i].style.backgroundImage = `url(${colors[i]})`;
        arr[i].addEventListener("mouseover",swap);
    }
}