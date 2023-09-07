"use strict";
const asideBar = document.querySelector("#aside");
const createArray = ["trabajo", "gimnasio", "cumple"];
const checkboxCalendar = document.createElement("div");
function createCheckboxCalendar() {
    asideBar.appendChild(checkboxCalendar);
    createArray.forEach((element) => {
        const InputyLabel = document.createElement("div");
        const createInput = document.createElement("input");
        createInput.setAttribute("class", "form-check-input");
        createInput.setAttribute("type", "checkbox");
        createInput.setAttribute("value", "");
        createInput.setAttribute("id", "flexCheckDefault");
        const createLabel = document.createElement("label");
        createLabel.setAttribute("class", "form-check-label");
        createLabel.setAttribute("name", "my calendars");
        createLabel.setAttribute("for", "flexCheckDefault");
        createLabel.innerText = element;
        InputyLabel.appendChild(createInput);
        InputyLabel.appendChild(createLabel);
        checkboxCalendar.appendChild(InputyLabel);
        createInput.addEventListener("change", () => {
            if (createInput.checked == true) {
                createLabel.style.backgroundColor = "grey";
                console.log("marked");
            }
            else {
                createLabel.style.backgroundColor = "transparent";
            }
        });
    });
}
createCheckboxCalendar();
function nextEvents() {
    const titleNE = document.createElement("h6");
    titleNE.setAttribute("id", "titleNE");
    titleNE.innerHTML = " Next Events:";
    asideBar.appendChild(titleNE);
    titleNE.style.backgroundColor = "red";
    const createEvent = ["comida familiar", "excursion amigos"];
    createEvent.forEach((element) => {
        const listEvent = document.createElement("ul");
        listEvent.classList.add('list-group');
        listEvent.textContent = `${element}`;
        asideBar === null || asideBar === void 0 ? void 0 : asideBar.appendChild(listEvent);
    });
}
nextEvents();
