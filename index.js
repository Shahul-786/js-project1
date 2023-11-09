let currentUser = null;
let todos = [];

function showSignupForm() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signupForm').style.display = 'block';
}

  function signup() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
    console.log('Gender:', gender);


    event.preventDefault();
  }

  function showLoginForm() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
  }

function showTodoList() {
  if (currentUser) {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('todoList').style.display = 'block';
    displayTodos();
  } else {
    alert('Please login first.');
  }
}

function logout() {
  currentUser = null;
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('todoList').style.display = 'none';
}

function displayTodos() {
  const todoList = document.getElementById('todos');
  todoList.innerHTML = '';

  todos.forEach((todo, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = todo;
    listItem.innerHTML += `<button class="btn btn-danger btn-sm ms-2" onclick="removeTodo(${index})">Remove</button>`;
    todoList.appendChild(listItem);
  });
}

function addTodo() {
  const todoText = document.getElementById('todoText').value;
  todos.push(todoText);
  displayTodos();
  document.getElementById('todoText').value = '';
}

function removeTodo(index) {
  todos.splice(index, 1);
  displayTodos();
}

document.getElementById('login').addEventListener('submit', function (e) {
  e.preventDefault();
  currentUser = document.getElementById('loginUsername').value;
  showTodoList();
});

document.getElementById('signup').addEventListener('submit', function (e) {
  e.preventDefault();
  currentUser = document.getElementById('signupUsername').value;
  showTodoList();
});

document.getElementById('addTodoForm').addEventListener('submit', function (e) {
  e.preventDefault();
  addTodo();
});