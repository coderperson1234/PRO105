import cv2
import time
import math

video = cv2.VideoCapture("video.mp4")

while True:
    check,img = video.read()   

    cv2.imshow("result",img)
            
    key = cv2.waitKey(25)

    if key == 32:
        print("Stopped!")
        break


video.release()
out = cv2.VideoWriter('project.avi',cv2.VideoWriter_fourcc(DIVX),0.8, size)

