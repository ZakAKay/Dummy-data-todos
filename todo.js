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