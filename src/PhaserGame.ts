import Phaser from "phaser";

import HelloWorldScene from "./scenes/HelloWorldScene";
import WorldScene from "./scenes/WorldScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "phaser-container",
  backgroundColor: "#282c34",
  scale: {
    //mode: Phaser.Scale.ScaleModes.RESIZE,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [WorldScene],
};

export default new Phaser.Game(config);
