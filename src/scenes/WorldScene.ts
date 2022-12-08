import Phaser from "phaser";
import characterSprite from "../assets/graphics/spritesheets/char1.png";
import tileSet from "../assets/graphics/tileset/Tileset.png";
import MapJson from "../assets/maps/main.json";

export default class WorldScene extends Phaser.Scene {
  constructor() {
    super("world");
  }

  preload() {
    this.load.spritesheet({
      key: "char",
      url: characterSprite,
      frameConfig: {
        frameWidth: 32,
        frameHeight: 32,
        startFrame: 0,
        endFrame: 8,
      },
    });
    this.load.image({ key: "tileset", url: tileSet });
    this.load.tilemapTiledJSON("map", MapJson);
  }

  create() {
    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNumbers("char", { start: 0, end: 8 }),
      frameRate: 30,
      repeat: -1,
    });
    const character = this.add.sprite(200, 200, "char").setInteractive();
    character.anims.play("walk");

    const map = this.add.tilemap("map");

    console.log(map);

    this.cameras.main.setZoom(1);

    const set = map.addTilesetImage("Tileset", "tileset");
    const layer1 = map.createLayer("Tile Layer 1", [set]);

    character.on("pointerdown", (pointer) => {
      console.log("dfgfd");
      console.log(pointer);
    });
  }

  render() {}
}
