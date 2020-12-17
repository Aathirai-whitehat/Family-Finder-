function preload(){

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Vc9g077bK/model.json",modelloaded);

}

function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,gotResult);
}

function modelloaded(){
    console.log("Model has been loaded");
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("objet name").innerHTML=results[0].label;
        document.getElementById("acuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}