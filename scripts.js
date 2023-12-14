document.addEventListener('DOMContentLoaded', function () {
    var text = "Visiometrica: coming soon.";
    var i = 0;
    var speed = 150; // Speed in milliseconds

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("message").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});