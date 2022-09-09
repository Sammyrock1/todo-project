
const todos = [];
let count = 0;
 document.querySelector(".btn").addEventListener("click",function(){
    let todo  = document.querySelector(".text").value;

    console.log(todo)
    if(todo  === ""){
       alert('Todo is required')
    }else{
        const todoObj = {
            completed : false,
            id : ++count,
            name : todo
        };
        todos.push(todoObj);
        console.log(todos);
        addTodos(todos)
        removeTodos(todos); 
    }

 });
 function  addTodos(list){
    let element = `<ul>`
    for(let i=0;i<list.length;i++){
        let item = list[i];
        element +=`<li class=list>${item.name}<button class=row>x</button></li>`
    };
    element +=`</ul>`
    document.querySelector(".todo-list").innerHTML = element;
 };
 function removeTodos(){
    let list =  document.querySelectorAll(".row");
    for(let i=0;i<list.length;i++){
        let button = list[i];
        button.addEventListener("click",function(){
            button.parentElement.style.display = 'none'
            todos.splice(i,1);
        });
    };
 };
 