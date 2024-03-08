from ultralytics import YOLO

#load a model
model = YOLO("yolov8.yaml")

results = model.train(data = "Czech_something.yaml",epochs = 130)
