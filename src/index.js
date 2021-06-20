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
  console.log("svgFillEl", svgFillEl);
  svgFillEl.insertAdjacentHTML("afterend", svgFillMarkup);
  svgFillEl.insertAdjacentHTML("afterend", svgFillMarkup);
  svgFillEl.insertAdjacentHTML("afterend", svgFillMarkup);
  svgFillEl.insertAdjacentHTML("afterend", svgFillMarkup);
});
