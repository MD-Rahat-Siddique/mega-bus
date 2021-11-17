function ticketItem(type, isIncrease) {
    const ticketInput = document.getElementById(type + '-count');
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    };
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    };
    ticketInput.value = ticketNewCount;
    calculatePrice();
};

function calculatePrice() {
    const vipCount = getInputValue('vip');
    const economyCount = getInputValue('economy');

    const subTotal = vipCount * 150 + economyCount * 100;
    document.getElementById('sub-total').innerText = '$' + subTotal;

    const tax = subTotal * 0.1;
    document.getElementById('tax-amount').innerText = '$' + tax;

    const totalPrice = subTotal + tax;
    document.getElementById('total-price').innerText = '$' + totalPrice;
};

function getInputValue(type) {
    const typeInput = document.getElementById(type + '-count');
    const typeCount = parseInt(typeInput.value);
    return typeCount;
}

// Booking Successful/Unsuccessful Message :
function showSuccessful() {
    const bookingArea = document.getElementById('booking-area');
    bookingArea.style.display = 'none';

    const doneMessage = document.getElementById('done-message');
    doneMessage.style.display = 'block';

    setTicketsNumber();
};

function setTicketsNumber(){
    let doneVip = document.getElementById('done-vip');
    doneVip.innerText = getInputValue('vip');

    let doneEconomy = document.getElementById('done-economy');
    doneEconomy.innerText = getInputValue('economy');

    const totalPrice = document.getElementById('total-price');
    let doneTotal = document.getElementById('done-total');
    doneTotal.innerText = totalPrice.innerText;
}