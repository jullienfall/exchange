var eur = document.querySelector('.eur');
var rate = document.querySelector('.rate');
var pln = document.querySelector('.pln');
var itemName = document.querySelector('.item-name');
var result;
var sum = 0;

// counting result in pln

eur.addEventListener('input', function () {
    result = eur.value * rate.innerHTML;
    result = result.toFixed(2)
    pln.innerHTML = result;
});

var list = document.querySelector('.list');
var add = document.querySelector('.add');
var total = document.querySelector('.total');
var myBest = document.getElementById('best');
var myBestSpan = document.getElementById('best-span');

function addToList() {

    // best result 

    if (result > parseFloat(myBestSpan.textContent)) {
        myBest.textContent = `${itemName.value} - EUR ${eur.value} - PLN `;
        var myResult = parseFloat(result);
        myBestSpan.textContent = myResult.toFixed(2);
    }

    // add element to list

    var li = document.createElement("li");
    li.setAttribute('class', 'item');
    li.appendChild(document.createTextNode(`${itemName.value} - EUR ${eur.value} - PLN `));
    var span = document.createElement('span');
    span.setAttribute('class', 'my-span');
    span.appendChild(document.createTextNode(`${result}`));
    li.appendChild(span);
    var i = document.createElement('i');
    i.setAttribute('class', "fa fa-times");
    li.appendChild(i);
    if (eur.value === '') {
        alert('Wpisz kwotę')
    } else {
        list.appendChild(li);
    }

    // total

    sum += parseFloat(result);
    total.innerHTML = sum.toFixed(2);

    // removing items

    i.addEventListener('click', function () {
        this.parentElement.remove();
        var removeFromSum = this.previousSibling.innerHTML;
        sum -= parseFloat(removeFromSum);
        total.innerHTML = sum.toFixed(2);
    })
}

add.addEventListener('click', addToList);