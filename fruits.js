status = "";

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload()
{
    img = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4L_ODl-QS_6A8FzeLBs-lhHAJQsml4H_mw&usqp=CAU');
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Object Detecting";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResult(error, results)
{
  if(error){
      console.log(error);
  }
    console.log(reults);
}