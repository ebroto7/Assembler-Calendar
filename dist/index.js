import { isValidForm, saveNewEvent, closeModal } from "./form.js";
const main = document.querySelector("#main");
const createEvent_Modal = document.querySelector('#createEvent_Modal');
const modalForm_saveEventBtn = document.querySelector('#modalForm_saveEventBtn');
modalForm_saveEventBtn.addEventListener('click', () => {
    if (isValidForm() == true) {
        saveNewEvent();
        closeModal();
    }
    console.log("is valid form?" + isValidForm());
});
