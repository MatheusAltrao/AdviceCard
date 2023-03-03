const button = document.querySelector('button')
let production = `https://api.adviceslip.com/advice/${generateRamdonNumber()}`
const buttonDarkmode = document.querySelector('.checkbox')


fetch(production)
  .then(response => response.json())
  .then(data => {
    const id = data.slip.id
    const advice = data.slip.advice

    const title = document.querySelector('.title')
    const text = document.querySelector('.text')
    const copy = document.querySelector('.copy')
    const message = document.querySelector('.message')

    title.innerHTML = `Advice #${id}`
    text.innerHTML = ` 	&quot  ${advice} 	&quot`

    copy.addEventListener('click', () => {

      navigator.clipboard.writeText(text.innerHTML);
      message.classList.toggle('show')

    })
  })

button.addEventListener('click', () => {

  window.location.reload()
})


function generateRamdonNumber() {
  const result = Math.floor(Math.random() * 220)
  return result
}

buttonDarkmode.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})

