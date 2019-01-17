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
  // TweenLite.to(character,1, {pixi:{scaleX:2, scaleY:1.5}});
  // TweenMax.to(character.scale, 1, {x:2, y:40});
  // TweenMax.to(stage.position, 1, { x:400 } );
  // TweenMax.to(squareTexture, 2, {pixi:{fillColor:"0x0000ff"}});

 // Without the GSAP Plugin
 TweenMax.to(character.position, 1, { x:400 } );
 //With the GSAP Plugin
 
}


// //wait until DOM is ready
// document.addEventListener("DOMContentLoaded", function(event) {  
//   console.log("DOOOOM IS READY BABE");
//   // wait until window is loaded - all images, links, css, scripts, fonts, and other media assets
//   window.addEventListener("load", function(){ 
//     console.log("EVERYTHING IS LOADED NOW");
//        // run animation code here
//        TweenMax.to(character, 2, {x:600});

//   });
// });






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