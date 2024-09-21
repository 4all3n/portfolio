// // Get the element with the id "zoom"
const zoomElement = document.getElementById('zoom');
// Get the elements with the class "detail" and "pic"
const detailElements = document.querySelectorAll('.detail');
const picElements = document.querySelectorAll('.pic');

// Add an event listener to the window's scroll event
window.addEventListener('scroll', () => {
  // Calculate the zoom effect based on the scroll position
  const zoomFactor = window.scrollY / (zoomElement.offsetHeight + window.innerHeight);

  // Calculate the opacity of the .detail and .pic elements
//   const opacity = 1 - (zoomFactor * 2);

//   // Set the opacity of the .detail and .pic elements
//   detailElements.forEach((element) => {
//     element.style.opacity = opacity;
//   });

//   picElements.forEach((element) => {
//     element.style.opacity = opacity;
//   });

  // Set the background-size property of the #zoom element
  zoomElement.style.backgroundSize = `calc(100% + ${zoomFactor * 40}%) auto`;
});



