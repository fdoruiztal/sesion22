input.onButtonPressed(Button.A, function () {
    carlos.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    carlos.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    carlos.move(1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    carlos.change(LedSpriteProperty.Y, -1)
})
let carlos: game.LedSprite = null
carlos = game.createSprite(0, 2)
basic.forever(function () {
	
})
