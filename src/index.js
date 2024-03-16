
var drums = document.querySelectorAll(".drum")
for (let i=0; i<drums.length; i++)
{
    drums[i].addEventListener("click", function (){
        keyPress(this.innerHTML);
    })
}

document.addEventListener("keydown", function(event){
    keyPress(event.key);
})

function keyPress(letter)
{
    switch (letter) {
        case "w":
            playSound("tom-1");
            break;
        case "a":
            playSound("tom-2");
            break;
        case "s":
            playSound("tom-3");
            break;
        case "d":
            playSound("tom-4");
            break;
        case "j":
            playSound("snare");
            break;
        case "k":
            playSound("crash");
            break;
        case "l":
            playSound("kick-bass");
            break;
        default:
            console.log("Unknown key!")
            break;
    }
}

function playSound(name)
{
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}