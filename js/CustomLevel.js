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

    var resizeDown = new PIXI.Sprite(Resources['scaleDown'].texture);
    resizeDown.anchor.set(0.5);
    resizeDown.scale.set(0.5, 0.5);
    resizeDown.position.set( app.renderer.view.width / 2, app.renderer.view.width - 100);
    resizeDown.hitArea = new PIXI.Rectangle(0, 0, 50, 50);
    resizeDown.interactive = true;
    resizeDown.buttonMode = true;
    resizeDown.on('mouseup', ChooseResizeDown);

    var colorize = new PIXI.Sprite(PIXI.Texture.WHITE);
    colorize.tint = "0x0000ff";
    colorize.position.set( app.renderer.view.width / 2 + 150, app.renderer.view.width - 100);
    colorize.hitArea = new PIXI.Rectangle(0, 0, 50, 50);
    colorize.interactive = true;
    colorize.buttonMode = true;
    colorize.on('mouseup', ChooseColorize);

    app.stage.addChild(resizeUp);
    app.stage.addChild(resizeDown);
    app.stage.addChild(colorize);
    
}

function ChooseResizeUp()
{
    console.log("Chose resize up");
    selectedCustomModifier = "resizeUp"
    CreateLevelWithOneModifier('resizeUp');
}

function ChooseResizeDown()
{
    console.log("Chose resize down");
    selectedCustomModifier = "resizeDown"
    CreateLevelWithOneModifier('resizeDown');
}
function ChooseColorize()
{
    console.log("Chose resize down");
    selectedCustomModifier = "colorize"
    customModifierProp = "#0000ff";
    CreateLevelWithOneModifier('colorize', "#0000ff");
}