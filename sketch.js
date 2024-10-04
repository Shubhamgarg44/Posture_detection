let capture;
let posenet;
let singlePose;
let skeleton;
let actor_img;
let specs, smoke;

function setup() {
    createCanvas(800, 500);
    capture = createCapture(VIDEO);
    capture.hide();

    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose', recievedPoses);

    actor_img = loadImage('images/shahrukh.png')
    specs = loadImage('images/spects.png')
    smoke = loadImage('images/cigar.png')
}

function recievedPoses(poses) {
    console.log(poses);
    if (poses.length > 0) {
        singlePose = poses[0].pose;       // Get the pose data
        skeleton = poses[0].skeleton;     // Get the skeleton data
    }
}

function modelLoaded() {
    console.log('Model has loaded');
}

function draw() {
    image(capture, 0, 0);

    // Draw keypoints
    if (singlePose) {
        fill(255, 0, 0);
        for (let i = 0; i < singlePose.keypoints.length; i++) {
            let keypoint = singlePose.keypoints[i];
            if (keypoint.score > 0.2) {
                ellipse(keypoint.position.x, keypoint.position.y, 20, 20);
            }
        }

        // Draw skeleton
        stroke(0, 255, 0); // Set the stroke color for the skeleton lines
        strokeWeight(2);    // Set line thickness
        if (skeleton) {
            for (let j = 0; j < skeleton.length; j++) {
                let partA = skeleton[j][0];  // First keypoint of the pair
                let partB = skeleton[j][1];  // Second keypoint of the pair
                line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);  // Draw line between the points
            }
            image(smoke, singlePose.nose.x-210, singlePose.nose.y+30, 200,200)

            image(specs, singlePose.nose.x-90, singlePose.nose.y-140, 200,200)
        }
    }
}
