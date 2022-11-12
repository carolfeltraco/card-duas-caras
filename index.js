let isIgnite = true

function mudarCartao(event) {
    const card = event.currentTarget
    console.log(isIgnite)

    const bg = isIgnite ? "explorer":"ignite"
    isIgnite = !isIgnite
    
    card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
}