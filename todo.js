let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {


for (i = 0; i < arrayOfTodos.length; i++) {

    let toDos = document.getElementById("todo-list")

    let toDoList = document.createElement("LI")

    let toDoTextNode = document.createTextNode(arrayOfTodos[i].title)

    toDoList.appendChild(toDoTextNode)

    toDos.appendChild(toDoList)
}
}

function clearTodos() {

    const todos = document.getElementsByTagName("OL");

for (i=0; i < todos.length; i++) {

console.log(todos[i].id)

todos[i].innerHTML = null
}  
}

const filterById = () => {

let toDos = document.getElementById("todo-list")

let num = document.getElementById("number_input").value

let filteredArray = arrayOfTodos.filter(array => array.userId == num)

for (let i = 0; i < filteredArray.length; i++) {

    

    let toDoList = document.createElement("LI")

    // let toDoTextNode = document.createTextNode(filteredArray[i].title)

    // toDoList.innerHTML = filteredArray[i].title
    toDoList.innerHTML = "<b>User:</b" + filteredArray[i].userId + ", <b>Title:</b> " + filteredArray[i].title + ", <b>Completed:</b>" + filteredArray[i].completed;
    toDos.appendChild(toDoList)

    // toDoList.appendChild(toDoTextNode)

    // toDos.appendChild(toDoList)

}
}