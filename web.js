const shareButton = document.querySelectorAll('.share-button')
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
const textDisplay = document.getElementById("text")

const phrases = ['This is my profile website','~ Nice to meet you guys ~']
let i = 0
let j = 0
let currentPhrase = []
let isDeleting = false
let isEnd = false
function loop(){
    isEnd = false
    textDisplay.innerHTML = currentPhrase.join('')
    if(i<phrases.length){
        
        if(!isDeleting && j<=phrases[i].length){
            currentPhrase.push(phrases[i][j])
            j++
            console.log('add a letter', j)
        }
        if(isDeleting && j <=phrases[i].length){
            currentPhrase.pop(phrases[i][j])
            j--
            console.log('remove a letter', j)
        }
        if(j == phrases[i].length){
            isEnd = true
            isDeleting = true
        }
        if(isDeleting && j==0){
            currentPhrase = []
            isDeleting = false
            i++
            if(i == phrases.length){
              i = 0  
            }
        }
    }
    const spedup = Math.random() * (80-50) + 50
    const normalSpeed = Math.random() * (300-200) + 200
    const time = isEnd ? 2000 : isDeleting ? spedup: normalSpeed
    setTimeout(loop, 500)
}
function openFullImg(){
    fullImgBox.style.display = "flex";
 }
function closeFullImg(){
    fullImgBox.style.display = "none";
}
console.log(shareButton)
loop()
async function copyText(e){
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try{
        await navigator.clipboard.writeText(link)
        alert("copied the text" + link)
    } catch(err){
        console.erroe(err)
    }
}
shareButton.forEach(shareButton => shareButton.addEventListener('click',copyText))

