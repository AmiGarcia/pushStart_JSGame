function SetupLevel(level)
{
  //Subtract one to get right level (we dont want levels begining with 0)
  var currentLevel = levels[level -1];
  var initial = currentLevel["initial"];
  //initial color of our character
  var initialColor = initial["color"]; 
  //initial size of our character. Multiplied by 20 cause 1 it's too small for screen
  var initialSize = initial["size"] * 20; 
  //Now we can create our character for this level
  CreateCharacter(initialColor, initialSize);

  //This is what our character has to be like, in the end of the level
  var final = currentLevel["final"];
  var finalColor = final["color"];
  var finalSize = final["size"] * 20;
  CreateDesiredCharacter(finalColor, finalSize);

}

function CreateLevelWithOneModifier(modifierType, color)
{
    var xPositionForOneModifier = renderer.width / 2;
    

    switch(modifierType)
    {
        case 'resizeUp':
        oneModifier = new Sprite(Resources['scaleUp'].texture);
        oneModifier.scale.set(0.5, 0.5);
        oneModifier.position.set(xPositionForOneModifier - 13, renderer.width / 2 - 13);

        break;

        case 'resizeDown':
        oneModifier = new Sprite(Resources['scaleDown'].texture);
        oneModifier.scale.set(0.5, 0.5);
        oneModifier.position.set(xPositionForOneModifier - 13, renderer.width / 2 - 13);
        break;

        case 'colorize':
        oneModifier = new PIXI.Graphics();
        oneModifier.beginFill(color);
        oneModifier.position.set(xPositionForOneModifier - 13 , renderer.width / 2 - 13);
        oneModifier.width = 20;
        console.log("one x: " + oneModifier.x);
        oneModifier.drawRect(0, 0, 25, 25);
        break;

    }
    stage.addChild(oneModifier);

}

function CreateLevelWithTwoModifiers(firstModifierType, secondModifierType, proModfier1, propModifier2)
{
    var xPositionForFirstModifier = renderer.width / 2 - 50;
    var xPositionForSecondModifier = renderer.width / 2 + 50;

    switch(firstModifierType)
    {
        case 'resizeUp':
        firstModifier = new Sprite(Resources['scaleUp'].texture);
        firstModifier.scale.set(0.5, 0.5);
        firstModifier.position.set(xPositionForFirstModifier - 13, renderer.width / 2 - 13);

        break;

        case 'resizeDown':
        firstModifier = new Sprite(Resources['scaleDown'].texture);
        firstModifier.scale.set(0.5, 0.5);
        firstModifier.position.set(xPositionForFirstModifier - 13, renderer.width / 2 - 13);
        break;

        case 'colorize':
        firstModifier = new PIXI.Graphics();
        firstModifier.beginFill(proModfier1);
        firstModifier.position.set(xPositionForFirstModifier - 13 , renderer.width / 2 - 13);
        firstModifier.width = 20;
        firstModifier.drawRect(0, 0, 25, 25);
        break;

    }

    switch(secondModifierType)
    {
        case 'resizeUp':
        secondModifier = new Sprite(Resources['scaleUp'].texture);
        secondModifier.scale.set(0.5, 0.5);
        secondModifier.position.set(xPositionForSecondModifier - secondModifier.width / 2, renderer.width / 2 - secondModifier.width / 2);

        break;

        case 'resizeDown':
        secondModifier = new Sprite(Resources['scaleDown'].texture);
        secondModifier.scale.set(0.5, 0.5);
        secondModifier.position.set(xPositionForSecondModifier - secondModifier.width / 2, renderer.width / 2 - secondModifier.width / 2);
        break;

        case 'colorize':
        secondModifier = new PIXI.Graphics();
        secondModifier.beginFill(propModifier2);
        secondModifier.position.set(xPositionForSecondModifier - 13 , renderer.width / 2 - 13);
        secondModifier.width = 20;
        secondModifier.drawRect(0, 0, 25, 25);
        break;

    }

    stage.addChild(firstModifier);
    stage.addChild(secondModifier);

}


// const sprite = new PIXI.Sprite(texture);
// sprite.interactive = true;
// sprite.buttonMode = true;
// const sprite = new PIXI.Sprite(texture);
// sprite.interactive = true;
// sprite.on('tap', (event) => {
//    //handle event
// });