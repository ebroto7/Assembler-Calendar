const asideBar = document.querySelector("#aside");
const calendarContainer = document.querySelector("#calendarContainer");
const selectCalendarContainer = document.querySelector("#selectCalendarContainer") as HTMLDivElement;
selectCalendarContainer.style.backgroundColor="green";
const createArray = ["trabajo", "gimnasio", "cumple"];



function createCheckboxCalendar (){
   
    const checkboxCalendar = document.createElement("div");

    asideBar!.appendChild(checkboxCalendar);
   
 
    createArray.forEach((element)=> {
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
    createLabel.innerText= element;

   InputyLabel.appendChild(createInput)
    InputyLabel.appendChild(createLabel);
    checkboxCalendar.appendChild(InputyLabel);
    }) 
}

createCheckboxCalendar();

//add title html 
//const title = document.createElement("h5")
//title.innerHTML="my calendar";
//checkboxCalendar.appendChild(title);
