// let a = "seven"
// a = 7
// const b = 8

//String
// const str1 = 'I\'m OK'
// const str2 = "Te \nxt"
// const str3 = `I'm 
// say ${str1}`

// console.log(str1)
// console.log(str2)
// console.log(str3)

//Number
//+ - * / ** -- степень
// const num1 = 75 + 15
// const num2 = 79 * 9
// console.log(typeof "5")
// const rem = 8 * "a" //Nun
// const inf = 17 / 0 
// console.log(rem)
// от -(2**53 - 1) до (2**53-1)
//console.log(9999999999999999999)


//BIGINT
// const bigint = 10324565765454n
// console.log(bigint)

//BOOLEAN
// true / false
//> < >= <= == ===
// const bool = "a" > "8"
// console.log(bool)


//NULL
// let empty = null
// console.log(empty ,typeof empty)

//UNDERFINED
// let box = undefined
// console.log(box, typeof box)

//SYMBOL
//уникальные
// const uniq = Symbol('id')
// const uniq2 = Symbol('id')
// console.log(uniq == uniq2) // false

//OBJECT
// const obj = {
//     name: "Sasha",
//     age: 25,
//     isHappy: true,
// }
// console.log(obj.name)
// console.log(obj['name'])

// obj.job = "Google"
// console.log(obj)

// const array = ["Анна", 18, false]
// array[3] = "Facebook"

// console.log(array)
// console.log(array[0])

// const variant = "option1"
// console.log(5 == "5")
// console.log(5 === "5")
// console.log("a" > 15)
// console.log(null == 0)
// null >=0 null <= 0
// underfined  always false underfined == null

//Приведение типов
// typeof Number("15")
// typeof +"15"
// +"abc" = NaN
// typeof String(15)
// 15 + ""
// Boolean(15) => true
// Boolean(-15) => true
// Boolean(0) => false
// Boolean(null) = > false

// !true = false
// !"" = "gslkgj"
// !"jhgkjg" = ""
// !!"jgjg" = Boolean (true)

// const userName = prompt("Who you are?", "anonim")

// if (userName === "admin") {
//     alert("Hello Boss!")
// } else if (userName === "anonim" || !userName) {
//     alert("I don`t know you..")
// }
// else {
//     alert(`Hi ${userName}`)
// }

//"asd" || 0 возвращает первое правдивое или последнее

// const counts = prompt("До скольки вы хотите досчитать", 10)
// let i = 10
// while (i <= counts) {
//     console.log(i++)
//     // i += 1
//     // i++
// }

// do {
//     console.log(i++)
// } while (i <= counts)

// console.log(i)

// const arr = []

// for (let i = 1; i <= 50; ++i) {
// arr.push(i)
// }
// // console.log(arr)

// const newArr = []

// for (elem of arr) {
// const marker = elem % 3
//     if (!marker) {
//         newArr.push(elem)
//     }
// }
// console.log(newArr)

// const obj = {
//     name: "Sasha",
//     age: 25,
//     city: "Voronej"
// }

// for (key in obj) {
//     console.log(key, obj[key])

// }


//FUnction

//declaration
// console.log(scream(15, 10)) // можно использовать везде
// function scream(a, b) {
//     // const result = a * b
//     // alert("AAAAAAA")
//     // по умолчанию без return: inderfined
//     return a * b
// }

// // console.log(scream(15, 10))
// wowScream() // работает только после объявления функции

// //expression
// const wowScream = function() {
//     alert("WOOOOW")
// }

// // wowScream()

// //arrow

// const arrow = () => {
//     alert("arrow is in the sky")
// }
// arrow()



//ИГРА
//Нажав на кнопку НАЧАТЬ, игра запускается, генерируется задача, 
//пользователь может ввести ответ
//должна появиться кнопка ПРОВЕРИТЬ
//нажав кнпку ПРОВЕРИТЬ мы сравниваем ввод пльзователя с ответом,
//вывести результат и правильное значение, сменить кнопку на НАЧАТЬ ЗАНОВО








const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {
    // const randomNum1 = getRandomNumInRange(0, 100)
    // const randomNum2 = getRandomNumInRange(0, 100)


    // let symbol
    // if (Math.random() > 0.5) {
    //     symbol = "+"
    // }
    // else {
    //     symbol = "-"
    // }
    const symbol = (Math.random > 0.5) ? "+" : "-"
    const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    
    return task
}

const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}


const gameElement = document.getElementById("my_game").children

const title = gameElement[0]
const userTask = gameElement[1]
const userAnswer = gameElement[2]
const btnGame = gameElement[3]
const gameState = {
    taskInProcess: false,
    rightAnswer: null,
}



const startGameFunc =  () => {
    if (!gameState.taskInProcess) {
        title.innerText = "Игра началась!"
        userAnswer.value = null
        userTask.innerText = getTask()
        userAnswer.hidden = false
        btnGame.innerText = "Проверить!"
        toggleGameState()
    } else {
        const isRight = gameState.rightAnswer == userAnswer.value
        userTask.innerText = userTask.innerText + " =" + gameState.rightAnswer
        title.innerText = (isRight) ? "Вы победили!" : "Вы проиграли!"
        btnGame.innerText = "Начать заново!"
        toggleGameState()
    }
}

btnGame.addEventListener("click", startGameFunc)
userAnswer.addEventListener("keydown", (e) =>{
    if (e.key === "Enter") {
        startGameFunc()
    }
    else if (e.key === "Escape") {
        userAnswer.blur()
    }
})






const chosenEl = document.querySelectorAll(".choosed_block-container > div")
const counterEl = document.querySelector(".choosed_block span")

// const choosedState = {
//     countElements: 0,
// }

// const changeCount = (value) => {
//     choosedState.countElements += value 
//     counterEl.innerText =choosedState.countElements
// }

const choosedState = {
    countElements: 0,
    setCountValue(value) {
        this.countElements += value
        counterEl.innerText = this.countElements
    }
}

const eventFunc = (e) => {

    if (e.target.className === "") {
        e.target.className = "choosed_element"
        choosedState.setCountValue(1)
    }
    else {
        e.target.className = ""
        choosedState.setCountValue(-1)
    }
}

for (let i = 0; i < chosenEl.length; i++) {
    chosenEl[i].addEventListener("click", eventFunc)
}
chosenEl[2].removeEventListener("click", eventFunc)


