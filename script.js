const index = document.getElementById('index')
let move = 0

index.addEventListener('click', e => {
    if (e.target.className = 'cell') {
        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = '0'
        move++
        check()
    }
})

