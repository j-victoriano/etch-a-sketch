//Main Container 
const mainContainer = document.querySelector(".main-container");
mainContainer.style.display = "flex";
mainContainer.style.flexDirection = "column";
mainContainer.style.justifyContent = "center";
mainContainer.style.alignItems = "center";



//Content Container
const container = document.querySelector(".content");
container.style.border = "solid 20px red";
container.style.borderRadius = "20px"
container.style.width = "640px";
container.style.height = "640px";
container.style.display = "flex";
container.style.flexWrap = "wrap";



//Square Creation
const createGrid = () => {
    const number = document.getElementById("gridSize").value;
    const size = parseInt(number);
    for (i = 0; i < size * size; i++){
        const square = document.createElement("div");
        square.classList = "block";
        square.style.height = `${640/size}px`;
        square.style.width = `${640/size}px`;
        square.style.boxSizing = "border-box";
        square.style.backgroundColor = "lightgrey";
        square.style.border = "dotted 1px black";

        container.appendChild(square);
        
        //On Hover Color Styling
        square.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = "lightblue";
        })

        square.addEventListener('mouseout', e =>{
            e.target.style.backgroundColor = "lightgrey";
        });
    };
};
// createGrid(10);

//Mouse Hovering Styling
// const block = document.querySelectorAll('.block');
// block.forEach(block => {
//     //On Hover Color Styling
//     block.addEventListener('mouseover', e => {
//         e.target.style.backgroundColor = "lightblue";
//     })

//     block.addEventListener('mouseout', e =>{
//         e.target.style.backgroundColor = "lightgrey";
//     })
//     block.addEventListener('mouseover', e=> {
//         block.addEventListener('mousemove', e => {
//         const dot = document.createElement('div');
//         dot.style.position = "absolute";
//         dot.style.top = `${e.clientY}px`;
//         // console.log("Client Y: ", e.clientY);
//         dot.style.left = `${e.clientX}px`;
//         // console.log("Client X: ", e.clientY);
//         dot.style.backgroundColor = "red";
//         dot.style.width = "3px";
//         dot.style.height = "3px";
//         block.appendChild(dot);
//         });
//     });
// })
