let seleBox = document.querySelectorAll(".boxex")
let scoreBox = document.querySelector(".scoreBoard")
let emptyArray = []
console.log(emptyArray)
// emptyArray.append(selectedElement)

let score = 0


let checkCorrect = blinkAfter()

function randomNum() {
    // let randomNumber = Math.floor(Math.random() * 4);
    let randomNumber = 0
    // console.log(randomNumber)
    let arrayNoden = Array.from(seleBox)
    let newSelect = arrayNoden[randomNumber]
    console.log(newSelect)
    return newSelect

}
function returnArray(selectedElement) {
    emptyArray.push(selectedElement)
    // console.log(emptyArray)
    return emptyArray
}
function blinkAfter() {
    let selectedElement = randomNum();

    console.log(selectedElement)

    returnArray(selectedElement)
    // let emptyArray = []

    console.log(selectedElement)
    // removeAni(selectedElement);
    selectedElement.classList.add("animated")


    // console.log(selectedElement)
    // removeAni(selectedElement)
    // console.log(selectedElement)
    return selectedElement


}
// console.log(seleBox)
seleBox.forEach(element => {

    element.addEventListener("click", () => {
        console.log(emptyArray)
        removeAni(checkCorrect);
        // console.log(emptyArray)



        if (checkCorrect === element) {

            // console.log("happy")
            score += 1
            console.log(score)
            scoreBox.innerText = "Score: " + score;
            // removeAni(checkCorrect);

            checkCorrect = blinkAfter();
        } else {
            scoreBox.style.fontSize = "3rem";
            scoreBox.style.height = "120px"
            scoreBox.innerText = "Sorry! you are out";
            let wholeBoxElements = document.querySelectorAll(".wholebox");
            // removeAni(checkCorr`ect);
            wholeBoxElements.forEach(element => {
                element.style.pointerEvents = "none"; // Set pointer-events to "none" for each wholebox element
            });

        }

    })
})

function removeAni(selectedElement) {
    console.log(selectedElement)
    if (selectedElement.classList.contains("animated")) {
        selectedElement.classList.remove("animated")
        console.log(selectedElement)
    }

}

