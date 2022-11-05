
function ready() {
    let domInNumber = document.querySelector('.js-in-number');

    domInNumber.addEventListener('input', function (e) {
        let current = e.currentTarget;
        let val = current.value.replace(/[^0-9\.]/g, '');
    });
}

document / addEventListener("DOMContentLoaded", ready)