export default function identifyBox(event) {
    var container = document.getElementById("img");
    var containerRect = container.getBoundingClientRect();
    var x = event.clientX - containerRect.left;
    var y = event.clientY - containerRect.top;

    var boxesPerRow = 9;
    var boxesPerColumn = 12;

    var boxWidth = container.offsetWidth / boxesPerRow;
    var boxHeight = container.offsetHeight / boxesPerColumn;

    var row = Math.floor(y / boxHeight) + 1;
    var column = Math.floor(x / boxWidth) + 1;
    var boxIndex = (row - 1) * boxesPerRow + column;

    return { boxIndex, row: 13 - row, column }
  }