class TitleScene extends Phaser.Scene {
  constructor() {
    super("title");
  }

  preload() {}

  create() {
    //lets us know the title seen has been shown via the console
    console.log("title scene shown");
    //adds our "click to start" text
    this.add.text(100, 100, "click to start", {
      fontFamily: "alagard",
      fontSize: 16,
    });
    //this is an event listener that starts the level 1 scene after a mouse click
    this.input.on("pointerdown", () => this.scene.start("level1"));
  }
}
