import Phaser from "phaser";

export default class DebugScene extends Phaser.Scene {
  constructor() {
    super("Debug");
  }

  text: Phaser.GameObjects.Text;

  create() {
    this.text = this.add.text(10, 10, "Debug", {
      fontFamily: "Arial",
      fontSize: "20px",
      color: "#FFF",
    });
  }

  update(time) {
    const pointer = this.input.activePointer;

    this.text.setText(["x: " + pointer.x, "y: " + pointer.y]);
  }
}
