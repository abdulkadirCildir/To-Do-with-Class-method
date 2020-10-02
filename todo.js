// TO-DO !

const todoList = [];  // girilen inputun kaydedilecegi Array
const todoListElement = document.querySelector("#myUL");

document.querySelector("#todo_button").addEventListener("click", addTodo);
// todo Button u eslestirildikten sonra clickle addTodo fonksiyonu cagiriliyor.

function addTodo() {  // girdigimiz input olusturulup todoList e atiliyor
  const todoText = document.querySelector("#myInput").value;

  const todoObject = {
    id: todoList.length,  // todoList bosken 0 dan baslayacagi icin
    todoText: todoText,   // input icin olusturulan todoText
    isDone: false,
  };

  todoList.push(todoObject);
  displayTodos();
}

function doneTodo(todoId) {   // asagida selectedId ile alinan data-id yi mesela 0 todoId ile karsilastirip True yapiyor..
  const selectedTodoIndex = todoList.findIndex((item) => item.id == todoId);
  todoList[selectedTodoIndex].isDone = true;

  displayTodos();
}

function displayTodos() {
  todoListElement.innerHTML = "";
  document.querySelector("#myInput").value = "";

  todoList.forEach((item) => {
    const listElement = document.createElement("li");

    listElement.innerText = item.todoText;
    listElement.setAttribute("data-id", item.id);

    if (item.isDone) {
      listElement.classList.add("checked");
    }

    // ekrana basilan todo larin üzerine tiklama islemini saglayan kod, icindeki target ile üzerine basilan nesnenin icerisindeki data-id leri getiriyor
    listElement.addEventListener("click", function (e) {  
      const selectedId = e.target.getAttribute("data-id");
      doneTodo(selectedId); // donTodo functiona bak
    });

    todoListElement.appendChild(listElement);
  });
}
