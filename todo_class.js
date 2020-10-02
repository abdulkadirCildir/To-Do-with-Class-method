/*
 * 1) TODO'ya tekrar basılınca, todo durumu eski haline gelsin
 *    İpucu (Tek bir satırda değişiklik yapılacak)
 *
 * 2) Todo silme operasyonu
 **/

const todoList = [];

class TodoList {
  constructor(listElementParam) {
    this.todoListElement = listElementParam;
  }

  add(todoText) {
    const todoObject = {
      // id: todoList.length * 5,
      id: todoList.length,
      todoText: todoText,
      isDone: false,
      isRemove: false,    // new property for removing...
    };

    todoList.push(todoObject);
    this.display();
  }

  done(todoId) {
    const selectedTodoIndex = todoList.findIndex((item) => item.id == todoId);
    todoList[selectedTodoIndex].isDone = (todoList[selectedTodoIndex].isDone == false) ? true : false;
    // unchecked..

    this.display();
  }

  remove(removeId){
    const selectedTodoIndex2 = todoList.findIndex((item) => item.id == removeId);
    todoList[selectedTodoIndex2].isRemove = true;

    this.display();
  }

  display() {
    this.todoListElement.innerHTML = "";
    document.querySelector("#myInput").value = "";

    todoList.forEach((item) => {
      const listElement = document.createElement("li");
      const buttonElement = document.createElement("button");  // add ButtonElements....

      listElement.innerText = item.todoText;
      listElement.setAttribute("data-id", item.id);
      buttonElement.innerText = "X";                          // innerText for buttonElements..
      buttonElement.setAttribute("data-id", item.id);         // id for buttonElements..

      if (item.isDone) {
        listElement.classList.add("checked");
      }

      if (item.isRemove) {                       // Condition for removing of listElements (Li)...
        listElement.classList.add("remove");
      }

      listElement.addEventListener("click", function (e) {
        const selectedId = e.target.getAttribute("data-id");
        myTodoList.done(selectedId);
      });

      buttonElement.addEventListener("click", function (e) {     // Click method for buttonElements...
        const selectedId = e.target.getAttribute("data-id");
        myTodoList.remove(selectedId);
      });

      this.todoListElement.appendChild(listElement);
      listElement.appendChild(buttonElement);               // append of buttons..
    });
  }
}

const listSection = document.querySelector("#myUL");
const secondList = document.querySelector("#severekAyrilanlar");

const myTodoList = new TodoList(listSection);

document.querySelector("#todo_button").addEventListener("click", function () {
  const todoText = document.querySelector("#myInput").value;

  myTodoList.add(todoText);
});

document.querySelector("#myInput").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    const todoText = document.querySelector("#myInput").value;
    myTodoList.add(todoText);          // Enter key function..
  }
});
