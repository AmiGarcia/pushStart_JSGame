function CreateCharacter(initialColor, initialSize)
{
  //setup with the right color from json
  character.beginFill(initialColor);
  //this is our initial position
  character.x = 100 - initialSize/2;
  character.y = renderer.width / 2 - initialSize/2;
  //draw the rect
  character.drawRect(0, 0, initialSize, initialSize);
  //after this little setup, we can add it to stage and show it
  stage.addChild(character);

}

function CreateDesiredCharacter(finalColor, finalSize)
{
  //setup with the right color from json
  desiredCharacter.beginFill(finalColor);
  //this is our initial position
  desiredCharacter.x = renderer.width - 100 - finalSize/2;
  desiredCharacter.y = renderer.width / 2 - finalSize/2;
  //draw the rect
  desiredCharacter.drawRect(0, 0, finalSize, finalSize);
  //after this little setup, we can add it to stage and show it
  stage.addChild(desiredCharacter);

}
