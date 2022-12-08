import Phaser, { Input } from "phaser";
import characterSprite from "../assets/graphics/spritesheets/char1.png";
import tileSet from "../assets/graphics/tileset/Tileset.png";
import MapJson from "../assets/maps/main.json";
import DebugScene from "./DebugScene";

export default class WorldScene extends Phaser.Scene {
  constructor() {
    super("world");
  }

  setupMap() {
    const map = this.add.tilemap("map");
    const set = map.addTilesetImage("Tileset", "tileset");
    const layer1 = map.createLayer("Tile Layer 1", [set]);
  }

  setupPlayer() {
    const character = this.add.sprite(200, 200, "char").setInteractive();

    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNumbers("char", { start: 0, end: 8 }),
      frameRate: 30,
      repeat: -1,
    });

    character.anims.play("walk");
    character.on("pointerdown", (pointer) => {
      //console.log(pointer);
    });
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
    this.scene.launch("Debug");
    this.setupMap();
    this.setupPlayer();
  }

  update() {}

  render() {}
}
