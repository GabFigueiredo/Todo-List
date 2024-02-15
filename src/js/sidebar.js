function showElements(btn, e) {
    const element = document.querySelectorAll(e)
    if (btn.classList.contains("active")) {
        element.forEach(element => element.style.visibility = "hidden")
    }
    else if (btn.classList.contains("disabled")) {
        element.forEach(element => element.style.visibility = "visible")
    }
}
