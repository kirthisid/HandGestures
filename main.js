function takesnapshot() {
    Webcam.snap(function (data) {
        document.getElementById("result").innerHTML = "<img id='pic' src='" + data + "'>"
    })
}
p1 = ""
p2 = ""




function check() {
    img = document.getElementById("pic")
    classifier.classify(img, gotresult)
}





Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
})
camera = document.getElementById("camera")
Webcam.attach("#camera")
console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/RSK47-nHF/model.json", modelLoaded)
function modelLoaded() {
    console.log("model loaded");
}

function speak() {
    synth = window.speechSynthesis
    speakdata1 = "First prediction is " + p1
    speakdata2 = "And second prediction is " + p2
    utterthis = new SpeechSynthesisUtterance(speakdata1 + speakdata2)
    synth.speak(utterthis)
}

function gotresult(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        p1 = result[0].label
        p2 = result[1].label
        document.getElementById("emotion_name1").innerHTML = p1
        document.getElementById("emotion_name2").innerHTML = p2
        speak()
        if (p1 == 'Thumbs up') {
            document.getElementById("emoji1").innerHTML="👍"

        }
        else if (p1 == 'Perfect') {
            document.getElementById("emoji1").innerHTML="👌"

        }
        else {
            document.getElementById("emoji1").innerHTML="👎"

        }if (p2 == 'Thumbs up') {
            document.getElementById("emoji2").innerHTML="👍"

        }
        else if (p2 == 'Perfect') {
            document.getElementById("emoji2").innerHTML="👌"

        }
        else {
            document.getElementById("emoji2").innerHTML="👎"

        }
    }
}





