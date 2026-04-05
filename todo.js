//todo app with, remove, and list functions
const todoList = [];

function addTodo(todo) {
  todoList.push(todo);
  console.log(`Added: ${todo}`);
}
function removeTodo(index) {
  if (index >= 0 && index < todoList.length) {
    const removed = todoList.splice(index, 1);
    console.log(`Removed: ${removed}`);
  } else {
    console.log("Invalid index");
  }
}
function listTodos() {
  console.log("Todo List:");
  todoList.forEach((todo, index) => {
    console.log(`${index}: ${todo}`);
  });
}
