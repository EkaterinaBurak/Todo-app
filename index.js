import { data } from './data.js';
import { Card } from './card.js';
import { createModal } from './modal.js';


const todoList = document.querySelector('ul')
const btnAddModal = document.querySelector('.btn-info')
const btnDeleteLast = document.querySelector('.btn-danger')
const btnDeleteAll = document.querySelector('.btn-warning')



todoList.innerHTML = data.map(todo => new Card(todo.title, todo.description).getHtml()).join('')


btnAddModal.addEventListener('click', () => {
  const modal = document.createElement('div');
  modal.classList.add('fixed-top')
  todoList.append(modal);
  modal.innerHTML = createModal()
  const modalTitle = document.querySelector('.todo-title')
  const modalDescription = document.querySelector('.todo-description')
  const btnClose = document.querySelector('.btn-secondary')
  const btnAddTodo = document.querySelector('.btn-primary')

  btnClose.addEventListener('click', () => {
    modal.remove()
  })

  btnAddTodo.addEventListener('click', () => {
    data.push(new Card(modalTitle.value, modalDescription.value))
    todoList.innerHTML = data.map(todo => new Card(todo.title, todo.description).getHtml()).join(' ')
    modal.remove()
  })
})


btnDeleteLast.addEventListener('click', () => {
  data.pop()
  todoList.innerHTML = data.map(todo => new Card(todo.title, todo.description).getHtml()).join('')
})


btnDeleteAll.addEventListener('click', () => {
  data.length = 0
  todoList.innerHTML = data.map(todo => new Card(todo.title, todo.description).getHtml()).join(' ')
})

console.log(btnAddModal)
console.log(btnDeleteLast)
console.log(btnDeleteAll)
