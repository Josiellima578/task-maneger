//function that add task
function addTask() {

  const taskTitle = document.querySelector("#task-title").value;

  if(taskTitle) {

    //clone template
    const template = document.querySelector(".template");

    const newTask = template.cloneNode(true);

    //add title
    newTask.querySelector(".task-title").textContent = taskTitle;

    //remove unnecessary classes
    newTask.classList.remove("template");
    newTask.classList.remove("hide");

    //add list
    const list = document.querySelector("#task-list");

    list.appendChild(newTask);

    //task complete event
    const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
      completeTask(this);
    })

    //remove task event
    const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
      removeTask(this);
    });

    //clear text
    document.querySelector("#task-title").value = "";

  }

}

//complete task function
function completeTask(task) {
  const taskToComplete = task.parentNode;

  taskToComplete.classList.toggle("done");

}

//remove task function
function removeTask(task) {
  task.parentNode.remove(true);
}


//event add task
const addbtn = document.querySelector("#add-btn");

addbtn.addEventListener("click", function(e){

  e.preventDefault();
  
    addTask();

});