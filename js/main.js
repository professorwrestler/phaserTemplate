/* this whole scene is just for establishing our game object and configuration */
class GameScene extends Phaser.Scene {
  constructor() {
    super("game");
  }

  preload() {}

  create() {
    //tells us the scene is working
    console.log("game configured");
    //immediately starts title screen scene
    this.scene.start("title");
  }

  update() {}
}

//our game config
const config = {
  type: Phaser.AUTO,
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.FIT,
    parent: "phaser-example",
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 256,
    height: 224,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  //our scene list
  scene: [PreloadScene, TitleScene, GameScene, Level1Scene],
  //below is where we store our global variables--progress variables, scores, exp, etc.
  //level1Complete: false,
};

const game = new Phaser.Game(config);
