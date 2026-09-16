$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(550, 500, 150, 10, "blue");
createPlatform(350, 400, 150, 10, "red");
createPlatform(750, 600, 150, 10, "lime"); // bright green for a finished platform
createPlatform(1000, 700, 50, 40, "pink");
createPlatform(700, 300, 150, 10, "yellow");
createPlatform(900, 200, 150, 10, "purple");
createPlatform(1100, 100, 300, 10, "orange");

    // TODO 3 - Create Collectables
createCollectable("steve", 1350, 50);
createCollectable("diamond", 400, 170, 0.5, 0.7);
createCollectable("kennedi", 800, 170, 0.5, 0.7);


    
    // TODO 4 - Create Cannons
createCannon("top", 300, 2000);
createCannon("right", 300, 3000);
createCannon("right", 750, 4000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
