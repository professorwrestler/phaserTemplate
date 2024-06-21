class Level1Scene extends Phaser.Scene {
  constructor() {
    super("level1");
  }

  preload() {}

  create() {
    //lets us know via the console that the scene has started
    console.log("level 1 created");
    //adds our "level 1" text to the screen
    this.add.text(100, 10, "level 1", { fontFamily: "alagard", fontSize: 16 });

    //setup WASD keys
    this.keys = this.input.keyboard.addKeys("W, A, S, D, SPACE");
  }

  update() {}
}
