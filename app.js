let seleBox = document.querySelectorAll(".boxex")
let scoreBox = document.querySelector(".scoreBoard")
let emptyArray = []
console.log(emptyArray)
// emptyArray.append(selectedElement)

let score = 1
let currentIndex = 0;


let checkCorrect = blinkAfter()

function removeAni(selectedElement) {
    console.log(selectedElement);

    // Add the "animated" class
    selectedElement.classList.add("animated");

    // Use setTimeout to remove the "animated" class after 250 milliseconds
    setTimeout(() => {
        selectedElement.classList.remove("animated");
    }, 1000);
}

function randomNum() {
    let randomNumber = Math.floor(Math.random() * 4);
    // let randomNumber = 2
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


    removeAni(selectedElement);
    // selectedElement.classList.add("animated")


    // console.log(selectedElement)
    // removeAni(selectedElement)
    // console.log(selectedElement)
    return selectedElement


}
// console.log(seleBox)
seleBox.forEach(element => {

    element.addEventListener("click", () => {

        console.log(emptyArray)
        console.log(emptyArray)


        if (emptyArray[currentIndex] === element) {
            console.log(emptyArray[currentIndex])



            currentIndex++;


            // Check if the sequence is complete
            if (currentIndex === emptyArray.length) {
                score++
                scoreBox.innerText = "LEVEL: " + score;

                console.log('Sequence completed successfully!');

                currentIndex = 0;

                checkCorrect = blinkAfter();
            }

        } else {
            console.log('Incorrect element clicked. Restarting sequence.');
            currentIndex = 0;
            scoreBox.style.fontSize = "3rem";
            scoreBox.style.height = "120px"
            scoreBox.innerText = "Sorry! you are out";
            let wholeBoxElements = document.querySelectorAll(".wholebox");
            // removeAni(checkCorr`ect);
            wholeBoxElements.forEach(element => {
                element.style.pointerEvents = "none"; // Set pointer-events to "none" for each wholebox element
            });
        }

        // else {


    })


})




