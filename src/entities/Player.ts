import { GameObjects, Scene } from "phaser";
export default class Player {
  private sprite: GameObjects.Sprite;
  private name: string = "Player";
  private scene: Scene;

  constructor(scene: Scene) {
    this.scene = scene;
  }
}
