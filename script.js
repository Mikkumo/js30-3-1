const index = document.getElementById('index')
let move = 0
let result = ''

index.addEventListener('click', e => {
    if (e.target.className = 'cell') {
        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = '0'
        move++
        check()
    }
})

const check = () => {
    let cells = document.getElementsByClassName('cell')
    let winPosition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    winPosition.forEach(e => {
        if (cells[e][0].innerHTML === 'X' && cells[e][1].innerHTML === 'X' && cells[e][2].innerHTML === 'X') {
            result = 'крестики'
        } else if (cells[e][0].innerHTML === '0' && cells[e][1].innerHTML === '0' && cells[e][2].innerHTML === '0') {
            result = 'нолики'
        }
    });
}