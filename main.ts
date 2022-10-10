let clark = game.createSprite(0, 2)
let lex = game.createSprite(randint(1, 4), randint(0, 4))
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        clark.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.A)) {
        clark.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.B)) {
        clark.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    while (input.logoIsPressed()) {
        clark.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    if (clark.isTouching(lex)) {
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Yes)
            basic.pause(500)
            basic.clearScreen()
        }
        music.playMelody("C D E F G A B B ", 120)
        game.gameOver()
    }
})
