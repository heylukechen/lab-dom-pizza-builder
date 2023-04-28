// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const pepperoniPrice = 1;
const mushRoomPrice = 1;
const greenPeppersPrice = 1;
const whiteSourcePrice = 3;
const glutenFreePrice = 5;

const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  if (state.whiteSauce) {
    document
      .querySelector('section .sauce')
      .setAttribute('class', 'sauce-white sauce');
  } else {
    document.querySelector('section .sauce').setAttribute('class', 'sauce');
  }
}

function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
    document
      .querySelector('.crust')
      .setAttribute('class', 'crust crust-gluten-free');
  } else {
    document.querySelector('.crust').setAttribute('class', 'crust');
  }
}

function renderButtons() {
  if (state.pepperoni) {
    document.querySelector('.btn.btn-pepperoni').classList.add('active');
  } else {
    document.querySelector('.btn.btn-pepperoni').classList.remove('active');
  }

  if (state.mushrooms) {
    document.querySelector('.btn.btn-mushrooms').classList.add('active');
  } else {
    document.querySelector('.btn.btn-mushrooms').classList.remove('active');
  }

  if (state.greenPeppers) {
    document.querySelector('.btn.btn-green-peppers').classList.add('active');
  } else {
    document.querySelector('.btn.btn-green-peppers').classList.remove('active');
  }

  if (state.whiteSauce) {
    document.querySelector('.btn.btn-sauce').classList.add('active');
  } else {
    document.querySelector('.btn.btn-sauce').classList.remove('active');
  }

  if (state.glutenFreeCrust) {
    document.querySelector('.btn.btn-crust').classList.add('active');
  } else {
    document.querySelector('.btn.btn-crust').classList.remove('active');
  }
}

function renderPrice() {
  
  let priceContent = document.querySelector(
    '.panel.price span'
  ).textContent;
  console.log(priceContent);
  
  let priceLists = document.querySelector('.panel.price ul');

  if (state.pepperoni) {
    priceLists.querySelector('li:first-child').style.display = 'block';

  } else {
    priceLists.querySelector('li:first-child').style.display = 'none';
 
  }

  if (state.mushrooms) {
    priceLists.querySelector('li:nth-child(2)').style.display = 'block';
 
  } else {
    priceLists.querySelector('li:nth-child(2)').style.display = 'none';
  
  }

  if (state.greenPeppers) {
    priceLists.querySelector('li:nth-child(3)').style.display = 'block';

  } else {
    priceLists.querySelector('li:nth-child(3)').style.display = 'none';
    
  }

  if (state.whiteSauce) {
    priceLists.querySelector('li:nth-child(4)').style.display = 'block';
 
  
  } else {
    priceLists.querySelector('li:nth-child(4)').style.display = 'none';
    
  }

  if (state.glutenFreeCrust) {
    priceLists.querySelector('li:nth-child(5)').style.display = 'block'; 
  
  } else {
    priceLists.querySelector('li:nth-child(5)').style.display = 'none';

  }

  // console.log(priceLists, typeof priceLists);
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
