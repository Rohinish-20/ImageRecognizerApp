Webcam.set(
 {
  width: 350,
  height: 300,
  image_format: "jpg",
  jpg_quality: 150
 }   
);

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot()
{
 Webcam.snap(function(data_uri){
  document.getElementById("image").innerHTML = '<img id="snapshot" src="'+data_uri+'"/>';
 });
}

console.log("ML5 Version", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Pjo9QzAlH/model.json', modelLoaded);

function modelLoaded()
{
 console.log("Model is loaded");
}

function check()
{
 image_checker = document.getElementById("snapshot");
 classifier.classify(image_checker, gotResult);
}

function gotResult(error, results)
{
 if(error)
 {
  console.error(error);
 }
 else
 {
  console.log(results);

  document.getElementById("object_name").innerHTML = results[0].label;
  document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(3);
 }
}