var currentModifier = 0;
var doneFirstModifier = false;

function WalkToSingleModifier()
{
 console.log("will tween");
 TweenMax.to(character, 1, {onComplete: ChooseModifier, pixi:{x: xPositionForOneModifier}});
 
}
function ChooseModifier()
{
  if(currentLevel["modifiers"].length == 2)
  {
        if(doneFirstModifier == false)
            currentModifier = 0;
        else
            currentModifier = 1;

  }else
  {
      currentModifier = 0;
  }

  console.log("do single modifier");
  console.log("modifier type: " + currentLevel["modifiers"][0]["type"]);
  if(currentLevel["modifiers"][currentModifier]["type"] == "resize" && currentLevel["modifiers"][currentModifier]["size"] == 2)
  {
   DoSingleModifier("resizeUp"); 
  }
  else if(currentLevel["modifiers"][currentModifier]["type"] == "resize" && currentLevel["modifiers"][currentModifier]["size"] == 1)
  {
   DoSingleModifier("resizeDown"); 
  }
  else if(currentLevel["modifiers"][currentModifier]["type"] == "colorize")
  {
   var color = currentLevel["modifiers"][currentModifier]["color"];
   DoSingleModifier("colorize", color); 
  }
  else if(currentLevel["modifiers"][currentModifier]["type"] == "select")
  {
    DoSingleModifier(selectedCustomModifier, customModifierProp); 
  }
}

function DoSingleModifier(modifier, color)
{
  switch(modifier)
  {
    case "resizeUp":
    console.log("Go big");
    TweenMax.to(character.scale, 1, {onComplete: ModifierDone, x:4, y:4});
    //TODO: hide modifier
    break;

    case "resizeDown":
    console.log("Go small");
    TweenMax.to(character.scale, 1, {onComplete: ModifierDone, x:2, y:2});
    //TODO: hide modifier
    break;

    case "colorize":
    console.log("Colorize!");
    TweenMax.to(character, 0, {onComplete: ModifierDone, pixi:{tint:color}});
    //TODO: hide modifier
    break;

  }
}

function ModifierDone()
{
    if(currentLevel["modifiers"].length == 1)
        WalkToDesiredCharacter();
    else if(currentLevel["modifiers"].length == 2 && doneFirstModifier == false)
    {
        WalkToSecondModifier();
    }else if(currentLevel["modifiers"].length == 2 && doneFirstModifier == true)
    {
        WalkToDesiredCharacter();
    }
        
}

function WalkToSecondModifier()
{
    console.log("will tween");
    doneFirstModifier = true;
    TweenMax.to(character, 1, {onComplete: ChooseModifier, pixi: {x: xPositionForSecondModifier}});
}


function WalkToDesiredCharacter()
{
 console.log("will tween");
 TweenMax.to(character, 1, {onComplete: CheckIfLevelWasSuccessfull, pixi:{x: desiredCharacter.x}});

}

function WalkToMultipleModifiers()
{
    console.log("will tween");
    doneFirstModifier = false;
    TweenMax.to(character, 1, {onComplete: ChooseModifier, pixi:{x: xPositionForFirstModifier}});

}

