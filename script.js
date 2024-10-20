const container = document.querySelector(".container");
const sizeOfGrid = 100;

const gridCreate = (boxNumber) => {
    for (let i = 0; i < boxNumber; i++) {
        const widthAndHeight = 960 / boxNumber;
        const row = document.createElement("div");
        row.classList.add("box-row");

        for (let j = 0; j < boxNumber; j++) {
            const gridBox = document.createElement("div");
            gridBox.classList.add("grid-box");
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;
            gridBox.addEventListener("mouseenter", () => {
                gridBox.style.backgroundColor = "black";
            })
            row.appendChild(gridBox)
        
        }
        container.appendChild(row);
    }

}

gridCreate(sizeOfGrid);


