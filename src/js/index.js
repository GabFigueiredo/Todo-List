import { createDOM,} from "./DOM"

document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const task = JSON.parse(localStorage.getItem(key));
        createDOM(task.title, task.description, task.priority); 
    }
});

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function(event) {
    event.preventDefault()
    const taskName = document.getElementById("taskName").value;
    const taskDesc = document.getElementById("taskDesc").value;
    const taskPrio = document.getElementById("choice").value;

    const taskID = generateUniqueId();
    const task = new createTask(taskName, taskDesc, taskPrio, taskID)

    localStorage.setItem(taskID, JSON.stringify(task))  

})

function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

function createTask(title, description, priority, taskID) {
    
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.taskID = taskID;
    
    createDOM(this.title, this.description, this.priority, this.taskID);
}



