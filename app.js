const tesseract = require("tesseract.js");
 
const config = {
  lang: "eng",
  oem: 1,
  psm: 3,
}
 
tesseract.recognize(
  'D:/JPEREZ/Pruebas/OCR/OCR/pruebita.png',
  'eng',
  { logger: m => console.log(m) }
).then(({ data: { text } }) => {
  console.log(text);
})
