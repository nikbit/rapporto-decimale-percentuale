let num = 0
let den = 0
input.onButtonPressed(Button.A, function () {
    num = randint(1, 10)
    den = randint(11, 20)
    basic.showNumber(num)
    basic.showString("/")
    basic.showNumber(den)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(num / den * 100)
    basic.showString("%")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(num / den)
})
