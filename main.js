function takesnapshot() {
    Webcam.snap(function (data) {
        document.getElementById("result").innerHTML = "<img id='pic' src='" + data + "'>"
    })
}
p1 = ""
p2 = ""



function check() {
speak()
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