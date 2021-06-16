function startOnInput(input) {
  input.value = Math.min(input.value, input.parentNode.childNodes[5].value - 1);
  const value =
    (100 / (parseInt(input.max) - parseInt(input.min))) *
      parseInt(input.value) -
    (100 / (parseInt(input.max) - parseInt(input.min))) * parseInt(input.min);
  const children = input.parentNode.childNodes[1].childNodes;
  children[1].style.width = value + "%";
  children[5].style.left = value + "%";
  children[7].style.left = value + "%";
  children[11].style.left = value + "%";
  children[11].childNodes[1].innerHTML = new Date(
    parseInt(input.value)
  ).toLocaleString();
}

function endOnInput(input) {
  input.value = Math.max(
    input.value,
    input.parentNode.childNodes[3].value - -1
  );
  const value =
    (100 / (parseInt(input.max) - parseInt(input.min))) *
      parseInt(input.value) -
    (100 / (parseInt(input.max) - parseInt(input.min))) * parseInt(input.min);
  const children = input.parentNode.childNodes[1].childNodes;
  children[3].style.width = 100 - value + "%";
  children[5].style.right = 100 - value + "%";
  children[9].style.left = value + "%";
  children[13].style.left = value + "%";
  children[13].childNodes[1].innerHTML = new Date(
    parseInt(input.value)
  ).toLocaleString();
  console.log(input.value);
}

function intervalOnClick() {
  alert("pinchaste en intervalo!");
}

var readonly = false;
function toggleReadOnly() {
  readonly = !readonly;
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.style.display = readonly ? "none" : "block";
  });
}

var showThumbs = true;
function toggleThumbs() {
  showThumbs = !showThumbs;
  const thumbs = document.querySelectorAll("[thumb]");
  thumbs.forEach((thumb) => {
    thumb.style.display = showThumbs ? "block" : "none";
  });
}
