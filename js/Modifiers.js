
// I have divided the whole "walk" animations in two parts
// 1) Walk to Modifiers
// 2) Do the modifier
// 3) Walk to another modifier (if the level has another one)
// 4) Go to our desired character and compare if they are the same (Win and lost condition)

//this var is used to check in which modifier we are (the first of the scene, or second)
var currentModifier = 0;
var doneFirstModifier = false;

//Walk to first modifier
function WalkToSingleModifier()
{
 //we set the callback to ChooseModifier function
 TweenMax.to(character, 1, {onComplete: ChooseModifier, pixi:{x: xPositionForOneModifier}});
 
}
//Here we see which modifier is the one for this phase
function ChooseModifier()
{
    //if there is two modifiers in phase, we check if we're doing the first or the second one
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


  //If it's a resize modifier to increase size
  if(currentLevel["modifiers"][currentModifier]["type"] == "resize" && currentLevel["modifiers"][currentModifier]["size"] == 2)
  {
   DoSingleModifier("resizeUp"); 
  }
  //If it's a resize modifier to decrease size
  else if(currentLevel["modifiers"][currentModifier]["type"] == "resize" && currentLevel["modifiers"][currentModifier]["size"] == 1)
  {
   DoSingleModifier("resizeDown"); 
  }
  //If it's a resize modifier to colorize
  else if(currentLevel["modifiers"][currentModifier]["type"] == "colorize")
  {
    //Now we get the color that will modify our character
   var color = currentLevel["modifiers"][currentModifier]["color"];
   DoSingleModifier("colorize", color); 
  }
  //If it's a select modifier. Used in our last phase, user can choose between other modifiers
  else if(currentLevel["modifiers"][currentModifier]["type"] == "select")
  {
    DoSingleModifier(selectedCustomModifier, customModifierProp); 
  }
}

//Function that really does the modifier's job
function DoSingleModifier(modifier, color)
{
  switch(modifier)
  {
    case "resizeUp":
    //Call to GASP Tween max. Passing a callback to ModifierDone
    TweenMax.to(character.scale, 1, {onComplete: ModifierDone, x:4, y:4});
    break;

    case "resizeDown":
    TweenMax.to(character.scale, 1, {onComplete: ModifierDone, x:2, y:2});
    break;

    case "colorize":
    TweenMax.to(character, 0, {onComplete: ModifierDone, pixi:{tint:color}});
    break;

  }
}

//When the modifier has done his job we check if there's another modifier in the phase
// Otherwise just go to our desiredCharcter and check if we won the game or not :)
function ModifierDone()
{
    if(currentLevel["modifiers"].length == 1)
        WalkToDesiredCharacter();
    //this checks if we are in the level with 2 modifiers and have done the first one
    else if(currentLevel["modifiers"].length == 2 && doneFirstModifier == false)
    {
        WalkToSecondModifier();
    //And if we done the second modifier in a scene with 2, go to desiredCharacter then
    }else if(currentLevel["modifiers"].length == 2 && doneFirstModifier == true)
    {
        WalkToDesiredCharacter();
    }
        
}

//If there's two modifiers, after done the first we call this to go to the other
function WalkToSecondModifier()
{
    doneFirstModifier = true;
    TweenMax.to(character, 1, {onComplete: ChooseModifier, pixi: {x: xPositionForSecondModifier}});
}

//The last animation before our level come to end. Go to our desiredCharacter!
function WalkToDesiredCharacter()
{
 TweenMax.to(character, 1, {onComplete: CheckIfLevelWasSuccessfull, pixi:{x: desiredCharacter.x}});
}

//This one is called when there's two modifiers in the scene
function WalkToMultipleModifiers()
{
    doneFirstModifier = false;
    TweenMax.to(character, 1, {onComplete: ChooseModifier, pixi:{x: xPositionForFirstModifier}});

}

