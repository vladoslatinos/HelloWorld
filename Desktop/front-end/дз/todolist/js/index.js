const ToDolist = document.querySelector('.ToDolist');
const form = document.querySelector('.form');
const formInput = document.querySelector('.form__input');
 const formBtn = document.querySelector('.form__btn')

const List = {
  add(title) {
    let counter = 1
    for(let item in this) {
      if(this[item] === title) {
        return
      }
      counter++
    }

    this[counter] = title

    return counter
  },
  delete(index){
    delete this[index]
  }
};

Object.defineProperties(List, {
  add: {
    enumerable: false
  },
  delete: {
    enumerable: false
  }
})

function addTask(list) {
  let ToDoContainer = document.createElement('div')
  let ToDoTitle = document.createElement('h1')
  let ToDoEndButton = document.createElement('button')
  let ToDoDeleteButton = document.createElement('button')
  
  ToDoContainer.classList.add('task_container')
  ToDoContainer.setAttribute('data-index', list)
  ToDoTitle.classList.add('kaka')
  ToDoEndButton.classList.add('btn_end')
  ToDoDeleteButton.classList.add('btn_end')

  ToDoEndButton.addEventListener('click', function (e){
    let title = e.target.parentNode.children[0]
    
    title.classList.add('end')
  }); 

  ToDoDeleteButton.addEventListener('click', function (){
    ToDoContainer.remove()
    List.delete(ToDoContainer.getAttribute('data-index'))
  })

  ToDoTitle.innerText = List[list]
  ToDoEndButton.innerText = 'end'
  ToDoDeleteButton.innerText = 'del'

  ToDoContainer.appendChild(ToDoTitle)
  ToDoContainer.appendChild(ToDoEndButton)
  ToDoContainer.appendChild(ToDoDeleteButton)

  ToDolist.appendChild(ToDoContainer)
}

for (var list in List) {
  addTask(list)
}

formBtn.addEventListener('click', function (){
  const inputText = formInput.value
  const index = List.add(inputText)
  if(index) {
    addTask(index)
  }
});