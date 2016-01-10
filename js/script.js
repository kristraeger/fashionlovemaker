$(document).ready(function() {
        $(".fade-slow").mouseenter(function() {
            $(".fade-slow").fadeTo("fast",1);
        });
        $(".fade-slow").mouseleave(function() {
            $(".fade-slow").fadeTo("fast",0.5);
        });
    });