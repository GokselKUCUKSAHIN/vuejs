const todos = [
  { title: "Todo1", desc: "Foo" },
  { title: "Todo2", desc: "Bar" },
  { title: "Todo3", desc: "Buz" },
  { title: "Todo4", desc: "Fiz" },
];

let todoListEl = document.getElementById("myList");

function todoList() {
  setTimeout(() => {
    // do something
    todoItems = "";
    todos.forEach(item => {
      todoItems += `
      <li>
        <b>${item.title}</b>
        <p>${item.desc}</p>
      </li>
      `;
    });
    todoListEl.innerHTML = todoItems;
  }, 1000);
}

function newTodo(todo) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      todos.push(todo);
      const e = false; // false
      if (!e) {
        res();
      }
      else {
        rej("Hata var!");
      }
    }, 2000);
  });
}

newTodo({
  title: "Todo5",
  desc: "Fuzz",
}).then(response => {
  todoList();
}).catch(e => {
  console.log(e);
});

todoList();