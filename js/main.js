PIXI.utils.sayHello();

//Create a Pixi Application
let app = new PIXI.Application({ 
  width: 512,         // default: 800
  height: 512,        // default: 600
  antialias: true,    // default: false
  transparent: true, // default: false
  resolution: 1       // default: 1
});

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

//Create a Pixi Application
// var renderer = new PIXI.autoDetectRenderer(512, 512, 
// {
//   transparent: true, 
//   resolution: 1
// });

//Add the canvas that Pixi automatically created for you to the HTML document
// document.getElementById('display').appendChild(renderer.view);

//Alias
let Loader = PIXI.loader;
let Container = PIXI.Container;
let Resources = Loader.resources;
let Sprite = PIXI.Sprite;

var stage = new Container();

//Game Variables
var character = new PIXI.Sprite();
var squareTexture =  new PIXI.Graphics();
var desiredCharacter = new PIXI.Sprite();

var oneModifier = new PIXI.Sprite();
var firstModifier = new PIXI.Sprite();
var secondModifier = new PIXI.Sprite();

var levels;
var currentLevel;
var currentIndex;

Loader
  .add('levels', 'json/levels.json')
  .add('scaleUp','images/scaleUp.png')
  .add('scaleDown', 'images/scaleDown.png')
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

  //firstLevel
  currentIndex = 0;
  currentLevel  = levels[currentIndex];
  SetupLevel();
  
}

function StartGame()
{
  WalkToSingleModifier();
}


function WalkToSingleModifier()
{
 console.log("will tween");
 TweenMax.to(character, 1, {onComplete: ChooseModifier, pixi:{x: xPositionForOneModifier}});
 
}
function ChooseModifier()
{
  console.log("do single modifier");
  console.log("modifier type: " + currentLevel["modifiers"][0]["type"]);
  if(currentLevel["modifiers"][0]["type"] == "resize" && currentLevel["modifiers"][0]["size"] == 2)
  {
   DoSingleModifier("resizeUp"); 
  }
  else if(currentLevel["modifiers"][0]["type"] == "resize" && currentLevel["modifiers"][0]["size"] == 1)
  {
   DoSingleModifier("resizeDown"); 
  }
  else if(currentLevel["modifiers"][0]["type"] == "colorize")
  {
   var color = currentLevel["modifiers"][0]["color"];
   DoSingleModifier("colorize", color); 
  }
}

function DoSingleModifier(modifier, color)
{
  switch(modifier)
  {
    case "resizeUp":
    console.log("Go big");
    TweenMax.to(character.scale, 1, {x:4, y:4});
    break;

    case "resizeDown":
    console.log("Go small");
    TweenMax.to(character.scale, 1, {x:0.5, y:0.5});
    break;

    case "colorize":
    console.log("Colorize!");
    TweenMax.to(character, 0, {pixi:{tint:color}});
    break;

  }
}
