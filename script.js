//your JS code here. If required.
const targetElement = document.getElementById("level");
// console.log(targetElement);
// console.dir(targetElement);

function getLevel(element) {
    let level = 0;

    while (element) {
        element = element.parentElement;
        level++;
    }

    return level;
}

const getDOMLevel = getLevel(targetElement);
// console.log(getDOMLevel);

alert(`The level of the element is ${getDOMLevel}`);