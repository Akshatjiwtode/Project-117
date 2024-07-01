dog = 0;
cat = 0;


function startClassification(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
  }
    function gotResults(error,results){
        if(error){
            console.error(error);
        }

        else{
            console.log(results);
            red = Math.floor(Math.random()* 225) + 1;
            green = Math.floor(Math.random()* 225) + 1;
            blue = Math.floor(Math.random()* 225) + 1;

            document.getElementById("result_counter").innerHTML = "Dog Detected: "+dog+" Cat Detected: "+ cat;
            document.getElementById("i_hear").innerHTML = "I hear the voice of: "+ results[0].label;
            document.getElementById("result_counter").style.color = "rgb("+red+","+green+","+blue+")";
            document.getElementById("i_hear").style.color = "rgb("+red+","+green+","+blue+")";

            img = document.getElementById("listen");

            if(results[0].label == "Barking"){
                img.src = "bark.gif";
                dog = dog+1;
            }
            else if(results[0].label == "Meowing"){
                img.src = "meow.gif";
                cat = cat+1;
            }
            else{
                img.src = "listen.gif";
            }
        }
    }


