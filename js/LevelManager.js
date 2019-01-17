function SetupLevel()
{
  //Subtract one to get right level (we dont want levels begining with 0)
  
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

  if(currentLevel["modifiers"].length == 1)
  {
    if(currentLevel["modifiers"][0]["type"] == "resize")
    {
        if(currentLevel["modifiers"][0]["size"] == 2)
            CreateLevelWithOneModifier('resizeUp');
        else
            CreateLevelWithOneModifier('resizeDown');
    }else
    {
        var color = currentLevel["modifiers"][0]["color"];
        CreateLevelWithOneModifier('colorize', color);
    }
        
  }else
  {
    var first = currentLevel["modifiers"][0]["type"];
    var second = currentLevel["modifiers"][1]["type"];
    var firstProp;
    var secondProp;

    if(first == "resize")
    {
        if(currentLevel["modifiers"][0]["size"] == 2)
            first = "resizeUp";
        else
            first = "resizeDown";
    }else if(first == "colorize")
    {
        firstProp = currentLevel["modifiers"][0]["color"];
    }

    if(second == "resize")
    {
        if(currentLevel["modifiers"][1]["size"] == 2)
            second = "resizeUp";
        else
            second = "resizeDown";
    }else if(second == "colorize")
    {
        secondProp = currentLevel["modifiers"][1]["color"];
    }

    
    CreateLevelWithTwoModifiers(first, second, firstProp, secondProp);
  }

}

var xPositionForOneModifier = app.renderer.view.width/ 2;

function CreateLevelWithOneModifier(modifierType, color)
{

    switch(modifierType)
    {
        case 'resizeUp':
        oneModifier = new Sprite(Resources['scaleUp'].texture);
        oneModifier.scale.set(0.5, 0.5);
        oneModifier.position.set(xPositionForOneModifier - 13, app.renderer.view.width / 2 - 13);

        break;

        case 'resizeDown':
        oneModifier = new Sprite(Resources['scaleDown'].texture);
        oneModifier.scale.set(0.5, 0.5);
        oneModifier.position.set(xPositionForOneModifier - 13, app.renderer.view.width / 2 - 13);
        break;

        case 'colorize':
        oneModifier = new PIXI.Graphics();
        oneModifier.beginFill(color);
        oneModifier.position.set(xPositionForOneModifier - 13 , app.renderer.view.width / 2 - 13);
        oneModifier.width = 20;
        console.log("one x: " + oneModifier.x);
        oneModifier.drawRect(0, 0, 25, 25);
        break;

    }
    app.stage.addChild(oneModifier);

}

var xPositionForFirstModifier = app.renderer.view.width / 2 - 50;
var xPositionForSecondModifier = app.renderer.view.width / 2 + 50;

function CreateLevelWithTwoModifiers(firstModifierType, secondModifierType, proModfier1, propModifier2)
{
    

    switch(firstModifierType)
    {
        case 'resizeUp':
        firstModifier = new Sprite(Resources['scaleUp'].texture);
        firstModifier.scale.set(0.5, 0.5);
        firstModifier.position.set(xPositionForFirstModifier - 13, app.renderer.view.width / 2 - 13);

        break;

        case 'resizeDown':
        firstModifier = new Sprite(Resources['scaleDown'].texture);
        firstModifier.scale.set(0.5, 0.5);
        firstModifier.position.set(xPositionForFirstModifier - 13, app.renderer.view.width / 2 - 13);
        break;

        case 'colorize':
        firstModifier = new PIXI.Graphics();
        firstModifier.beginFill(proModfier1);
        firstModifier.position.set(xPositionForFirstModifier - 13 ,app.renderer.view.width / 2 - 13);
        firstModifier.width = 20;
        firstModifier.drawRect(0, 0, 25, 25);
        break;

    }

    switch(secondModifierType)
    {
        case 'resizeUp':
        secondModifier = new Sprite(Resources['scaleUp'].texture);
        secondModifier.scale.set(0.5, 0.5);
        secondModifier.position.set(xPositionForSecondModifier - secondModifier.width / 2, app.renderer.view.width / 2 - secondModifier.width / 2);

        break;

        case 'resizeDown':
        secondModifier = new Sprite(Resources['scaleDown'].texture);
        secondModifier.scale.set(0.5, 0.5);
        secondModifier.position.set(xPositionForSecondModifier - secondModifier.width / 2, app.renderer.view.width / 2 - secondModifier.width / 2);
        break;

        case 'colorize':
        secondModifier = new PIXI.Graphics();
        secondModifier.beginFill(propModifier2);
        secondModifier.position.set(xPositionForSecondModifier - 13 , app.renderer.view.width / 2 - 13);
        secondModifier.width = 20;
        secondModifier.drawRect(0, 0, 25, 25);
        break;

    }

    app.stage.addChild(firstModifier);
    app.stage.addChild(secondModifier);

}

function MoveToFirstPart()
{
    TweenLite.to(character, {rigth: 50});
}


function CheckIfLevelWasSuccessfull()
{
    console.log("character tint " + character.tint);
    console.log("desired tint " + desiredCharacter.tint);
    console.log("character width " + character.width);
    console.log("desired width " + desiredCharacter.width);
    console.log("character heigth " + character.height);
    console.log("desired heigth " + desiredCharacter.height);
    if(character.tint == desiredCharacter.tint && character.width == desiredCharacter.width &&
        character.height == desiredCharacter.height)
    {
        console.log("WIN LEVEL");
        //WinLevel();
    }
}
