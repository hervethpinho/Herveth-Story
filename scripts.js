const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.querySelector('.numbers')

let active = 0
const total = items.length
let timer

function update(direction) {
    // remove ativo atual
    items[active].classList.remove('active')
    dots[active].classList.remove('active')

    // calcula próximo
    active += direction
    if (active >= total) active = 0
    if (active < 0) active = total - 1

    // ativa novo
    items[active].classList.add('active')
    dots[active].classList.add('active')

    // número
    numberIndicator.textContent =
        active + 1 < 10 ? '0' + (active + 1) : active + 1

    resetTimer()
}

function resetTimer() {
    clearInterval(timer)
    timer = setInterval(() => update(1), 5000)
}

// eventos
prevButton.addEventListener('click', () => update(-1))
nextButton.addEventListener('click', () => update(1))

// inicia
timer = setInterval(() => update(1), 5000)
