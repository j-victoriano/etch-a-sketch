//Main Container 
const mainContainer = document.querySelector(".main-container");
mainContainer.style.display = "flex";
mainContainer.style.flexDirection = "column";
mainContainer.style.justifyContent = "center";
mainContainer.style.alignItems = "center";



//Content Container
const container = document.querySelector(".content");
container.style.border = "solid 1px red";
container.style.width = "640px";
container.style.display = "flex";
container.style.flexWrap = "wrap";



//Square Creation
const createGrid = () => {
    for (i = 0; i < 256; i++){
        const square = document.createElement("div");
        square.style.height = "40px";
        square.style.boxSizing = "border-box";
        square.style.aspectRatio = "1/1";
        square.style.backgroundColor = "lightgrey";
        square.style.display = "flex";
        square.style.border = "dotted 1px black";
        container.appendChild(square);
    }
};
createGrid();

