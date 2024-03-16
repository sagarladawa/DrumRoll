
var drums = document.querySelectorAll(".drum")
for (let i=0; i<drums.length; i++)
{
    drums[i].addEventListener("click", function (){
        alert("Clicked!")
    })
}
