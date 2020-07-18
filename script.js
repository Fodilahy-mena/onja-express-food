console.log('good luck!');

// Access the necessary elements from html here
//const container = document.querySelector('.container');
const divWrapper = document.querySelector('.wrapper');
const form = document.querySelector('.wrapper__form');
const details = document.querySelector('.details');
const deleteOrder = document.querySelector('.served');
const addNewOrder = document.querySelector('.add-order');

// Let add the form modal

const handleAddNewOrderClick = (event) => {
    event.preventDefault();
    divWrapper.classList.add('new_order');
}
// Let quit the form modal
const closeFormModal = event => {
    const isOutside = !event.target.closest('.wrapper__form');
    if (isOutside) {
        divWrapper.classList.remove('new_order');
    }
}

// Listening for click event listener with add a new order button
addNewOrder.addEventListener('click', 
    handleAddNewOrderClick);

// Listen for a click to quite the modal form
divWrapper.addEventListener('click', closeFormModal);
// Or with escape key
window.addEventListener('keydown', event => {
    if (event.key === "Escape") {
        divWrapper.classList.remove('new_order');
    }
});