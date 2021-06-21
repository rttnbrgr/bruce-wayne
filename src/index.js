const foo = () => {
  console.log("fooo 👋");
};

foo();

["foo", "bar"].map(x => {
  console.log(`👀 ${x}`);
});

document.addEventListener("DOMContentLoaded", function (event) {
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
});
