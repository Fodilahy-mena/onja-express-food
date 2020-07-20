// If the add a new order if clicked, add this form
const addNewOrder = document.querySelector('.add-order');
const body = document.querySelector('body');
let formHTML = `
        <form class="wrapper__form">
            <p>Your name :</p>
            <input
                class="input-form"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name here"
                required
            />
            <p>Please select your dish :</p>
            <select name="dish" class="select-form" required>
                <option value="romazava">Romazava</option>
                <option value="koba">Koba</option>
                <option value="ravitoto">Ravitoto</option>
                <option value="mokary">Mokary</option>
                <option value="achard">Achard</option>
                <option value="masikita">Masikita</option>
                <option value="sambos">Sambos</option>
                <option value="mofo-baolina">Mofo baolina</option>
                <option value="ranonapango">Ranonapango</option>
            </select>
            <p>Please select the size of your plate :</p>
            <input type="radio" id="small" name="size" value="small" required />
            <label for="small">Small</label><br />
            <input type="radio" id="medium" name="size" value="medium" />
            <label for="medium">Medium</label><br />
            <input type="radio" id="large" name="size" value="large" />
            <label for="large">Large</label><br />
            <p>How many pieces do you want to order?</p>
            <input
                class="input-form"
                type="number"
                id="quantity"
                name="amount"
                placeholder="Enter a number here"
                required
            />
            <button class="submitOrder" type="submit">Add this order</button>
        </form>

    `;

// Access the necessary elements from html here

const divWrapper = document.querySelector('.wrapper');
const form = document.querySelector('.wrapper__form');
const divInnerWrapper = document.querySelector('.wrapper__inner');
console.log(divInnerWrapper);
console.log(addNewOrder);
// Let add the form modal

const handleAddNewOrderClick = (event) => {
    event.preventDefault();
    divWrapper.classList.add('new_order');
    divInnerWrapper.innerHTML = formHTML;
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

// Let's select some text content from form modal
// const titleFormInput = document.querySelector('.input-form');
// let title = `${titleFormInput.value}`;


//const container = document.querySelector('.container');
const addAnOrder = ($event) => {
    $event.preventDefault();
    let orderList = `
    <div class="order-list">
        <div class="order">
            <span class="title">JEROME</span>
            <button class="details">Details</button>
            <button class="served">Delete order</button>
        </div>
    </div>
    `;
}
//console.log(container);
// Details
//const outerDetails = document.querySelector('.outer_details');
//const innerDetails = document.querySelector('.inner_details');

// const radioButtons = document.querySelectorAll("[type='radio']");
// for (let i = 0; i < radioButtons.length; i++) { radioButtons[i].addEventListener('change', ($event) => {
// transportResult.textContent = $event.target.value;
// });
// }
//console.log(radioButtons);

// const detailsButtonClick = (event) => {
//     event.preventDefault();
//     details.innerHTML = `
//         <h2>${title}</h2>
//         <h3>${title}</h3>
//         <ha>${title}</h4>
//         <img src="https://picsum.photos/200?random=2"/>
//     `;

//     outerDetails.classList.add('open');
// };

// const closeDetailsModal = event => {
//     const isOutside = !event.target.closest('.inner_details');
//     if (isOutside) {
//         outerDetails.classList.remove('open');
//     }
// }

// window.addEventListener('keydown', event => {
//     if (event.key === "Escape") {
//         outerDetails.classList.remove('open');
//     }
// });

//outerDetails.addEventListener('click', closeDetailsModal);
// const dishForm = document.querySelector('.select-form');
// dishForm.addEventListener('change', ($event) => {
// musicResult.textContent = $event.target.value;
// });
// musicResult.textContent = dropDownMenu.value;



const submitOrder = document.querySelector('.submitOrder');
//const buttonDetails = document.querySelector('.details');
//console.log(buttonDetails);
submitOrder.addEventListener('click', addAnOrder);
//buttonDetails.addEventListener('click', detailsButtonClick);

