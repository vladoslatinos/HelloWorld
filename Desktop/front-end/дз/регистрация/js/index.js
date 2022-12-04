const ToDolist = document.querySelector('.ToDolist');
const btnEnd = document.querySelector('.btn_end');
const form = document.querySelector('.form');
const formInput = document.querySelector('.form__input');
 const formBtn = document.querySelector('.form__btn')

const List = {
  1: 'Vlad',
  2: 'ggg',
  3: 'fff',
 
};
for (var list in List) {
  let ToDo = document.createElement('h1')
  
  ToDo.classList.add('kaka')
  ToDo.innerText = List[list]
  ToDolist.appendChild(ToDo)
}
formBtn.addEventListener('click', function (){
  const inputText = formInput.value
  console.log(inputText);
  
  
});
btnEnd.addEventListener('click', function (){
  const tasks = document.querySelectorAll('h1')
  for (var i = 0; i < tasks.length; i++){
    tasks[tasks[i].classList.add('end')]
  }
  
  
});