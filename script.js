Geometric calculator:

// Triangle area: base * height / 2
// Rectangle area: base * height
// Square area: side²
// Trapeze area: (major base + minor base) * height / 2
// Circle area: pi * radius² (considering pi = 3.14)

function calculateTriangleArea() {
    const base = prompt('Enter the base of the triangle:')
    const height = prompt('Enter the height of the triangle:')

    return (base * height) / 2
}

function calculateRectangleArea() {
    const base = prompt('Enter the base of the rectangle:')
    const height = prompt('Enter the height of the rectangle:')

    return (base * height)
}

function calculateSquareArea() {
    const side = prompt('Enter the side of the square:')

    return (side * side)
}

function calculateTrapezeArea() {
    const majorBase = parseFloat(prompt('Enter the major base of the trapeze:'))
    const minorBase = parseFloat(prompt('Enter the minor base of the trapeze:'))
    const height = parseFloat(prompt('Enter the height of the trapeze:'))

    return ((majorBase + minorBase) * height) / 2
}

function calculateCircleArea() {
    const radius = prompt('Enter the radius of the circle:')

    return (3.14 * radius * radius)
}

function showMenu() {
    return prompt(
        'Geometric calculator\n' +
        '1. Calculate the area of the triangle\n' +
        '2. Calculate the area of the rectangle\n' +
        '3. Calculate the area of the square\n' +
        '4. Calculate the area of the trapeze\n' +
        '5. Calculate the area of the circle\n' +
        '6. Exit\n'
    )
}

function run() {
    let option = ''

    do {
        option = showMenu()
        let result 

        switch (option) {
            case '1':
                result = calculateTriangleArea()
                break

            case '2':
                result = calculateRectangleArea()
                break

            case '3':
                result = calculateSquareArea()
                break

            case '4':
                result = calculateTrapezeArea()
                break

            case '5':
                result = calculateCircleArea()
                break

            case '6':
                alert('Leaving...')
                break

            default:
                alert('Invalid option!!!')
                break
        }

        if(result) {
            alert(`The value of the area is: ${result} m².`)
        }
        
    } while (option !== '6');
}

run()
