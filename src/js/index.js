import { createDOM } from "./DOM"

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function(event) {
    event.preventDefault()
    const taskName = document.getElementById("taskName").value;
    const taskDesc = document.getElementById("taskDesc").value;
    const taskPrio = document.getElementById("choice").value;
    
    const task = new createTask(taskName, taskDesc, taskPrio) 
})

function createTask(title, description, priority) {

    console.log(title)
    console.log(description)

    this.title = title;
    this.description = description;
    this.priority = priority;

    createDOM(this.title, this.description, this.priority);
}

// const newTask = new createTask("Dishes", "Wash the dishes", "low")

createDOM("Gabriel", "Mamãe disse que tenho que lavar as louças antes do anoitecer", "high")

