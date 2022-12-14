import { Entity } from '../utils';

export class Game extends Entity {
  public Entities: Entity[] = [];
  private _lastTimestamp = 0;

  public Awake(): void {
    super.Awake();

    for (const entity of this.Entities) {
      //Call Awaken on all child entities
      entity.Awake();
    }

    // Wait until next frame all the components finish Awakening
    window.requestAnimationFrame(() => {
      //Set initial time
      this._lastTimestamp = Date.now();

      //Enter recursive update loop
      this.Update();
    });
  }

  public Update(): void {
    //Get the time difference
    const deltaTime = (Date.now() - this._lastTimestamp) / 1000;

    //Updates all components
    super.Update(deltaTime);

    //Updates all child entities

    for (const entity of this.Entities) {
      entity.Update(deltaTime);
    }

    //Updates the time
    this._lastTimestamp = Date.now();

    //Recursively call this function on every frame to keep the game looping
    window.requestAnimationFrame(() => this.Update());
  }
}
