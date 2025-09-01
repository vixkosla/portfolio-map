
let frames = document.querySelectorAll('iframe')

let controlButtonAll = document.querySelectorAll('.control-button')

let frameHeight = window.innerHeight - (25) * 6 - (5 * 4);
// 25 - ширина полоски
// 100 

let pointA = frameHeight;
let pointB = 25

let loader = document.querySelector('.loading-screen')

window.addEventListener('load', e => {
  loader.classList.add('loaded')
  console.log('congratulations')
})

frames.forEach(frame => {

  frame.addEventListener('load', e => {

    frame.parentNode.addEventListener('pointerdown', () => {

      if (frame.classList.contains('active')) {
        frame.classList.remove('active')
      } else {
        frame.classList.add('active')
      }

      frames.forEach(el => {
        if (frame != el) {
          console.log('remove')
          el.classList.remove('active')
        } else {
          console.log('not')
        }
      })

      frames.forEach(el => {
        let destination = 0
        let display = '';

        if (el.classList.contains('active')) {
          destination = pointA
          el.style.display = 'block';
          display = 'block';
        } else {
          destination = pointB
          display = 'none';
        }

        console.log(destination, el.id)
        gsap.to(el, {
          height: destination
        }).then(() => {
          el.style.display = display;
        })
      })
    })
  })
})
