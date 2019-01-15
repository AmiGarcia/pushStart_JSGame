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

Loader
  .add('levels', 'json/levels.json')
  .load(setup);


function setup()
{
  var levels = Loader.resources.levels.data;
  console.log(JSON.stringify(levels[0]));
  console.log(JSON.stringify(levels[1]));
  var level01 = levels[0];
  console.log("level01 = " +  level01["initial"]["color"]);
  console.log(levels.length);


  renderer.renderer(stage);
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