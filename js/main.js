PIXI.utils.sayHello();

//Create a Pixi Application
var renderer = new PIXI.autoDetectRenderer(512, 512, 
{ 
  transparent: true, 
  resolution: 1
});

//Add the canvas that Pixi automatically created for you to the HTML document
document.getElementById('display').appendChild(renderer.view);

//Alias
let Loader = PIXI.loader;
let Container = PIXI.Container;

var stage = new Container();
var character = new PIXI.Graphics();
var levels;

Loader
  .add('levels', 'json/levels.json')
  .load(Setup);


function Setup()
{
  //load levels from our loader
  levels = Loader.resources.levels.data;
  console.log(JSON.stringify(levels[0]));
  console.log(JSON.stringify(levels[1]));
  var level01 = levels[0];
  console.log("level01 = " +  level01["initial"]["color"]);
  console.log(levels.length);


  
  SetupLevel(1);

  renderer.render(stage);
  
}

function SetupLevel(level)
{
  //Add one to get right level (we dont want levels begining with 0)
  var currentLevel = levels[level + 1];
  //initial color of our character
  var initialColor = currentLevel["initial"]["color"]; 
  //initial size of our character. Multiplied by 20 cause 1 it's too small for screen
  var initialSize = currentLevel["initial"]["size"] * 20; 
  //Now we can create our character for this level
  CreateCharacter(initialColor, initialSize);

}

function CreateCharacter(initialColor, initialSize)
{
  character.beginFill(initialColor);
  var y = renderer.width / 2;
  character.drawRect(10, y, initialSize, initialSize);
  //After this little setup, we can add it to stage and show it on screen
  stage.addChild(character);
}

//load an image and run the `setup` function when it's done
// PIXI.loader
//   .add("images/cat.png")
//   .load(setup);

// //This `setup` function will run when the image has loaded
// function setup() {

//   //Create the cat sprite
//   let cat = new PIXI.Sprite(PIXI.loader.resources["images/cat.png"].texture);
  
//   //Add the cat to the stage
//   app.stage.addChild(cat);
// }