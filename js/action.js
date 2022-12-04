const typer = document.querySelector(".type_btn_wrap");
const typerBtn = document.querySelectorAll(".type_btn_wrap>div>div");
const enterBtn = document.querySelector(".enter");
const submitList=document.querySelector("#todo_list");
const bar=document.querySelector(".listpart");
const bar2=document.querySelector(".listpart2");
function keyDownBtn(e){
    const ranTypeBtn=typerBtn[Math.floor(Math.random()*typerBtn.length)]; 
    let x = parseInt(submitList.style.right || 0,0);
    let x2= parseInt(bar.style.right || 0,0);
    let x3= parseInt(bar2.style.right || 0,0);
    const keyCode=e.keyCode;
    if (keyCode>=65 && keyCode<=90 ||keyCode>=49&&keyCode<=57||keyCode==229){
        ranTypeBtn.classList.toggle("pressed");
        submitList.style.right = x + 8 +"px";
        bar.style.right = x2 + 8 +"px";
        bar2.style.right = x3 + 8 +"px";
    }else if(keyCode==8){
        submitList.style.right = x - 8 +"px";
        bar.style.right = x2 - 8 +"px";
        bar2.style.right = x3 - 8 +"px";
    }
    console.log(keyCode)
    
}
    

function enterBtnDown(e){
    const keyCode=e.keyCode;
    if(keyCode==13||enterBtn.classList.contains("submit")){
        enterBtn.classList.toggle("submit");
        submitList.style.right = parseInt(0+"px");
        bar.style.right = parseInt(0+"px");
        bar2.style.right = parseInt(0+"px");
    }
    
}




todoForm.addEventListener("keydown",enterBtnDown);
todoForm.addEventListener("keydown",keyDownBtn);
