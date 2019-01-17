

function CreateCharacter(initialColor, initialSize)
{  
  //setup with the right color from json (changing from #FFFFFF to 0xFFFFFF)
  var color = initialColor.replace('#', '0x');
//   squareTexture.beginFill(color);
//   squareTexture.drawRect(0, 0, initialSize, initialSize);
  
//   var texture = squareTexture.generateCanvasTexture();
  character = new PIXI.Sprite(PIXI.Texture.WHITE);
  character.tint = color;
  character.width = initialSize;
  character.height = initialSize;
  character.anchor.set(0.5);

  //this is our initial position
  character.x = 100;
  character.y = app.renderer.view.width / 2;


  character.hitArea = new PIXI.Rectangle(0, 0, 50, 50);
  character.interactive = true;
  character.buttonMode = true;

  character.on('mouseup', CharacterTap)

  //after this little setup, we can add it to stage and show it
  app.stage.addChild(character);

}


function CreateDesiredCharacter(finalColor, finalSize)
{
  //setup with the right color from json (changing from #FFFFFF to 0xFFFFFF)
  var color = finalColor.replace('#', '0x');
  
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

function CharacterTap()
{
    console.log("TAP TAP ");
    //Start Game Here
    StartGame();
}
