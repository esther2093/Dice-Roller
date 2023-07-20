let images1 = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", 
"images/dice6.png"]
let images2 = ["images/10-1.jpg", "images/10-2.jpg", "images/10-3.jpg", "images/10-4.jpg", "images/10-5.jpg", 
"images/10-6.jpg", "images/10-7.jpg", "images/10-8.jpg", "images/10-9.jpg", "images/10-10.jpg"]
// let dice = document.querySelectorAll("img");

function roll1() {
    let randomimages = generatecode(images1.length)
    let randomimageurl = images1[randomimages]
    document.getElementById('dice6').src = randomimageurl
    console.log(randomimageurl)
}

function roll2() {
    let randomimages = generatecode(images2.length)
    let randomimageurl = images2[randomimages]
    document.getElementById('dice10').src = randomimageurl
    console.log(randomimageurl)
}

function generatecode(maximum) {
    let randomnumber = Math.floor(Math.random() * maximum)
    return randomnumber
}

if (generatecode(2) >2) {
    throw new Error ('result >2')
}

if (generatecode(10) >9) {
    throw new Error ('result >10')
}

if (generatecode(6) >6) {
    throw new Error ('result >6')
}

if (generatecode(6) <0) {
    throw new Error ('result <1')
}

if (generatecode(10) <0) {
    throw new Error ('result <1')
}