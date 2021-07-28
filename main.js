 noseX = 0;
 noseY = 0;
 function preload() {
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-14;
        noseY = results[0].pose.nose.y+5;
        console.log("nose x = "+ noseX);
        console.log("nose y = "+ noseY);
    
    }
}
function modelLoaded() {
    console.log('PoseNet is Initialized');
}
function draw() {
    image(video,0,0,300,300);
    image(mustache, noseX,noseY,30,30);
    fill(255,0,0);
    stroke(255,0,0);
    
}
function take_snapshot() {
    save('myFilterImage.png');
}