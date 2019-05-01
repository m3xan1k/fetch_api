// let getText = () => {
//   fetch("sample.txt")
//     .then(function(res) {
//       return res.text();
//     })
//     .then(function(data) {
//       console.log(data);
//     });
// };

let getText = () => {
  fetch("sample.txt")
    .then(res => res.text())
    .then(data => {
      document.querySelector("#content").innerHTML = data;
    })
    .catch(err => console.log(err));
};

let getUsers = () => {
  fetch("users.json")
    .then(res => res.json())
    .then(data => {
      let content = "<h2 class='mb-4'>Users</h2>";
      data.forEach(user => {
        content += `<ul class="list-group mb-3">
            <li class="list-group-item">ID: ${user.id}</li>
            <li class="list-group-item">Name: ${user.name}</li>
            <li class="list-group-item">Email: ${user.email}</li>
          </ul>`;
      });
      document.querySelector("#content").innerHTML = content;
    });
};

let getPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
      let content = "<h2 class='mb-4'>Posts</h2>";
      data.forEach(post => {
        content += `
                <div class="card card-body mb-3">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `;
      });
      document.querySelector("#content").innerHTML = content;
    });
};

let addPost = e => {
  e.preventDefault();

  let title = document.querySelector("#title").value;
  let body = document.querySelector("#body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json"
    },
    body: JSON.stringify({ title: title, body: body })
  })
    .then(res => res.json())
    .then(data => console.log(data));
};

document.querySelector("#addPost").addEventListener("submit", addPost);
document.querySelector("#getPosts").addEventListener("click", getPosts);
document.querySelector("#getUsers").addEventListener("click", getUsers);
document.querySelector("#getText").addEventListener("click", getText);
