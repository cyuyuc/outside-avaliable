radio.onReceivedValue(function (name, value) {
    available = value
})
let available = 0
basic.clearScreen()
radio.setGroup(11)
radio.setTransmitPower(7)
basic.forever(function () {
    if (available == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (available == 2) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showString("error")
        music.playMelody("C5 A B G A F G E ", 120)
    }
    available = 0
})
