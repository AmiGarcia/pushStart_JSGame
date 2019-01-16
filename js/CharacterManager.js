function CreateCharacter(initialColor, initialSize)
{
  
  //setup with the right color from json (changing from #FFFFFF to 0xFFFFFF)
  var color = initialColor.replace('#', '0x');

  var squareTexture =  new PIXI.Graphics();
  squareTexture.beginFill(color);
  squareTexture.drawRect(0, 0, initialSize, initialSize);
  
  var texture = squareTexture.generateCanvasTexture();
  character = new PIXI.Sprite(texture);

  //this is our initial position
  character.x = 100 - initialSize/2;
  character.y = renderer.width / 2 - initialSize/2;

  character.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
  character.interactive = true;
  character.buttonMode = true;

  character.on('mouseup', CharacterTap)

  //after this little setup, we can add it to stage and show it
  stage.addChild(character);

}

function CreateDesiredCharacter(finalColor, finalSize)
{
  //setup with the right color from json (changing from #FFFFFF to 0xFFFFFF)
  var color = finalColor.replace('#', '0x');

  var squareTexture =  new PIXI.Graphics();
  squareTexture.beginFill(color);
  squareTexture.drawRect(0, 0, finalSize, finalSize);
  
  var texture = squareTexture.generateCanvasTexture();
  desiredCharacter = new PIXI.Sprite(texture);

  //this is our initial position
  desiredCharacter.x = renderer.width - 100 - finalSize/2;
  desiredCharacter.y = renderer.width / 2 - finalSize/2;
  //after this little setup, we can add it to stage and show it
  stage.addChild(desiredCharacter);

}

function CharacterTap()
{
    console.log("TAP TAP ");
}
