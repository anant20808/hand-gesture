Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    img_quality : 90,
})

camera=document.getElementById("camera");

Webcam.attach("camera");

function snapshot(){
   Webcam.snap(function(data_uri){
   document.getElementById("snap").innerHTML = "<img id='displayofimage' src='" + data_uri+ "'>";
   })}

console.log("ml5",ml5.version);
Classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/MnnT-xilj/model.json',modelloaded);


function modelloaded(){
    console.log('model loaded');
}
function speak(){

 var synth = window.speechSynthesis;
 speak_data_1 = "The first predection is " + prediction1;
 speak_data2 = "And the second prediction is " + prediction2;

 var utterthis = new SpeechSynthesisUtterance(speak_data_1 + speak_data2);
 synth.speak(utterthis);

}
function check(){
    img = document.getElementById("displayofimage");
    Classifier.classify(img,gotresult);
}
function gotresult(error,result){
    if(error){
        console.log(error);
    }
    if(result){
        console.log(result)

        document.getElementById("#result_emotion_name").innerHTML = result[0].label;
        document.getElementById("#result_emotion_name2").innerHTML = result[1].label;
        prediction1 = result[0].label;
        prediction2 = result[1].label;
         speak();
        if(prediction1 == "Amazing"){
            document.getElementById("emotion1").innerHTML = "&#128076;";
        }
        if(prediction1 == "Best"){
            document.getElementById("emotion1").innerHTML = "&#128077;";
        }
        if(prediction1 == "Peace"){
            document.getElementById("emotion1").innerHTML = "&#9996;" ;    
        }
        if(prediction1 == "Victory"){
            document.getElementById("emotion1").innerHTML = "&#9994;" ;}

        if(prediction2 == "Amazing"){
            document.getElementById("emotion2").innerHTML = "&#128076;";
        }
        if(prediction2 == "Best"){
            document.getElementById("emotion2").innerHTML = "&#128077;";
        }
        if(prediction2 == "Peace"){
            document.getElementById("emotion2").innerHTML = "&#9996;";
        }
        if(prediction2 == "Victory"){
            document.getElementById("emotion2").innerHTML = "&#9994;";
        }
        

    }
}