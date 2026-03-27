controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Evil_Caine = sprites.create(assets.image`Evil Caine`, SpriteKind.Player)
    Evil_Caine.follow(Pomni)
    Pomni.setVelocity(100, 100)
    Evil_Caine.setStayInScreen(true)
    Jax.setStayInScreen(true)
    Jax.setVelocity(50, 50)
    Jax.setBounceOnWall(true)
    Jax.setVelocity(100, 100)
    Evil_Caine.follow(Jax)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Jax = sprites.create(assets.image`Jax`, SpriteKind.Player)
    Jax.setStayInScreen(true)
})
let Jax: Sprite = null
let Evil_Caine: Sprite = null
let Pomni: Sprite = null
Pomni = sprites.create(assets.image`Pomni`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`The Stage`)
controller.moveSprite(Pomni)
Pomni.setStayInScreen(true)
Pomni.setBounceOnWall(true)
