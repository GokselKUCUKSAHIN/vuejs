let todoListEl = document.getElementById("myList");

async function fetchPost() {
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const response = await fetch('https://opendata.ecdc.europa.eu/covid19/casedistribution/json');
  const data = await response.json();
  ret = "";
  await data.forEach((item, index) => {
    console.log(index, item);
    ret += `
    <li>
      <p>${item}</p>
    </li>
    `;
  });
  return ret;
}

async function loadHTML() {
  todoListEl.innerHTML = await fetchPost();
}

loadHTML();