//**********************************************************

// const loginForm = document.getElementById("login_form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");


//**********************************************************

// const loginForm = document.querySelector("#login_form");
// const loginInput = loginForm.querySelector("#input");
// const loginButton = loginForm.querySelector("#button");
// 로그인 폼의 인풋과 버튼을 찾는다는 뜻. 1열은 다큐멘트에서 찾는다는 뜻이겠죠~>?


//**********************************************************

// function btnClick(){
//     console.log("hello", loginInput.value);
// }
// 이건 hello input이름을 콘솔 해줄 수 있는데 공란도 제출해버리는 문제가 있어서
// 이거 해결하는건 따로해야함
//**********************************************************

const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const greeting = document.querySelector("#greeting");
// const loginButton = document.querySelector("#login_form button");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"
function onLoginSubmit(event) {
    event.preventDefault();
    const userLoginName = loginInput.value;
    localStorage.setItem(USERNAME_KEY,userLoginName);
    paintGreetings(userLoginName);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}
function paintGreetings(userLoginName){
   
    greeting.innerText = `Hello ${userLoginName}`
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreetings(savedUserName);
    // show the greetings
}
//**********************************************************

// 쿼리셀렉터로 form을 불러오고 form을 submit이벤트로 추가시킨다.
// 그 결과로 나온 함수에 매개변수 (관행으로는 event)를 넣어
// 함수안에서 처리(preventDefault)한다.


// ***********************예제*****************************
// const anchor = document.querySelector("a")

// function anchorClick(event){
//     event.preventDefault();
// } 

// anchor.addEventListener("click",anchorClick);




//**********************************************************

// loginButton.addEventListener("click", btnClick); form이 submit된다면 필요없다
//**********************************************************

// if (userLoginName === "") {
//     alert("please write your name.");
// } else if (userLoginName.length > 15) {
//     alert("Your name is too long.");
// }


// else {

//     console.log("hello", loginInput.value);
// }