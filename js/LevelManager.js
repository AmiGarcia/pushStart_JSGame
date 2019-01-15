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