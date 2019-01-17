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


  SetupLevel(1);
  
}

function StartGame()
{
  WalkToSingleModifier();
}


function WalkToSingleModifier()
{
  console.log("will tween");
//  TweenMax.to(character, 1, {pixi:{x: xPositionForOneModifier - 11 }});
 TweenMax.to(character, 0, {pixi:{tint:"purple"}});
 
}
