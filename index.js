const buttons = document.querySelectorAll(".button");
const startVideoButton = document.querySelector("#startVideo")
const stopButton = document.querySelector("#stopVideo")
const videoList = document.querySelector("#video-list");

let mediaRecorder = null;
let chunks = [];

if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
  alert("Your browser does not support recording!");
}

startVideoButton.addEventListener("click", recordVideo);
stopButton.addEventListener("click", stopRecording)

function recordVideo() {
  console.log("record video started");

  navigator.mediaDevices
    .getUserMedia({
      video: true,
    })
    .then((stream) => {
      stopButton.disabled = false;

      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = (e) => {
        console.log("record video", e.data);
        chunks.push(e.data);
      };
      mediaRecorder.onstop = (e) => {
        console.log("record screen stopped");
        createMediaElement("video", "video/mp4", videoList);
      };
      mediaRecorder.onerror = (e) => {
        console.log(e.error);
      };
      mediaRecorder.start(1000);
    })
    .catch((err) => {
      alert(`The following error occurred: ${err}`);
    });
}

function stopRecording() {
  stopButton.disabled = true;
  startVideoButton.disabled = false;
  mediaRecorder.stop();
}

function createMediaElement(mediaType, fileType, placeToAdd) {
  const blob = new Blob(chunks, {
    type: fileType,
  });

  const mediaURL = window.URL.createObjectURL(blob);
  console.log("mediaUrl", mediaURL);
  const element = document.createElement(mediaType);
  element.setAttribute("controls", "");
  element.src = mediaURL;
  placeToAdd.insertBefore(element, placeToAdd.firstElementChild);
  mediaRecorder = null;
  chunks = [];

  stopButton.disabled = true;
  startVideoButton.disabled = false;
}
