noseX = 0;
noseY = 0;

function preload() {
    mustache = loadImage("https://i.postimg.cc/m2jDNLQC/mustache-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,300);
    video.center();
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded() {
    console.log("PoseNet has turned on");
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);
        noseX = result[0].pose.nose.x-38;
        noseY = result[0].pose.nose.y-8;
    }
}

function draw() {
    image(video,0,0,400,300);
    image(mustache,noseX,noseY,80,60);
}

function take_snapshot() {
    save("mustache.png");
}