let orders = [];

const addOrder = (ev)=>{
    ev.preventDefault(); //stop knap fra at submit default ved normal browser session
    let order = {
        navn: document.getElementById('navn').value,
        email: document.getElementById('email').value,
        dato: document.getElementById('date-input').value,
        tidspunkt: document.getElementById('time-input').value,
        antal: document.getElementById('person-input').value
    }
    orders.push(order);
    document.forms[0].reset(); //Clear formen til næste input

    //Display i console

    console.warn('added' , {orders} );

    //Gemmer til localStorage
    localStorage.setItem('orderList', JSON.stringify(orders) );
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addOrder);
});