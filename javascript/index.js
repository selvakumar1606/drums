var numberOfButton= document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfButton;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",handleclick );
function handleclick(){

 var buttonInnerHtml = this.innerHTML;
 switch (buttonInnerHtml) {
   case "d":
    new Audio("audio/tom-1.mp3").play();
     break;
     case "j":
      new Audio("audio/tom-2.mp3").play();
       break;
     case "k":
      new Audio("audio/tom-3.mp3").play();
       break;
       case "l":
        new Audio("audio/tom-4.mp3").play();
         break;
          case "a":
            new Audio("audio/kick-bass.mp3").play();
             break;
             case "s":
              new Audio("audio/snare.mp3").play();
               break;
case "w":
new Audio("audio/crash.mp3").play();
break;
   default:



 }


}


}
