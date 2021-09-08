
img = "";
statuss = "";
objects = [];
function preload()
{
    img = loadImage("fruits.jpg");
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : object detected";
}
function modelLoaded()
{
    console.log("Model Loaded");
    statuss=true;
    objectDetector.detect(img,gotResult);
}
function back()
{
    window.location="index.html";  
}
function draw()
{
    image(img,0,0,640,420);

    if(statuss != "")
    {

    for(i = 0; i < objects.length; i++)
    {
        document.getElementById("status").innerHTML="Status : object dected";
        fill("#FF0000");

        percent=floor(objects[i].confidence*100);
        text(objects[i].label + " " + percent + "%" , objects[i].x,objects[i].y);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

    }

}

}
function gotResult(error,results)
{
    if (error)
    {
        console.error(error);
    }
        console.log(results);
        objects = results;
}
