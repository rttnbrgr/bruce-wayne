function addSvgStack() {
  //do work
  const svgFillEl = document.getElementById("svgFill");
  const svgFillMarkup = svgFillEl.outerHTML;
  const svgStrokeEl = document.getElementById("svgStroke");
  console.log("svgStrokeEl", svgStrokeEl);
  const svgStrokeEl2 = document.querySelector(".svg--stroke");
  console.log("svgStrokeEl2", svgStrokeEl2);

  const svgStrokeMarkup = svgStrokeEl2.outerHTML;
  for (let i = 0; i < 3; i++) {
    svgStrokeEl2.insertAdjacentHTML("afterend", svgStrokeMarkup);
  }

  const bucket2 = document.querySelectorAll(".svg-bucket")[1];
  for (let i = 0; i < 4; i++) {
    bucket2.insertAdjacentHTML("beforeend", svgStrokeMarkup);
  }
  bucket2.insertAdjacentHTML("beforeend", svgFillMarkup);
}

function positionSvgStack() {
  // Selectors
  const svgBucket = document.querySelector(".svg-bucket");
  const svgBucketRect = svgBucket.getClientRects()[0];
  console.log("svgBucket", svgBucket);
  console.log("svgBucketRect", svgBucketRect);

  const pictureBox1 = document.querySelector(".picture-box--1");
  const pictureBox3 = document.querySelector(".picture-box--3");

  // get bottom value
  const pictureBox1Rect = pictureBox1.getClientRects()[0];
  console.log("pictureBox1Rect", pictureBox1Rect);
  let boxTop = pictureBox1Rect.bottom + "px";

  const pictureBox3Rect = pictureBox3.getClientRects()[0];
  let boxLeft = pictureBox3Rect.right + "px";

  // Get position for the svg bucket

  // get picture bucket
  let pictureBoxRect = document
    .querySelector(".picture-box__parent")
    .getClientRects()[0];
  // let boxTop = pictureBoxRect.y + "px";
  // let boxLeft = pictureBoxRect.x + "px";

  // calculate width
  // right edge of box3, and right edge of whole box
  let boxWidth = pictureBoxRect.right - pictureBox3Rect.right;

  // calculate offset padding

  // let boxWidth = "200px";
  console.log("pictureBoxRect", pictureBoxRect);
  console.log("boxWidth", boxWidth);

  svgBucket.style.top = boxTop;
  svgBucket.style.left = boxLeft;
  svgBucket.style.width = boxWidth + "px";
  svgBucket.style.padding = "32px";

  console.log("svgBucketRect", svgBucketRect);
}

document.addEventListener("DOMContentLoaded", function (event) {
  addSvgStack();
  positionSvgStack();

  // // Selectors
  // const svgBucket = document.querySelector(".svg-bucket");
  // const svgBucketRect = svgBucket.getClientRects()[0];
  // console.log("svgBucket", svgBucket);
  // console.log("svgBucketRect", svgBucketRect);

  // const pictureBox1 = document.querySelector(".picture-box--1");
  // const pictureBox3 = document.querySelector(".picture-box--3");

  // // get bottom value
  // const pictureBox1Rect = pictureBox1.getClientRects()[0];
  // console.log("pictureBox1Rect", pictureBox1Rect);
  // let boxTop = pictureBox1Rect.bottom + "px";

  // const pictureBox3Rect = pictureBox3.getClientRects()[0];
  // let boxLeft = pictureBox3Rect.right + "px";

  // // Get position for the svg bucket

  // // get picture bucket
  // let pictureBoxRect = document
  //   .querySelector(".picture-box__parent")
  //   .getClientRects()[0];
  // // let boxTop = pictureBoxRect.y + "px";
  // // let boxLeft = pictureBoxRect.x + "px";

  // // calculate width
  // // right edge of box3, and right edge of whole box
  // let boxWidth = pictureBoxRect.right - pictureBox3Rect.right;

  // // calculate offset padding

  // // let boxWidth = "200px";
  // console.log("pictureBoxRect", pictureBoxRect);
  // console.log("boxWidth", boxWidth);

  // svgBucket.style.top = boxTop;
  // svgBucket.style.left = boxLeft;
  // svgBucket.style.width = boxWidth + "px";
  // svgBucket.style.padding = "32px";

  // console.log("svgBucketRect", svgBucketRect);

  // calculate offset padding
  let pictureBox = document.querySelector(".picture-box__parent");
  let pictureBoxRect = pictureBox.getClientRects()[0];

  const newBucketRect = document
    .querySelector(".svg-bucket")
    .getClientRects()[0];
  console.log("newBucketRect", newBucketRect);

  let verticalOffsetPadding = newBucketRect.bottom - pictureBoxRect.bottom;
  console.log("verticalOffsetPadding", verticalOffsetPadding);

  pictureBox.style.marginBottom = verticalOffsetPadding + "px";

  positionSvgStack();
});
