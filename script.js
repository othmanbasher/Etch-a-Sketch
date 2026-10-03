const mainContainer = document.querySelector(".mainContainer");

for (let i = 1; i < 257; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    mainContainer.appendChild(grid); 
}