Webcam.set
({
   width: 350,
   height:360,
   image_format : 'png',
   png_quality:90
});

  camera = document.getElementById("webcam_view");

Webcam.attach(camera);   

function capture_snapshot()
{
    Webcam.snap(function(data_url) {
      document.getElementById("result").innerHTML = '<img id="captured_img" src"'+data_url+'">'
    })
}
console.log('ml5 version: ', ml5.version);

   classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pvAbEIkmX/model.json' ,modelLoaded);