// Elementos HTML
const userSelect = document.getElementById('select-users');
const userContainer = document.getElementById('user-container');
const taskContainer = document.getElementById('task-container');
const tasksButton = document.querySelector("#boton-tareas");
let usuarios;
let pressed = false;


document.addEventListener("DOMContentLoaded", showUsersSelect);


getAllUsers().then(users => console.log(users));

userSelect.addEventListener('change', (e) => {
  pressed = false;
  tasksButton.innerHTML = "Ver Tareas";

  taskContainer.children[2].innerHTML = "";
  getUserById(e.target.value).then(usuario => {
    userContainer.children[1].children[0].innerHTML = `Nombre completo: ${usuario.firstname}  ${usuario.lastname}`;
    userContainer.children[1].children[1].innerHTML = `Email: ${usuario.email}`;
  });

})


tasksButton.addEventListener("click", () => {
  pressed = !pressed;
  if (pressed) {
    tasksButton.innerHTML = "Esconder Tareas";
    console.log(userSelect.value);
    getTaskById(userSelect.value).then(tasks => {
      tasks.forEach(element => {
        const text = element.title;
        const completed = element.completed == '1' ? 'checked' : '';
        taskContainer.children[2].innerHTML += `<li><span>${text}</span> <input type=\"checkbox\" ${completed}></li>`;
      });
    })
  } else {
    taskContainer.children[2].innerHTML = "";
    tasksButton.innerHTML = "Ver Tareas";
  }
})


function getAllTasks() {
  return fetch('http://localhost/UniversidadPHP/tasks.php')
    .then(resp => resp.json());
}

function getAllUsers() {
  return fetch('http://localhost/UniversidadPHP/')
    .then(resp => resp.json())
}

function showUsersSelect() {
  getAllUsers().then(usuarios => {
    usuarios.forEach(element => {
      
      userSelect.innerHTML += `<option value="${element.id}">${element.firstname}</option>`;

    });
    const id = parseInt(userSelect.value);
    userContainer.children[1].children[0].innerHTML = `Nombre completo: ${usuarios[id-1].firstname}  ${usuarios[id-1].lastname}`;
    userContainer.children[1].children[1].innerHTML = `Email: ${usuarios[id-1].email}`;

  })
}

function getUserById(userID) {
  return getAllUsers().then(usuarios => {
    for (let i = 0; i < usuarios.length; i++) {
      if (userID == usuarios[i].id) {
        return usuarios[i];
      }
    }
  })
}

function getTaskById(userID) {

  return getAllTasks().then(tasks => {
    const userTasks = [];
    for (let i = 0; i < tasks.length; i++) {
      console.log(tasks[i].userId);
      if (tasks[i].userId == userID) {
        userTasks.push(tasks[i]);
      }
    }
    console.log(tasks);
    return userTasks;
  })
}

