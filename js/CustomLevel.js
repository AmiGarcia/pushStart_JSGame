function CreateCustomLevel()
{
    DrawModifiers();
}

function DrawModifiers()
{
    var resizeUp = new PIXI.Sprite(Resources['scaleUp'].texture);
    resizeUp.anchor.set(0.5);
    resizeUp.scale.set(0.5, 0.5);
    resizeUp.position.set( app.renderer.view.width / 2 - 150, app.renderer.view.width - 100);
    resizeUp.hitArea = new PIXI.Rectangle(0, 0, 50, 50);
    resizeUp.interactive = true;
    resizeUp.buttonMode = true;
    resizeUp.on('mouseup', ChooseResizeUp);

    app.stage.addChild(resizeUp);
    
}

function ChooseResizeUp()
{
    console.log("Chose resize up");
    selectedCustomModifier = "resizeUp"
    CreateLevelWithOneModifier('resizeUp');
}