// let arrNumbers = []
// arrNumbers = document.querySelectorAll("li")
// newArr = []
// for (let number of arrNumbers) {
    // if (number.innerText % 2 == 0) newArr.push(number.innerText)
// }
// newArr.forEach(function (number, index, arr) {
    // const liElements = document.createElement("li")
    // liElements.textContent = number
    // const ulElement = document.querySelector("ul")
    // ulElement.append(liElements)
// }
// )


const createForm = document.createElement("form")
document.body.append(createForm)
const createInput = document.createElement("input")
createForm.append(createInput)

const selectElement = document.createElement("select")
createForm.append(selectElement)
selectElement.add(new Option("english", 1))
selectElement.add(new Option("spanish", 2))

const createUl = createElement('ul')
document.body.append(createUl)

function createLi () {
    const liElements = document.createElement("li")
    liElements.textContent = 'hello world'
    createUl.prepand(liElements)
    return createUl
}


   
    







