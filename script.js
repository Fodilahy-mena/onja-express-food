
// Access the necessary elements from html here

const divWrapper = document.querySelector('.wrapper');
const form = document.querySelector('.wrapper__form');
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


// Let's add a new order now
const orderList = document.createElement('div');
orderList.classList.add('order-list')

const addAnOrder = (e) => {
    e.preventDefault();
// Let's select some text content from form modal
const titleFormInput = document.querySelector('.input-form');
let title = `${titleFormInput.value}`;

orderList.innerHTML = `
    <div class="order">
        <span class="title">${title}</span>
        <button class="details">Details</button>
        <button class="served">Delete order</button>
    </div>
    
    `;
addNewOrder.insertAdjacentElement('beforebegin', orderList);
}

// Details
const outerDetails = document.querySelector('.outer_details');
const innerDetails = document.querySelector('.inner_details');

// const radioButtons = document.querySelectorAll("[type='radio']");
// for (let i = 0; i < radioButtons.length; i++) { radioButtons[i].addEventListener('change', ($event) => {
// transportResult.textContent = $event.target.value;
// });
// }
//console.log(radioButtons);

const detailsButtonClick = (event) => {
    event.preventDefault();
    details.innerHTML = `
        <h2>${title}</h2>
        <h3>${title}</h3>
        <ha>${title}</h4>
        <img src="https://picsum.photos/200?random=2"/>
    `;

    outerDetails.classList.add('open');
};

const closeDetailsModal = event => {
    const isOutside = !event.target.closest('.inner_details');
    if (isOutside) {
        outerDetails.classList.remove('open');
    }
}

window.addEventListener('keydown', event => {
    if (event.key === "Escape") {
        outerDetails.classList.remove('open');
    }
});

outerDetails.addEventListener('click', closeDetailsModal);
// const dishForm = document.querySelector('.select-form');
// dishForm.addEventListener('change', ($event) => {
// musicResult.textContent = $event.target.value;
// });
// musicResult.textContent = dropDownMenu.value;



const submitOrder = document.querySelector('.submitOrder');
const buttonDetails = document.querySelector('.details');
console.log(buttonDetails);
submitOrder.addEventListener('click', addAnOrder);
buttonDetails.addEventListener('click', detailsButtonClick);

