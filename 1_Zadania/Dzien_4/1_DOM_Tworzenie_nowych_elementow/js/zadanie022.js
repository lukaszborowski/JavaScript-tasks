document.addEventListener("DOMContentLoaded", function () {

    const btn = document.querySelector("#add");
    const ordId = document.querySelector("#orderId");
    const itm = document.querySelector("#item");
    const qu = document.querySelector("#quantity");
    const tab = document.querySelector("#orders");

    btn.addEventListener('click', function () {

        const newTr = document.createElement("tr");
        const liFirst = document.createElement('td');
        const liSec = document.createElement('td');
        const liThird = document.createElement('td');

            if(ordId.value === '' || itm.value === '' || qu.value === '') {

                if(ordId.value === '') {
                    ordId.style.borderColor = "red";
                } if (itm.value === '') {
                    itm.style.borderColor = 'red';
                } if(qu.value === '') {
                    qu.style.borderColor = 'red';
                }

            } else {
                
                liFirst.innerText = ordId.value;
                liSec.innerText = itm.value;
                liThird.innerText = qu.value;

                tab.appendChild(newTr);
                newTr.appendChild(liFirst);
                newTr.appendChild(liSec);
                newTr.appendChild(liThird);

            }


        itm.value = '';
        qu.value = '';
        ordId.value = '';

    });


});