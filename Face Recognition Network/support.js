const model = faceDetection.SupportedModels.MediaPipeFaceDetector;
const detectorConfig = {
  runtime: 'mediapipe', // or 'tfjs'
}
const detector = await faceDetection.createDetector(model, detectorConfig);
