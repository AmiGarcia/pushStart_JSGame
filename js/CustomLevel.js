//The function that is called by LevelManager when it's time to our special stage
function CreateCustomLevel()
{
    DrawModifiers();
}

//Here we draw the icons(and buttons) of the modifiers. Let user choose!
function DrawModifiers()
{
    //Get the texture(aka image)
    var resizeUp = new PIXI.Sprite(Resources['scaleUp'].texture);
    resizeUp.anchor.set(0.5);
    resizeUp.scale.set(0.5, 0.5);
    resizeUp.position.set( app.renderer.view.width / 2 - 150, app.renderer.view.width - 100);
    resizeUp.hitArea = new PIXI.Rectangle(0, 0, 50, 50);
    resizeUp.interactive = true;
    resizeUp.buttonMode = true;
    //callback when user choose this one!
    resizeUp.on('mouseup', ChooseResizeUp);

    var resizeDown = new PIXI.Sprite(Resources['scaleDown'].texture);
    resizeDown.anchor.set(0.5);
    resizeDown.scale.set(0.5, 0.5);
    resizeDown.position.set( app.renderer.view.width / 2, app.renderer.view.width - 100);
    resizeDown.hitArea = new PIXI.Rectangle(0, 0, 50, 50);
    resizeDown.interactive = true;
    resizeDown.buttonMode = true;
    //callback when user choose this one!
    resizeDown.on('mouseup', ChooseResizeDown);

    var colorize = new PIXI.Sprite(PIXI.Texture.WHITE);
    colorize.tint = "0x0000ff";
    colorize.position.set( app.renderer.view.width / 2 + 150, app.renderer.view.width - 100);
    colorize.hitArea = new PIXI.Rectangle(0, 0, 50, 50);
    colorize.interactive = true;
    colorize.buttonMode = true;
    //callback when user choose this one!
    colorize.on('mouseup', ChooseColorize);

    //Add them to stage!
    app.stage.addChild(resizeUp);
    app.stage.addChild(resizeDown);
    app.stage.addChild(colorize);
    
}

//If user chose Resize Up, set all that we need to use it
function ChooseResizeUp()
{
    selectedCustomModifier = "resizeUp"
    CreateLevelWithOneModifier('resizeUp');
}

//If user chose Resize Down, set all that we need to use it
function ChooseResizeDown()
{
    selectedCustomModifier = "resizeDown"
    CreateLevelWithOneModifier('resizeDown');
}

//If user chose Colorize, set all that we need to use it
function ChooseColorize()
{
    selectedCustomModifier = "colorize"
    //in this case we've a custom prop, the color!
    customModifierProp = "#0000ff";
    CreateLevelWithOneModifier('colorize', "#0000ff");
}