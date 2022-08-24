input.onLogoEvent(TouchButtonEvent.Touched, function () {
    images.createImage(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        . # # # .
        `).showImage(0)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . # . # .
        # # # # #
        . # # # .
        . . # . .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # . # #
        . # . # .
        . # # # .
        . # . # .
        # # . # #
        `)
    music.playMelody("C E G B G E C E ", 120)
    music.playMelody("D F A F D F A F ", 120)
    music.playMelody("D C D C D C D C ", 120)
    music.playMelody("F E F E F E F E ", 120)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
    basic.showLeds(`
        # . # . #
        # # # # #
        . # . # .
        # # # # #
        # . # . #
        `)
})
basic.forever(function () {
    basic.showArrow(ArrowNames.North)
})
