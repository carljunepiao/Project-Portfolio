function on() {
	// document.getElementById("overlay").style.display = "block";
	unfade(document.getElementById("overlay"));
}

function off() {
	// document.getElementById("overlay").style.display = "none";
	fade(document.getElementById("overlay"));
}

function fade(element) {
	console.log("fade");
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 30);
}

function unfade(element) {
	console.log("unfade");
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

// $(document).ready(function() {
//     $(document.getElementById("overlay")).css('display', 'none');
//     $(document.getElementById("overlay")).fadeIn(2000);
    
//     $('a.switch').click(function(event) {
//         event.preventDefault();
//         newLocation = this.href;
//         $('body').fadeOut(2000, newpage);
//     });

//     function newpage() {
//         window.location = newLocation;
//     }

// });