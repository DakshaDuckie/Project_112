

 console.log("ml5 version:"+ml5.version);

 var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-eVRU374b/model.json", modelLoaded);
 function modelLoaded(){
     console.log("model is loaded");
 }


 Webcam.set({
    width: 300,
    height: 300,
    img_format: 'png',
    png_quality: 90,
})

var cam = document.getElementById("camera");
Webcam.attach(cam);
function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = "<img id='picture' src='"+data_uri+"'>";
    })
}

console.log("ml5 version:"+ ml5.version);

var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-eVRU374b/model.json", modelLoaded);
function modelLoaded() {
    console.log("model is loaded");
}

function check(){
    var snap = document.getElementById("picture");
    classifier.classify(snap,gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        var predict = results[0].label;
        document.getElementById("result_gesture_name").innerHTML = predict;
        if (predict == "Ok"){
            document.getElementById("result_emoji").innerHTML = '<span>&#128076</span>';
        }
        else if(predict == "Heart"){
            document.getElementById("result_emoji").innerHTML = '<span><img id="korean-heart" src="korean heart heand.png"></span>';
        }
        else if (predict == "Thumbs-up"){
            document.getElementById("result_emoji").innerHTML = '<span>&#128077</span>';
        }
        else if (predict == "Peace"){
            document.getElementById("result_emoji").innerHTML = '<span>&#9996</span>';
        }
        else if (predict == "Rock-on"){
            document.getElementById("result_emoji").innerHTML = '<span>&#129304</span>';
        }
    }
}