
//Create our main character: THE AMAZING SQUARE!
function CreateCharacter(initialColor, initialSize)
{  
  //setup with the right color from json (changing from #FFFFFF to 0xFFFFFF)
  var color = initialColor.replace('#', '0x');

  //create a pixi sprite with white texture, so we can paint it!
  character = new PIXI.Sprite(PIXI.Texture.WHITE);
  character.tint = color;
  character.width = initialSize;
  character.height = initialSize;
  //this anchor is very important to set up positions correctly. 0.5 means the middle of the object/sprite/anything!
  character.anchor.set(0.5);

  //this is our initial position
  character.x = 100;
  character.y = app.renderer.view.width / 2;


  //Here we set a hit area with button mode. So we can click in our character to start the game
  character.hitArea = new PIXI.Rectangle(0, 0, 50, 50);
  character.interactive = true;
  character.buttonMode = true;

  //the callback when user click in our beautifull character
  character.on('mouseup', CharacterTap)

  //after this little setup, we can add it to stage and show it
  app.stage.addChild(character);

}


function CreateDesiredCharacter(finalColor, finalSize)
{
  //setup with the right color from json (changing from #FFFFFF to 0xFFFFFF)
  var color = finalColor.replace('#', '0x');
  
  //the same for our desired character, white texture to paint it later!
  desiredCharacter = new PIXI.Sprite(PIXI.Texture.WHITE);
  desiredCharacter.tint = color;
  desiredCharacter.width = finalSize;
  desiredCharacter.height = finalSize;
  desiredCharacter.anchor.set(0.5);

  //this is our initial position
  desiredCharacter.x = app.renderer.view.width - 100;
  desiredCharacter.y = app.renderer.view.width / 2;
  //after this little setup, we can add it to stage and show it
  app.stage.addChild(desiredCharacter);

}

//The callback when user tap the character. Now start the game!
function CharacterTap()
{
    StartGame();
}
