//Dont be rude, say hello
PIXI.utils.sayHello();

//Create a Pixi Application
let app = new PIXI.Application({ 
  width: 512,        
  height: 512,       
  antialias: true,   
  transparent: true, 
  resolution: 1       
});

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

//Alias
let Loader = PIXI.loader;
let Container = PIXI.Container;
let Resources = Loader.resources;
let Sprite = PIXI.Sprite;

var stage = new Container();

//Game Variables
var title = new PIXI.Text();

var character = new PIXI.Sprite();
var squareTexture =  new PIXI.Graphics();
var desiredCharacter = new PIXI.Sprite();

var oneModifier = new PIXI.Sprite();
var firstModifier = new PIXI.Sprite();
var secondModifier = new PIXI.Sprite();

var selectedCustomModifier;
var customModifierProp;

var levels;
var currentLevel;
var currentIndex;

//Here we are loading every resource needed
Loader
  .add('levels', 'json/levels.json')
  .add('scaleUp','images/scaleUp.png')
  .add('scaleDown', 'images/scaleDown.png')
  .load(Setup);


// When resource is loaded, we call this callback
// Here we will call every game setup and stuff
function Setup()
{
  //load levels from our loader
  levels = Loader.resources.levels.data;

  //Set current level index to zero and current level to first
  currentIndex = 0;
  currentLevel  = levels[currentIndex];
  //now that we're ready, setup level and afterwards start the game
  SetupLevel();
  
}

function StartGame()
{
  if(currentLevel["modifiers"].length == 1)
    WalkToSingleModifier();
  else
    WalkToMultipleModifiers();
}


