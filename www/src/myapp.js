(function() {
    document.addEventListener('DOMContentLoaded', function() {
        // get a reference to the canvas we'll be working with:
        var canvas = document.getElementById("testCanvas");
        // set canvas width
        canvas.width = window.innerWidth;
        // set canvas height
        canvas.height = window.innerHeight;

        // create a stage object to work with the canvas. This is the top level node in the display list:
        var stage = new createjs.Stage(canvas);
        // create a new Image object
        var img = new Image();
        img.onload = function(){
            // create a new bitmap object, and set image to bitmap
            var bitmap = new createjs.Bitmap(img);
            // set bitmap x location in canvas
            bitmap.x = (canvas.width - img.width) / 2;
            // set bitmap y location in canvas
            bitmap.y = (canvas.height - img.height) / 2;
            // add the bitmap as a child of the stage. This means it will be drawn any time the stage is updated
            // and that its transformations will be relative to the stage coordinates:
            stage.addChild(bitmap);
            // call update on the stage to make it render the current display list to the canvas:
            stage.update();
        };
        // set image source
        img.src = "asset/icon.png";
    }, false);
}());