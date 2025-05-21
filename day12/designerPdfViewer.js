function designerPdfViewer(h, word) {
  let convert;
  let max = 0;
  for (let i = 0; i < word.length; i++) {
    convert = word[i].charCodeAt(0) - 97;
    if (max < h[convert]) {
      max = h[convert];
    }
  }
  return max * word.length;
}
let h = [
  1, 1, 1, 1, 2, 2, 1, 6, 3, 6, 5, 8, 9, 8, 7, 6, 5, 5, 4, 4, 2, 1, 3, 2, 4, 5,
];
let word = "book";
console.log(designerPdfViewer(h, word));
