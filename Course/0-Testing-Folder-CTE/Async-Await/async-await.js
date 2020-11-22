let todoListEl = document.getElementById("myList");

async function fetchPost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  ret = "";
  await data.forEach((item, index) => {
    console.log(index, item);
    ret += `
    <li>
    <h4>${item.userId} <i style="color: red;">${item.id}</i></h4>
    <p>${item.title}</p>
    </li>
    `;
  });
  return ret;
}

async function loadHTML() {
  todoListEl.innerHTML = await fetchPost();
}

loadHTML();