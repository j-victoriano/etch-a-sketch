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


//Grid Clearing
const resetGrid = () => {
    let grid = document.querySelector('#grid');
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    };
};

//Square Creation
const createGrid = () => {
    // let grid = document.querySelector('#grid');
    // while(grid.firstChild){
    //     grid.removeChild(grid.firstChild);
    // };
    resetGrid();
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
        // square.addEventListener('mouseover', e => {
        //     e.target.style.backgroundColor = "black";
        // })
        // square.addEventListener('mouseout', e =>{
        //     e.target.style.backgroundColor = "lightgrey";
        // });
        square.addEventListener('mouseover', e => {
            if(useBlack){
                e.target.style.backgroundColor = "black";
            } else {
                e.target.style.backgroundColor = randomColor();
            }
        });
    };
};


let useBlack = true;
//Random Color 
const randomColor = () => {
    let color = "#";
    let char = "0123456789abcdef";
    for(let i=0; i < 6; i++){
        color += char[Math.floor(Math.random() * 16)];
    }
    return color;
};

const blackBtn = document.createElement('button');
blackBtn.textContent = "Black Drawing";
blackBtn.classList = "blackBtn";
blackBtn.addEventListener('click', e => {
    useBlack = true;
    console.log("Drawing in black?: ",useBlack);
});


const rainbowBtn = document.createElement('button');
rainbowBtn.textContent = "Rainbow Drawing";
rainbowBtn.classList = "rainbowBtn";
rainbowBtn.addEventListener('click', e => {
    useBlack = false;
    console.log("Drawing in black?: ",useBlack);
})

const header = document.querySelector(".header");
header.appendChild(blackBtn);
header.appendChild(rainbowBtn);



