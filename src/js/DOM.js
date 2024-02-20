export function createDOM(title, description, priority, ID) {
    const main = document.querySelector("main")

    // ORDER GOES BY: TYPE, CLASS, CONTENT, ID 
    
    const contentContainer = createElement("div","contentContainer", "", "" );
    const leftSide = createElement("div","left-side", "", "" );
    const rightSide = createElement("div","right-side", "", "" );
    const taskContainer = createElement("div","taskContainer", "", "" );
    const colorContainer = createElement("div", priority, "", "" ); 
    colorContainer.classList.add("colorContainer")
    const taskTitle = createElement("p","texto", title, "")
    const details = createElement("p","desativado", "details", "" )
    const checkBtn = createElement("button", "a", "" , "")
    const deletImg = createElement("img", "delet", "details", "")
    deletImg.src = "../src/assets/trash-can-outline.svg";
    
    details.addEventListener("click", function() {
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
    })

    checkBtn.addEventListener("click", function () {
        if (checkBtn.classList.contains("a")) {
            checkBtn.classList.remove('a');
            checkBtn.classList.add("checkBtnA");
            colorContainer.classList.remove(priority)
            colorContainer.classList.add("done")
        }
        else {
            checkBtn.classList.remove('checkBtnA');
            checkBtn.classList.add("a");
            colorContainer.classList.remove("done")
            colorContainer.classList.add(priority)
        }
    })

    deletImg.addEventListener("click", function() {
        taskContainer.parentNode.removeChild(taskContainer);
        console.log(ID)
        localStorage.removeItem(ID)
    })

    const leftResult = [taskTitle, details];
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


function createElement(type, className, elementContent, elementID) {
    const newElement = document.createElement(type)
    newElement.classList.add(className)
    newElement.textContent = elementContent
    newElement.setAttribute("id", elementID)

    return newElement
}

