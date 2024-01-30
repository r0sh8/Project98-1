var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    Content = event.results[0][0].transcript.toLowerCase();
    console.log(Content);
    if (Content == "selfie") {
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis; 
    WebKitCSSMatrix.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function()
    {
        img_id = "selfie1";
        take_snapshot();
        speak_data = "Taking your next Selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis)
    }, 5000);
    Webcam.attach(camera);
}

WebKitCSSMatrix.set({
    width: 360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");