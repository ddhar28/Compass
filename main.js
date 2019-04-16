const line = document.querySelector('div')
const para = document.querySelector('p')
line.style.transform = 'rotate(45deg)'

function deviceOrientationListener (event) {
  let alpha = event.alpha
  para.innerHTML = alpha.toFixed(0)
  line.style.transform = 'rotate(' + alpha + 'deg)'
}

if (window.DeviceOrientationEvent) { // Check if device is compatible
  window.addEventListener('deviceorientation', deviceOrientationListener)
}
