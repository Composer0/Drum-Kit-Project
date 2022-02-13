var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// don't add () inside of the eventListner becuase a () is a method call. Adding the method call makes it occur immediately becuase it is acting before it is called. Passing a function as an input so that it can be called at a later time.
for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    // (input1, input2) input1 is what input in being listened for while input2 is what event should occur upon fulfilling prerequisite.
    function handleClick() {
        // this.style.color = "white";
        // if you already know that the correct item is being selected, then remove console log. 'this' is considered item1. style.color = "white" is considered item2. After this. you must include a period as seen about as it won't work otherwise.
        var buttonInnerHTML = this.innerHTML;

        keyWasPressed(buttonInnerHTML);
    }
}


// in JavaScript Events like "keydown" are always written in lowercase.
document.addEventListener("keydown", function(event) {

    keyWasPressed(event.key);

});

function keyWasPressed(key) {
    switch (buttonInnerHTML) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var bass = new Audio('sounds/kick-bass.mp3');
            bass.play();
            break;

        default:
            console.log(buttonInnerHTML);
    }
}
// keydown instead of keypress//

// called by the object that logged the click.

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

//.classList had to be removed from initial variable in order for setTimeout to work appropriately.