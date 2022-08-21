document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const inputValue = e.target.new_task_description.value;
    addToDo(inputValue);
    form.reset();
  })
});

function addToDo(task){
  let li = document.createElement('li');
  li.textContent = `${task} `;
  let btn = document.createElement('button')
  btn.textContent = 'x';
  btn.addEventListener("click", e => deleteTask(e))
  li.appendChild(btn);
  document.getElementById("tasks").appendChild(li);

}

function deleteTask(e){
  e.target.parentNode.remove();
}