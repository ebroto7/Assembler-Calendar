import { isValidForm } from "./form.js";
const main = document.querySelector("#main");
const modalForm_saveEventBtn = document.querySelector('#modalForm_saveEventBtn');
modalForm_saveEventBtn.addEventListener('click', () => {
    console.log("save event");
    console.log(isValidForm());
});
