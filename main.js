Webcam.set(
    {
        width:350,
        height:300,
        image_format: "png",
        png_quality:90
    }
);
camera= document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img id='captured_image' src='"+data_uri+"'>";
    
    });
    
}

console.log("ml5_vesion :"+ml5.version);

Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/s_zlCBwGX/model.json",modelLoded);

function modelLoded()
{
    console.log("Model Loded");
}