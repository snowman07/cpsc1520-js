let output = document.querySelector('.output');
let list = '<ul>';
let count; // count the number of list items
let items; // access to list items

// add list items
for (count = 0; count < 10; count = count + 1) {
	list = list + '<li>' + (count + 1) + '</li>';
}

list = list + '</ul>';

// display the list
output.innerHTML = list;

items = document.querySelectorAll('li');

/* `count += 1` is equivalent to `count = count + 1` */
for (count = 0; count < items.length; count += 2) {
	items[count].classList.add('stripe');

	// less efficient solution; requires count += 1
	/*
	if (count % 2 === 0) {
		items[count].classList.add('stripe');
	}
	*/
}
