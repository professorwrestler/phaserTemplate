class PreloadScene extends Phaser.Scene {
  constructor() {
    super("assets preloaded");
  }

  preload() {
    //here is where you load assets, such as our included player sprite. For example:
    //this.load.spritesheet("player", "./assets/player.png", { frameWidth: 16, frameHeight: 16});
  }

  create() {
    //tells us via the console that the scene has taken place
    console.log("Preloaded");
    //immediately starts the start game scene
    this.scene.start("game");
  }
}
