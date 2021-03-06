
const divWrapper = document.querySelector('.wrapper');
const divInnerWrapper = document.querySelector('.wrapper__inner');
const addNewOrderBtn = document.querySelector('.add-order');
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

// Let add the form modal

const handleAddNewOrderClick = (event) => {
    event.preventDefault();
    divWrapper.classList.add('new_order');
    divInnerWrapper.innerHTML = formHTML;
}

addNewOrderBtn.addEventListener('click', 
    handleAddNewOrderClick);

const closeFormModal = event => {
    const isOutside = !event.target.closest('.wrapper__form');
    if (isOutside) {
        divWrapper.classList.remove('new_order');
    }
}

divWrapper.addEventListener('click', closeFormModal);

window.addEventListener('keydown', event => {
    if (event.key === "Escape") {
        divWrapper.classList.remove('new_order');
    }
});


// Let's select some text content from form modal

 
const ol = document.querySelector('.order-list');

const handleSubmit = e => {
    e.preventDefault();
    if (e.target.matches('.wrapper__form')) {
    const form = e.target;
    const { name , dish, size, amount } = form;
    const orderListHTML = `
        <div class="order" data-dish="${dish.value}" data-size="${size.value}" data-amount="${amount.value}">
            <span class="title">${name.value}</span>
            <button class="details">Details</button>
            <button class="served">Delete order</button>
        </div>
    `;
    ol.innerHTML += orderListHTML;
    
    form.reset();
    divWrapper.classList.remove('new_order');
    }
}


// ****************

const handleBtnDetails = e => {
    
}

const submitOrder = document.querySelector('.submitOrder');

window.addEventListener('submit', handleSubmit);


