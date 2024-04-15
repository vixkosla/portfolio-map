let el = 0

// let container = document.querySelector('.container')
// let frameContainers = document.querySelectorAll('.frame')
let frames = document.querySelectorAll('iframe')

// let controlButton = document.querySelector('.control-button')

// console.log(container, frames, controlButton)

settings = {
  height: 0
}

// window.focus()
// window.addEventListener('blur', () => {
//     console.log(document.activeElement)

//     window.focus()
// })
let step = 10
let isOpened = -1

let controlButtonAll = document.querySelectorAll('.control-button')

// controlButtonAll.forEach(button => {
// button.addEventListener('click', function(e) {
// el = button
// })
// console.log('button click')
// isOpened *= (-1)
// })

// controlButton.addEventListener('click', function(e) {

// console.log('click event button')

// })

let pointA = 400
let pointB = 25

let loader = document.querySelector('.loading-screen')

window.addEventListener('load', e => {
  loader.classList.add('loaded')
  console.log('congratulations')
})

frames.forEach(frame => {

  // frame.loading = 'lazy'

  frame.addEventListener('load', e => {

    frame.parentNode.addEventListener('pointerdown', () => {
      // console.log('frame click')
      console.log(frame.id)

      // el = frame

      // settings.height = frame.height

      let step = 5
      // let destination

      if (frame.classList.contains('active')) {
        frame.classList.remove('active')

        // let event = new CustomEvent('pointerdown', { "detail": "Example of an event" })
        // frames.forEach(frame => frame.parentNode.dispatchEvent(event))
      } else {
        // destination = pointA
        frame.classList.add('active')
      }

      // console.log('dwedkmsk')

      // gsap.to(frame, {
      //   height: destination
      // })


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

        if (el.classList.contains('active')) {
          destination = pointA
        } else {
          destination = pointB
        }

        // console.log(el, destination)

        console.log(destination, el.id)
        gsap.to(el, {
          height: destination
        })
      })

      // elContainer = settings
    })
  })
})

function muteFrames() {
  frames.forEach(el => {
    el.style.opacity = 0.4
  })
}
// window.addEventListener('wheel', (e) => el.height++)

function animate () {
  // if (settings.height < 300) {
  // el.height = settings.height
  // }
  // console.log('hey')

  // el.height = elContainer.height
  // console.log(elContainer.height)

  requestAnimationFrame(animate)
}

animate()

// console.log(el.height)
// console.log(el)
// console.log('hey')
