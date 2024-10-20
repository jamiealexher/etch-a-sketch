const container = document.querySelector(".container");
const resetButton = document.querySelector("button");

const gridCreate = (boxNumber) => {

    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");


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
        wrapper.appendChild(row);
    }
    container.appendChild(wrapper);

}

resetButton.addEventListener("click", () => {
    let userSize = Number(prompt("What dimensions do you want the grid to be?"));

    while (userSize > 100) {
        userSize = Number(prompt("Pick a number equal to or less than 100"));
    };

    const wrapper = document.querySelector('.wrapper')

    if (!wrapper) {
        gridCreate(userSize);
    } else {
        wrapper.remove();
        gridCreate(userSize);
    };
});

