const todoForm = document.querySelector("#todo_form"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector("#todo_list");
const TODOS_KEY = "todos";
let toDos = [];

// 저장 삭제

function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // Json.stringify()는 전부 string으로 바꿔줌
}
function deleteTodo(event) {
    // button을 클릭하면 deleteTodo가 실행
    const li = event.target.parentElement;
    // deleteTodo가 실행되면서 event.target(버튼)의 parentElement를 지목 
    // 클릭 이벤트가 일어난 버튼의 부모를 지목하는것임
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));


    saveTodo();
    
}
function refresh(){
    location.reload();
}



// 출력
function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteTodo);
    // append는 맨 마지막.
    const listCount = todoList.childElementCount;
    if (listCount >= 0 && listCount <10) {
        todoInput.disabled=false;
        todoList.appendChild(li);
        li.appendChild(span);
        li.appendChild(button);
    }else if(listCount==10){
        todoInput.disabled=true;
        todoInput.placeholder="종이가 모자라요";
        todoList.appendChild(li);
        li.appendChild(span);
        li.appendChild(button);
        todoForm.appendChild(button);
        button.innerText= "🔃"
        button.addEventListener("click", refresh);
        
    }
    

}

// 핸들러
function todoInputHandler(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = ""
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
    // localStorage.setItem("TODO",newTodo);
    // console.log(`${localStorage.getItem("TODO")}`);
    // const userList = document.createElement("li");
    
}

todoForm.addEventListener("submit", todoInputHandler);



const savedToDosArray = localStorage.getItem(TODOS_KEY);
if (savedToDosArray !== null) {
    // savedToDOsArray가 null이 아닐때(비어있지 않을떄)
    const parsedTodos = JSON.parse(savedToDosArray);
    toDos = parsedTodos;
    parsedTodos.forEach((paintTodo));

}

