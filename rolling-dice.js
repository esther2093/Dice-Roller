let images1 = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", 
"images/dice6.png"]
let images2 = ["images/10-1.jpg", "images/10-2.jpg", "images/10-3.jpg", "images/10-4.jpg", "images/10-5.jpg", 
"images/10-6.jpg", "images/10-7.jpg", "images/10-8.jpg", "images/10-9.jpg", "images/10-10.jpg"]
let dice = document.querySelectorAll("img");

function roll1() {
    let randomimages = Math.floor(Math.random() * images1.length)
    let randomimageurl = images1[randomimages]
    document.getElementById('dice6').src = randomimageurl
    console.log(randomimageurl)
}

function roll2() {
    let randomimages = Math.floor(Math.random() * images2.length)
    let randomimageurl = images2[randomimages]
    document.getElementById('dice10').src = randomimageurl
    console.log(randomimageurl)
}