noseX= 0
noseY= 0 
function preload(){
    mustache_image=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
    canvas= createCanvas(300 , 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();

    poseNet=ml5.poseNet(video , modelLoaded);
    poseNet.on("pose" , gotPoses);
}
function gotPoses(results){
    if (results.length>0){
        noseX=results[0].pose.nose.x - 12;
        noseY=results[0].pose.nose.y;
        console.log("nose x" + noseX);
        console.log("nose y" + noseY);
    }
}

function modelLoaded(){
    console.log("model is initialized");
}
function draw(){
image(video , 0 , 0 , 300 , 300);
image(mustache_image , noseX , noseY , 25 ,25);
}

function take_snapshot(){
    save("applied filter image");
}
