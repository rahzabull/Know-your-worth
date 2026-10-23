// Face finder for group photos. face-api.js runs on the page's own TensorFlow.js (see the import map).
import * as faceapi from "./face-api.js";
let ready = null;
export async function detect(img) {
  if (!ready) ready = faceapi.nets.tinyFaceDetector.loadFromUri(new URL("../face/", import.meta.url).href);
  await ready;
  const found = await faceapi.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions({ inputSize: 416, scoreThreshold: 0.55 }));
  return found.map(d => ({ x: d.box.x, y: d.box.y, width: d.box.width, height: d.box.height }));
}
