// var mapClicker = document.querySelector('.map');
// var body = document.querySelector('body'); // NEW

// mapClicker.addEventListener('click', show);

// function show(e) {
//   body.classList.toggle('showme'); // NEW
//   e.preventDefault();
// }

// document.addEventListener('click', show);

// function show() {
//   console.log(event.target);
//   // 'event.target' is the clicked element
//   event.preventDefault();
// }

document.addEventListener('click', handleClicks);

function handleClicks() {
  console.log(event.target);
  if (event.target.matches('.map')) {
    document.querySelector('body').classList.toggle('showme');
    event.preventDefault();
  }
}