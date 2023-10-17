const leftContainerData = [
  "Item1",
  "Item2",
  "Item3",
  "Item4",
  "Item5",
  "Item6",
  "Item7",
  "Item8",
];

const rightContainerData = [];

const leftContainer = document.querySelector(".left-container");
const rightContainer = document.querySelector(".right-container");

(function () {
  leftContainer.innerHTML = leftContainerData
    .map((list) => {
      return `<li draggable="true" data-index=${list} class="drag-item"><h3>${list}</h3></li>`;
    })
    .join("");
})();

function generateRightUI() {
  rightContainer.innerHTML = rightContainerData
    .map((list) => {
      return `<li draggable="true" data-index=${list} class="drag-item"><h3>${list}</h3></li>`;
    })
    .join("");
}

const dragItems = document.querySelectorAll(".drag-item");
dragItems.forEach((dragItem) => {
  dragItem.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("dragItem", dragItem.dataset.index);
  });
});

rightContainer.addEventListener("drop", (e) => {
  const data = e.dataTransfer.getData("dragItem");
  rightContainerData.push(data);
  generateRightUI();
});

rightContainer.addEventListener("dragover", (e) => {
  e.preventDefault();
});
