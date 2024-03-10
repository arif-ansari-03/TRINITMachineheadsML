# Machineheads

## AUTOMATED ROAD DAMAGE DETECTION FOR INFRASTRUCTURE MAINTENANCE
			          MACHINE LEARNING TRACK-01

Team Members: Aryan Patil, Mohammad Arif, Shruti Vanka, Siddique Borkar
University: National Institute of Technology, Warangal.

Topic: Automated Road Damage Detection for Infrastructure Maintenance

### INTRODUCTION:

Manual inspection and maintenance of road conditions is a tedious task and requires tremendous manpower. However, availability of continuous CCTV monitoring allows for scope in improvement. 
	Our project aims to automate road damage detection using a deep neural network in an effort to improve efficiency of the process. We detect any form of road damage and classify it into one of ten categories such as Potholes and Alligator cracks. We employ the 8th version of YOLO (You Only Look Once) to train our model and utilize the data provided in annotations format. Starting off with image datasets as input, we aim to extend our code’s reach to video input, in both recorded and live formats.

#### PROJECT SUMMARY: 
	
Older Algorithms utilized selective search algorithms to reduce number of candidate region proposals to 2k per frame and introduced modifications to improve speed but their rigidity limited their accuracy. Our research hence led us to YOLO -version 8 (faster and more accurate than all previous versions) that converges its effort onto high probability parts of the image. This in turn allows for it to use a single Convolutional Network to predict bounding boxes. 
	
We compared the performance of our local CUDA environment running in tandem with an Nvidia geforce rtx 2060 GPU and a cloud-hosted Google Colab set up(providing free access to remote GPUs and TPUs) . Upon finding significant improvement between both environments, we opted the latter. Our model ran for 10 EPOCHS and spanned 20k images in its training tenure. The ultralytics library was imported to work on the same. 

We have included features to take live video stream as well as prerecorded videos as input for our model to provide real-time predictions.  Our front-end GUI (developed using a combination of HTML, CSS and JavaScript) enables users to take video input using their webcam to provide prerecorded input for the model. We also allow direct access to our system’s webcam. Our model is hence allowed to analyze the continuous media stream (video) and output a video with bounding boxes annotating the regions of probable road damage.
	However, our model has limitations. Due to lack of effective firmware, we were unable to train our model sufficiently in time for it to provide higher mean average precision. Despite our time constraint, the model shows promise with a hiking rate of detecting accurately.

## Link to Videos
[Click me](https://drive.google.com/drive/folders/1uyLuVr0s6fMYBu4QHxj2qLRpYwWhpyks)/
 
## Examples
### Predicted
<img title="a title" alt="Alt text" src="/images/download (2).png">/
### Original
<img title="a title" alt="Alt text" src="/images/download (1).png">/
### Predicted
<img title="a title" alt="Alt text" src="/images/download (5).png">/
### Original
<img title="a title" alt="Alt text" src="/images/download (6).png">/

## Evaluation of final model on validation data
<img title="a title" alt="Alt text" src="/images/valid.png">/
