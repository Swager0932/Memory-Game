const tilesHolder = document.querySelector('.tiles');
const colors = ["crimson",'gold',"chartreuse",'blue',"pink",'cyan',"orange", 'grey'];
const colorPicker = [...colors, ...colors];
const tileNumber = colorPicker.length

// Game Logic
let revealed = 0
let activeTile = null
let waitEndMove = false



function buildTile(color){
    const element = document.createElement("div");

    element.classList.add("tile")
    element.setAttribute("data-color", color)
    element.setAttribute("data-revealed","false")

    element.addEventListener("click", () => {
        if(waitEndMove){
            return;
        }

        element.style.backgroundColor = color;

        if(!activeTile){
            activeTile = element
            return;
        }

        const doItMatch = activeTile.getAttribute("data-color")
        
        if(color === doItMatch){
            waitEndMove = false
            activeTile = null
            revealed += 2
            element.getAttribute("data-revealed") = true
            if(revealed === tileNumber){
                alert ("aii nigga u won")
            }
            return;
        }

        waitEndMove = true;
        
        setTimeout(() => {
            element.style.backgroundColor = null;
            activeTile.style.backgroundColor = null;

            waitEndMove = false
            activeTile = null
        }, 1000 )
        
    });

    return element;
}

// Building Tiles
for (let i = 0; i < tileNumber; i++) {
    let randomIndex = Math.floor(Math.random() * colorPicker.length);
    const color = colorPicker[randomIndex]

    const newTile = buildTile(color)

    colorPicker.splice(randomIndex, 1)
    tilesHolder.appendChild(newTile)
}

// 