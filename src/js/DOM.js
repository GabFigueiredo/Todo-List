export function createDOM(title, description, priority) {
    const main = document.querySelector("main")
    
    const contentContainer = document.createElement("div")
    const rightSide = document.createElement("div");
    const leftSide = document.createElement("div");
    const taskContainer = document.createElement("div")
    const colorContainer = document.createElement("div");
    const checkBtn = document.createElement("button");
    const taskTitle = document.createElement("p");
    const details = document.createElement("p");
    const deletImg = document.createElement("img");
    deletImg.src = "../src/assets/trash-can-outline.svg";

    rightSide.classList.add("right-side")
    leftSide.classList.add("left-side")

    taskContainer.classList.add("taskContainer")

    colorContainer.classList.add(priority)
    colorContainer.classList.add("colorContainer")
    
    checkBtn.classList.add("active");
    taskTitle.textContent = title

    details.textContent = "details"
    details.classList.add("desativado")
    details.addEventListener("click", function() {
        createDetails()
    })

    function createDetails() {
        const underSide = document.createElement("div");
        const detail = document.createElement("p");
        detail.classList.add("detail")
        
        underSide.classList.add("under-side")
        detail.textContent = description
        
        if (details.classList.contains("desativado")) {
            details.classList.remove("desativado")
            details.classList.add("ativado")
            contentContainer.appendChild(underSide)
            underSide.appendChild(detail)
        }
        else if (details.classList.contains("ativado")) {
            details.classList.remove("ativado")
            details.classList.add("desativado")
            const underSide = taskContainer.querySelector(".under-side")
            underSide.parentNode.removeChild(underSide)
            
        }
    }

    deletImg.addEventListener("click", function() {
        taskContainer.parentNode.removeChild(taskContainer);
    })

    const leftResult = [taskTitle, details] ;
    const rightResult = [checkBtn, deletImg];

    leftResult.forEach(element => leftSide.appendChild(element))
    rightResult.forEach(element => rightSide.appendChild(element))

    contentContainer.classList.add("contentContainer");

    taskContainer.appendChild(colorContainer)
    contentContainer.appendChild(leftSide)
    contentContainer.appendChild(rightSide)
    taskContainer.appendChild(contentContainer)
    
    main.appendChild(taskContainer)

}

